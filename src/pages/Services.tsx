import ServiceCard from '../components/common/ServiceCard.tsx';
import {services} from '../data/Services.js'

const Services = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-16 px-4">

            {/* Header */}
            <div className="text-center text-white max-w-3xl mx-auto mb-16">
                <h1 style={{ fontSize: '70px' }} className="md:text-5xl font-semibold mb-4">
                    Our Services
                </h1>
                <p className="text-white/80 mt-10">
                    We craft digital experiences that help businesses grow and stand out.
                </p>
            </div>

            {/* Services Grid */}
            <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => <ServiceCard key={index} service={service} />)}
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
