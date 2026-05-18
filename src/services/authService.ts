import apiClient from './apiClient';

export const createUser = (data: any) => apiClient.post("/auth/register", data);
export const generateToken = (data: any) => apiClient.post("/auth/generate-token", data);
export const validateToken = (token: any) => apiClient.get(`/auth/validate-token`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
});
