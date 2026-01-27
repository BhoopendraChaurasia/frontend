import { FaEdit, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const UserProfile = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-16 px-4">

            {/* Profile Card */}
            <div className="max-w-4xl mx-auto bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">

                {/* Cover */}
                <div className="h-40 bg-gradient-to-r from-yellow-400 to-pink-400"></div>

                {/* Avatar */}
                <div className="relative flex justify-center">
                    <img
                        src="https://i.pravatar.cc/150"
                        alt="User Avatar"
                        className="w-32 h-32 rounded-full border-4 border-white -mt-16 shadow-lg"
                    />
                </div>

                {/* Content */}
                <div className="p-8 text-center text-white">
                    <h2 className="text-3xl font-bold">John Doe</h2>
                    <p className="text-white/80">Full Stack Developer</p>

                    {/* Info */}
                    <div className="flex justify-center gap-6 mt-4 text-white/90">
                        <div className="flex items-center gap-2">
                            <FaEnvelope />
                            <span>john@example.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaMapMarkerAlt />
                            <span>San Francisco, CA</span>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 mt-8">
                        <div>
                            <h3 className="text-2xl font-bold">120</h3>
                            <p className="text-white/70 text-sm">Projects</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">4.9</h3>
                            <p className="text-white/70 text-sm">Rating</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">8K</h3>
                            <p className="text-white/70 text-sm">Followers</p>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-center gap-4 mt-10">
                        <button className="flex items-center gap-2 bg-yellow-400 text-indigo-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
                            <FaEdit />
                            Edit Profile
                        </button>
                        <button className="flex items-center gap-2 border border-white/40 px-6 py-2 rounded-full hover:bg-white/20 transition">
                            <FaEnvelope />
                            Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
