import  { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const navList = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About me" },
  { to: "/projects", label: "My Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
];


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    return (
        <header className="scroll-mt-20 bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between p-4">
                <span className="font-bold text-blue-500 transition hover:scale-110 cursor-pointer">
                    ESGUMBALL
                </span>
                <nav className="space-x-6 font-medium hidden md:flex ">
                    {navList.map((link, i) => (
                        <Link
                        to={link.to}
                        onClick={() => setSelected(link)}
                        className={`transition ${
                            location.pathname === link.to
                            ? "text-sky-400"
                            : "text-black hover:text-sky-400"
                        }`}
                        href={link.href}
                        key={i}>
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div 
                className="rounded-full p-2 cursor-pointer bg-red-500 text-yellow-100 hidden md:flex font-medium
                transition hover:scale-110 hover:bg-red-700 hover:text-yellow-300">
                    <Link to="/contact">Contact </Link>
                </div>
                
                {/*Menu hamburger for mobile*/}
                <div className='md:hidden'>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen 
                        ? <FontAwesomeIcon icon={faXmark} />
                        : <FontAwesomeIcon icon={faBars} />}
                    </button>
                </div>
            </div>

            { isMenuOpen && (
                    <div className='md:hidden bg-white border-t border-gray-200 shadow-md px-4 py-4 space-y-3
                    text-gray-700 font-medium'>
                        {navList.map((link) => (
                            <a 
                            href={link.href} key={link.href} 
                            className='block hover:text-sky-600 transition'
                            onClick={() => setIsMenuOpen(false)}>
                                {link.label}
                            </a>
                        ))}
                        <button
                        onClick={() => setIsMenuOpen(false)}
                        className='block hover:text-sky-600 transition'>
                            Contact
                        </button>
                    </div>
                )
            }
        </header>
    )
}

export default Header