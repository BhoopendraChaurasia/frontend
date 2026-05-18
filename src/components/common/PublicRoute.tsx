import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface Props {
    children: { children: React.ReactNode }
}

const PublicRoute = ({ children }: Props) => {

    const token = useSelector((state: any) => state.auth.token);

    if (token) {
        return <Navigate to="/userprofile" replace />;
    }

    return children;
}
export default PublicRoute;