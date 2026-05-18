import apiClient from "./apiClient";

export const getAllCourses = () => apiClient.get("courses");