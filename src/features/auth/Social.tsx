import { FaGoogle, FaFacebookF } from "react-icons/fa";

const Social = () => {
    return (
        <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 border rounded-lg py-2 hover:bg-gray-100 transition">
                <FaGoogle className="text-red-500" />
                <span className="font-medium">Continue with Google</span>
            </button>
            <button className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-500 transition">
                <FaFacebookF />
                <span className="font-medium">Continue with Facebook</span>
            </button>
        </div>
    )
};

export default Social;