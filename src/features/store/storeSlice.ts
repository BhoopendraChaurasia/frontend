import { createSlice } from "@reduxjs/toolkit";
import type { payloadAction} from "@reduxjs/toolkit";

const initialState = [];

export const storeSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        storeAdded(state, action) {
            
        }
    }
})