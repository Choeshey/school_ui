import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-[100]">
            <nav className="w-full p-4">
                <div className="flex justify-between items-center w-full">
                    <Link to="/" className="flex items-center">
                        <h1 className="text-[#009B4D] font-bold text-2xl mr-2">St John</h1>
                        <span className="text-lg">Secondary School</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <ul className="flex items-center space-x-8">
                            <li className="hover:text-[#009B4D] transition-colors">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="hover:text-[#009B4D] transition-colors">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="hover:text-[#009B4D] transition-colors">
                                <Link to="/courses">Courses</Link>
                            </li>
                            <li className="hover:text-[#009B4D] transition-colors">
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <button className="bg-[#009B4D] text-white px-6 py-2 rounded-full hover:bg-[#008744] transition-colors ml-4">
                            Get In Touch
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-700">
                        {mobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu Panel */}
                <div className={`md:hidden mt-4 overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                    <ul className="flex flex-col space-y-4">
                        <li className="hover:text-[#009B4D] transition-colors">
                            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                        </li>
                        <li className="hover:text-[#009B4D] transition-colors">
                            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
                        </li>
                        <li className="hover:text-[#009B4D] transition-colors">
                            <Link to="/courses" onClick={() => setMobileMenuOpen(false)}>Courses</Link>
                        </li>
                        <li className="hover:text-[#009B4D] transition-colors">
                            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                        </li>
                        <li>
                            <button className="w-full bg-[#009B4D] text-white px-6 py-2 rounded-full hover:bg-[#008744] transition-colors">
                                Get In Touch
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
