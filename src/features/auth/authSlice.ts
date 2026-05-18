import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { InitialState } from "../types/common";
import { generateToken} from "../../services/authService";
import { type FormDataSignIn } from "./auth.types";


// Async login action
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (credentials: FormDataSignIn, thunkAPI) => {
        try {
            const response = await generateToken(credentials);

            if (response.statusText !== "OK") {
                return thunkAPI.rejectWithValue(response.data);
            }

            // save token on local
            localStorage.setItem("token", response.data.token);

            return response.data;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch(error: any){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)


const initialState: InitialState = {
    user: null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
        token: (state) => {
            state.token = null;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.loading = false;
            state.error = null;
            localStorage.removeItem("token");
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string | null
            });
    },

});


export const { logout, clearError, token } = authSlice.actions;

export default authSlice.reducer;