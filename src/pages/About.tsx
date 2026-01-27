// AboutPage.jsx
import { FaUsers, FaChalkboardTeacher, FaRegChartBar } from "react-icons/fa";
import AboutImage from "../assets/school/about-image.jpg"; // Replace with your image path

const About = () => {
    return (
        <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 min-h-screen py-16 px-6">
            {/* Hero Section */}
            <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 mb-16">
                {/* Text */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-5xl font-extrabold text-purple-700 mb-4">
                        Student Trainer Management System
                    </h1>
                    <p className="text-gray-700 text-lg mb-6">
                        Empowering Learning. Streamlining Training. Inspiring Growth.
                    </p>
                    <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300">
                        Get Started
                    </button>
                </div>

                {/* Image */}
                <div className="flex-1">
                    <img
                        src={AboutImage}
                        alt="Student Trainer Illustration"
                        className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">
                <div className="bg-white shadow-lg rounded-xl p-8 hover:scale-105 transition-transform duration-300">
                    <h2 className="text-2xl font-bold text-purple-600 mb-4">🎯 Our Mission</h2>
                    <p className="text-gray-600">
                        To empower educational institutions with an intuitive platform that simplifies
                        training management while fostering meaningful learning experiences.
                    </p>
                </div>
                <div className="bg-white shadow-lg rounded-xl p-8 hover:scale-105 transition-transform duration-300">
                    <h2 className="text-2xl font-bold text-purple-600 mb-4">🌍 Our Vision</h2>
                    <p className="text-gray-600">
                        To create a connected, efficient, and inspiring educational journey through
                        technology, making training management effortless for all.
                    </p>
                </div>
            </div>

            {/* Features */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-purple-700 mb-8">🚀 Key Features</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                        <FaUsers className="text-purple-600 text-4xl mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-2">Smart Student Management</h3>
                        <p className="text-gray-600">
                            Track student profiles, attendance, and performance effortlessly.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                        <FaChalkboardTeacher className="text-purple-600 text-4xl mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-2">Efficient Trainer Allocation</h3>
                        <p className="text-gray-600">
                            Assign trainers to students or batches seamlessly and effectively.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                        <FaRegChartBar className="text-purple-600 text-4xl mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-2">Performance Tracking</h3>
                        <p className="text-gray-600">
                            Generate insightful reports to monitor growth and evaluate training success.
                        </p>
                    </div>
                </div>
            </div>

            {/* Call-to-Action */}
            <div className="bg-purple-600 text-white rounded-xl p-12 text-center max-w-3xl mx-auto hover:scale-105 transition-transform duration-300">
                <h2 className="text-3xl font-bold mb-4">📘 Learn. Train. Succeed.</h2>
                <p className="text-lg mb-6">
                    Student Trainer Management System — where organization meets innovation.
                </p>
                <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-purple-100 transition-colors duration-300">
                    Join Now
                </button>
            </div>
        </div>
    );
};

export default About;
