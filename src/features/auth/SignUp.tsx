import { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const SignIn = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e:any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        console.log("Signup Data:", formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 px-4">
            <div className="bg-white p-8 my-15 rounded-2xl shadow-2xl w-full max-w-md">

                {/* Header */}
                <h2 className="text-3xl font-bold text-center text-gray-800">
                    Create Account
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    Join us and start your journey 🚀
                </p>

                {/* Social Login */}
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

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="px-3 text-gray-400 text-sm">OR</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-500 transition shadow-md"
                    >
                        Create Account
                    </button>
                </form>

                {/* Footer */}
                <p className="text-sm text-center text-gray-600 mt-6">
                    Already have an account?{" "}
                    <span className="text-indigo-600 hover:underline cursor-pointer">
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
