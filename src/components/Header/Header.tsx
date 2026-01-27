import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { menus } from '../../routes';
import { useNavigate, useLocation } from 'react-router-dom';


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const OpenSignUp = () => {
        navigate('/signup');
    }
    const OpenSignIn = () => {
        navigate("/signin");
    }

    return (
        <header className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-white shadow-lg sticky top-0 z-50 w-full">
            <div className="container mx-auto flex items-center p-4">

                {/* Left: Logo */}
                <div className="flex-1 text-2xl font-bold tracking-wide">
                    MyBrand
                </div>

                {/* Center: Navbar */}
                <nav className="hidden md:flex flex-1 justify-center space-x-8 font-semibold">
                    {menus.map(menu => (<NavLink key={menu.path} to={menu.path} className={`${location.pathname === menu.path && "text-green-500"} hover:text-yellow-300 transition`}>
                        {menu.title}
                    </NavLink>))}
                </nav>

                {/* Right: Auth Buttons */}
                <div className="flex-1 flex justify-end items-center space-x-4">
                    <button onClick={OpenSignIn} className="hover:text-yellow-300 transition">
                        Login
                    </button>
                    <button onClick={OpenSignUp} className="bg-yellow-400 text-indigo-900 px-4 py-1 rounded-md hover:bg-yellow-300 transition">
                        Register
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-2xl ml-4"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <nav className="md:hidden bg-indigo-500 text-white shadow-inner">
                    <ul className="flex flex-col text-center space-y-3 p-4 text-lg font-semibold">
                        {menus.map((menu, idx) => (<li key={idx}>
                            <NavLink to={menu.path} className={`${location.pathname === menu.path && "text-green-500"} block hover:text-yellow-300`}>
                                {menu.title}
                            </NavLink></li>)
                        )}
                        
                        <li>
                            <button onClick={OpenSignIn} className="hover:text-yellow-300">
                                Login
                            </button>
                        </li>
                        <li>
                            <button onClick={OpenSignUp} className="bg-yellow-400 text-indigo-900 px-4 py-2 rounded-md">
                                Register
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
