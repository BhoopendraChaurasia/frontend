import { Outlet } from "react-router-dom";
import type {FC} from "react";

const AuthLayout: FC = () => {

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default AuthLayout;
