import type { User } from "../user/user.types";

export interface LoginPayload {
    email: string;
    password: string;
}

export interface AuthResponse {
    token: string;
    user: User;
}

export interface UserResponse {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    roles: string;
}

export interface UserProfileState {
    loading: boolean;
    error: string | null;
    data: UserResponse | 0;
}


