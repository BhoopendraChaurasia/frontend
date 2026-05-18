import { type UserProfileState } from "./auth.types"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { validateToken } from "../../services/authService";
import { type UserResponse } from "./auth.types";
import axios from "axios";

export const userProfile = createAsyncThunk<UserResponse, string, {rejectValue: string}>(
    "/auth/validateToken",
    async(token: string, thunkAPI) => {
        try {
            const response = await validateToken(token);
            if (response.status !== 200) {
                return thunkAPI.rejectWithValue(response.data?.message || "Some issue data return");
            }

            return response.data;
        } catch(error: unknown) {
            if (axios.isAxiosError(error)) {

                return thunkAPI.rejectWithValue(
                    error.response?.data?.message ||
                    error.message
                );
            }

            return thunkAPI.rejectWithValue(
                "Something went wrong"
            );
        }
    }
);


const initialState: UserProfileState = {
    loading: false,
    error: null,
    data: 0,
};

export const profileSlice = createSlice({
    name: "userprofile",
    initialState,
    reducers: {},
    
    extraReducers: (builder) => {
        builder
        .addCase(userProfile.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(userProfile.fulfilled, (state, action) => {
            state.loading = false;
            state.data= action.payload;
        })
        .addCase(userProfile.rejected, (state, action) => {
            state.loading = false;
            state.error = (action.payload as string) || "Failed to fetch profile";
        });
    },
})

export default profileSlice.reducer;