import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaEnvelope,
    FaPhone
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { menus } from '../../routes'

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
                        <a href="#" className="hover:text-yellow-300 transition">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="hover:text-yellow-300 transition">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-yellow-300 transition">
                            <FaTwitter />
                        </a>
                        <a href="#" className="hover:text-yellow-300 transition">
                            <FaLinkedinIn />
                        </a>
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
                        <span>+91 12345 67890</span>
                    </p>
                    <p className="flex items-center space-x-2 hover:text-yellow-300 transition">
                        <FaEnvelope />
                        <span>hello@mybrand.com</span>
                    </p>
                    <p className="text-gray-200">
                        123 Web Street, Dev City, India
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
