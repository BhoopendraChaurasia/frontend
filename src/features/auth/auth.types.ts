import type { User } from "../user/user.types";

export interface LoginPayload {
    email: string;
    password: string;
}

export interface AuthResponse {
    token: string;
    user: User;
}


export type InputProps = {

    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

export type FormDataSignUp = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export type FormField = {
    type: string;
    name: keyof FormDataSignUp | string;
    placeholder: string;
}

export type FormDataSignIn = {
    username: string;
    password: string;
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





