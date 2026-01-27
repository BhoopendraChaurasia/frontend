import {
    FaCode,
    FaPaintBrush,
    FaMobileAlt,
    FaCloud,
    FaRocket,
    FaShieldAlt,
} from "react-icons/fa";

const services = [
    {
        title: "Web Development",
        description:
            "Modern, scalable, and high-performance websites built with the latest technologies.",
        icon: <FaCode />,
    },
    {
        title: "UI / UX Design",
        description:
            "Beautiful, user-focused designs that convert visitors into customers.",
        icon: <FaPaintBrush />,
    },
    {
        title: "Mobile Apps",
        description:
            "Cross-platform mobile apps with smooth performance and stunning UI.",
        icon: <FaMobileAlt />,
    },
    {
        title: "Cloud Solutions",
        description:
            "Secure and scalable cloud infrastructure for your business.",
        icon: <FaCloud />,
    },
    {
        title: "Startup Launch",
        description:
            "From idea to launch — we help startups go live fast and strong.",
        icon: <FaRocket />,
    },
    {
        title: "Cyber Security",
        description:
            "Protect your digital assets with enterprise-grade security solutions.",
        icon: <FaShieldAlt />,
    },
];

const Services = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-16 px-4">

            {/* Header */}
            <div className="text-center text-white max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                    Our Services 🚀
                </h1>
                <p className="text-white/80 text-lg">
                    We craft digital experiences that help businesses grow and stand out.
                </p>
            </div>

            {/* Services Grid */}
            <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white/20 backdrop-blur-xl rounded-2xl p-8 text-white shadow-2xl hover:scale-105 transition-transform duration-300"
                    >
                        <div className="text-4xl mb-4 text-yellow-300">
                            {service.icon}
                        </div>

                        <h3 className="text-2xl font-bold mb-3">
                            {service.title}
                        </h3>

                        <p className="text-white/80">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-20">
                <h2 className="text-3xl font-bold text-white mb-4">
                    Ready to start your project?
                </h2>
                <p className="text-white/80 mb-6">
                    Let’s build something amazing together.
                </p>
                <button className="bg-yellow-400 text-indigo-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition shadow-lg">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Services;
