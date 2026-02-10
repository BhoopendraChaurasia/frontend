
import { NavLink, Link } from 'react-router-dom';
import { menus } from '../../routes'
import { contact, FooterIcon } from '../../data/Services'
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaEnvelope,
    FaPhone
} from "react-icons/fa";
export default function Footer() {

    return (
        <footer className="bg-black text-white py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Branding / About */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold">MyBrand</h3>
                    <p className="text-gray-200 max-w-sm">
                        We build beautiful experiences on the web — clean, responsive, and fast.
                    </p>
                    <div className="flex space-x-4 text-xl">
                        {FooterIcon.map((item: { url: string; icon: React.ComponentType }) => 
                            <Link key={item.url} to={item.url} className="hover:text-yellow-300 transition">{<item.icon />}</Link>)}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-2">
                    <h4 className="text-xl font-semibold">Quick Links</h4>
                    {menus.map((menu, idx) => (<NavLink key={idx} to={menu.path} className="block hover:text-yellow-300 transition">
                        {menu.title}
                    </NavLink>))}
                </div>

                {/* Contact Info */}
                <div className="space-y-2">
                    <h4 className="text-xl font-semibold">Contact Us</h4>
                    <p className="flex items-center space-x-2 hover:text-yellow-300 transition">
                        <FaPhone />
                        <span>{contact.phone}</span>
                    </p>
                    <p className="flex items-center space-x-2 hover:text-yellow-300 transition">
                        <FaEnvelope />
                        <span>{contact.email}</span>
                    </p>
                    <p className="flex items-center space-x-2 hover:text-yellow-300 transition">
                        <FaLocationCrosshairs />
                        <span>{contact.address}</span>
                    </p>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="text-center text-gray-300 text-sm mt-8">
                © {new Date().getFullYear()} MyBrand — All rights reserved.
            </div>
        </footer>
    );
}
