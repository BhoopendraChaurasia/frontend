import { createSlice, createAsyncThunk, type AsyncThunkConfig } from "@reduxjs/toolkit";
import { getAllCourses } from "../../services/courseService";

export const courseList = createAsyncThunk<any, void, AsyncThunkConfig>(
    "/course/courseList",
    async () => {
        try {
            const response = await getAllCourses();
            return response.data;
        } catch(error) {
            
        }
    }
);

type State = {
    loading: boolean;
    error: string | null;
    data: any[]; // replace `any` with your actual type
};


const initialState : State = {
    loading: false,
    error: null,
    data: [],
};

export const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(courseList.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(courseList.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(courseList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || "Some issue fetch course";
            })
    }
});


export default coursesSlice.reducer;

