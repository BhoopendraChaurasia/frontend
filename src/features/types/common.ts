import type { ReactNode, FC } from 'react'

export type Middleware = (children: ReactNode) => ReactNode;


export interface RouteType1 {
  path: string;
  Component?: FC;
  element?: ReactNode;
  children?: RouteType[];
  middleware?: Middleware[]; 
}

export type RouteType =
    | {
        path: string;
        Component: FC;
        element?: never;
        children?: RouteType[];
        middleware?: Middleware[];
    }
    | {
        path: string;
        element: ReactNode;
        Component?: never;
        children?: RouteType[];
        middleware?: Middleware[];
    };


export interface Menus {
    path: string,
    title: string,
};

export interface InitialState {
    user: string | null,
    token: string | null,
    loading: boolean,
    error: string | null,
}

export interface RegisterState {
    data: any,
    loading: boolean,
    error: string | null,
}

export interface RegisterResponse {
    id: string,
    username: string,
}

export interface RegisterPayload {
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    password: string,  
    roles: string
}


export interface LoginPayload {
    username: string,
    password: string,
}




