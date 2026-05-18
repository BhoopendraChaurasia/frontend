import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUser } from "../../services/authService";
import type {
    RegisterState,
    RegisterResponse,
    RegisterPayload,
} from "../types/common";

export const registerUser = createAsyncThunk<
    RegisterResponse,
    RegisterPayload,
    { rejectValue: string }
>("auth/registerUser", async (payload, thunkAPI) => {
    try {
        const response = await createUser(payload);

        if (response.status !== 201) {
            return thunkAPI.rejectWithValue(
                response.data?.message || "Registration failed"
            );
        }

        return response.data;
    } catch (error: any) {
        return thunkAPI.rejectWithValue(
            error.response?.data?.message ||
            error.message ||
            "Something went wrong"
        );
    }
});

const initialState: RegisterState = {
    data: null,
    loading: false,
    error: null,
};

export const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ?? "Registration failed";
            });
    },
});

export default registerSlice.reducer;