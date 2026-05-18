import apiClient from './apiClient';

export const getUsers = () => apiClient.get("/users");
export const getUserById = (id: string) => apiClient.get(`/users/${id}`);
export const getUserInfo = (token: any) => apiClient.get(`/users`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
});
