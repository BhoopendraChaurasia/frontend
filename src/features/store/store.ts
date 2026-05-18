import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/authSlice";
import registerReducer from "../auth/registerSlice";
import profileReducer from "../auth/profileSlice";
import courseReducer from "../course/courseSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        register: registerReducer,
        profile: profileReducer,
        courses: courseReducer,        
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;