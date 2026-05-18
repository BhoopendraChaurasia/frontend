import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCourses } from "../../services/courseService";

export const courseList = createAsyncThunk(
    "/course/courseList",
    async () => {
        try {
            const response = await getAllCourses();
            return response.data;
        } catch(error) {

        }
    }
);


const initialState = {
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
                state.error = action.payload || "Some issue fetch course";
            })
    }
});


export default coursesSlice.reducer;

