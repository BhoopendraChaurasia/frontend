import schoolImg from "../assets/school/school-hero.jpg";

export default function Home() {
    return (
        <main className="bg-white text-gray-800">
            {/* Hero Section */}
            <section className="relative bg-indigo-600 text-white py-20 px-6 text-center md:text-left">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                            Welcome to Student Management System
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-gray-200">
                            Organize, track, and manage student data smoothly and efficiently.
                        </p>
                        <div className="mt-6 flex gap-4 justify-center md:justify-start">
                            <button className="bg-yellow-400 text-indigo-900 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition">
                                Get Started
                            </button>
                            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img src={schoolImg} alt="Students Dashboard" className="rounded-lg shadow-xl" />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="container mx-auto py-20 text-center">
                <h2 className="text-3xl font-bold mb-10">Features You’ll Love</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="bg-indigo-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold mb-2">Student Profiles</h3>
                        <p>View and manage student details with ease.</p>
                    </div>
                    <div className="bg-indigo-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold mb-2">Attendance Tracking</h3>
                        <p>Easily track attendance and performance.</p>
                    </div>
                    <div className="bg-indigo-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold mb-2">Performance Analytics</h3>
                        <p>Smart charts and data for better insights.</p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-indigo-600 text-white py-12 text-center">
                <h2 className="text-2xl font-semibold">
                    Ready to manage your students better?
                </h2>
                <button className="mt-4 bg-yellow-400 text-indigo-900 font-bold px-8 py-3 rounded-md">
                    Join Now
                </button>
            </section>
        </main>
    );
}
