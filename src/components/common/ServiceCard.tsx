import { useNavigate } from 'react-router-dom';

export default function ServiceCard({ key, service }: any) {
    const navigate = useNavigate();
    const contactHandler = () => {
        navigate('/contact');
    };
    return (
        <div key={key} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6">
            <div className="relative w-80 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:scale-105 transition-transform duration-300">

                {/* Gradient Accent */}
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />

                <div className="p-6 text-center">
                    {/* Icon */}
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-2xl shadow-lg">
                        {< service.icon />}
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-semibold text-white tracking-wide">
                        {service.title}
                    </h2>

                    {/* Subtitle */}
                    <p className="mt-2 text-sm text-gray-300">
                        {service.description}
                    </p>

                    {/* Divider */}
                    <div className="my-4 h-px bg-white/20" />

                    {/* Services */}
                    <ul className="space-y-2 text-gray-200 text-sm">
                        <li>✔ Service One</li>
                        <li>✔ Service Two</li>
                        <li>✔ Service Three</li>
                    </ul>

                    {/* Button */}
                    <button onClick={contactHandler} className="mt-6 w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 py-2 text-white font-medium hover:opacity-90 transition">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
}
