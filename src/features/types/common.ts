import type { ComponentType } from 'react'

export interface RouteType {
    path: string;
    element: ComponentType
    name?: string;
}

export interface Menus {
    path: string,
    title: string,
};

