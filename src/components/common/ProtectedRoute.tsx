import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { type ReactNode } from "react";

interface Props {
    children: ReactNode; 
}

const ProtecterRoute = ({children}: Props) => {
    
    const token = useSelector((state: any) => state.auth.token);

    if (!token) {
        return <Navigate to="/signin" replace />;
    }

    return children;
}
export default ProtecterRoute;