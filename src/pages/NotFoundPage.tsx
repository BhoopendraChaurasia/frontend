import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-100 to-pink-200 text-center px-6">
            <h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>
            <h2 className="text-3xl font-bold mb-2">Page Not Found</h2>
            <p className="text-gray-700 mb-6">
                Oops! The page you are looking for does not exist.
            </p>
            <Link
                to="/"
                className="bg-red-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-700 transition-colors duration-300"
            >
                Go Home
            </Link>
        </div>
    );
};

export default NotFoundPage;
