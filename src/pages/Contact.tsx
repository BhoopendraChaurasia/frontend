import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center px-4 py-12">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">

                {/* Left Section – Info */}
                <div className="text-white flex flex-col justify-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Let’s talk about your project 💬
                    </h1>
                    <p className="text-white/80 text-lg">
                        Have a question, idea, or just want to say hi?
                        We’d love to hear from you.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-2xl" />
                            <span>contact@mybrand.com</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaPhoneAlt className="text-2xl" />
                            <span>+1 234 567 890</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaMapMarkerAlt className="text-2xl" />
                            <span>New York, USA</span>
                        </div>
                    </div>
                </div>

                {/* Right Section – Form */}
                <div className="bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl p-8">
                    <h2 className="text-2xl font-bold text-white mb-6">
                        Send us a message
                    </h2>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 rounded-lg bg-white/90 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-3 rounded-lg bg-white/90 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />

                        <textarea
                            rows={4}
                            placeholder="Your Message"
                            className="w-full px-4 py-3 rounded-lg bg-white/90 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                            required
                        />

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-500 transition shadow-lg"
                        >
                            Send Message 🚀
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;
