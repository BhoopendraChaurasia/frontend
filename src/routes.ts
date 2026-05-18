import { createElement, type ReactNode } from "react";
import type { Menus } from "./features/types/common";
import ProtectedRoute from "./components/common/ProtectedRoute";
import PublicRoute from "./components/common/PublicRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import DocsPage from "./components/layouts/SidebarLayout";
import Course from "./pages/Course";
import Contact from "./pages/Contact";
import SignUp from "./features/auth/SignUp";
import SignIn from "./features/auth/SignIn";
import UserProfile from "./features/user/UserProfile";
import NotFoundPage from "./pages/NotFoundPage";
import AuthLayout from "./components/layouts/AuthLayout";
import { type Middleware } from "./features/types/common";

export const menus: Menus[] = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/services", title: "Services" },
    { path: "/docs", title: "Docs" },
    { path: "/course", title: "Course" },
    { path: "/contact", title: "Contact" },
];


const withAuth: Middleware = (children: ReactNode) => createElement(ProtectedRoute, null, children);

const withoutAuth: Middleware = (children: ReactNode) => createElement(PublicRoute, null, children);


export const routes = [
    { path: "/", Component: Home },
    { path: "/about", Component: About  },
    { path: "/services", Component: Services },
    { path: "/docs", Component: DocsPage },
    { path: "/course", Component: Course },
    { path: "/contact", Component: Contact },

    {
        path: "/",
        middleware: [withoutAuth],
        Component: AuthLayout,
        children: [
            { path: "signup", Component: SignUp },
            { path: "signin", Component: SignIn },
        ],
    },
    {
        path: "/userprofile",
        middleware: [withAuth],
        Component: UserProfile
    },
    { path: "*", Component: NotFoundPage },
];