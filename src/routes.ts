// routes.ts
import { lazy } from 'react'
import type { Menus, RouteType } from './features/types/common'


const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const SignUp = lazy(() => import("./features/auth/SignUp"));
const SignIn = lazy(() => import("./features/auth/SignIn"));
const UserProfile = lazy(() => import("./features/user/UserProfile"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));


export const menus: Menus[] = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/services", title: "Service" },
    { path: "/galary", title: "Galary" },
    { path: "/contact", title: "Contact" }
];

export const routes: RouteType[] = [
    { path: "/", element: Home, name: "Home" },
    { path: "/about", element: About, name: "About" },
    { path: "/services", element: Services, name: "Services" },
    { path: "/contact", element: Contact, name: "Contact" },
    { path: "/signup", element: SignUp, name: "SignUp" },
    { path: "/signin", element: SignIn, name: "SignIn" },
    { path: "/userprofile", element: UserProfile, name: "UserProfile" },
    { path: "*", element: NotFoundPage, name: "" },
];
