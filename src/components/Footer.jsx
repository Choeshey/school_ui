import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* School Info */}
                <div className="md:col-span-1">
                    <h3 className="text-xl font-bold mb-4">St John Secondary School</h3>
                    <p className="text-gray-400">Providing quality education and fostering a community of learners since 1985.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-[#009B4D] transition-colors">Home</Link></li>
                        <li><Link to="/about" className="hover:text-[#009B4D] transition-colors">About</Link></li>
                        <li><Link to="/courses" className="hover:text-[#009B4D] transition-colors">Courses</Link></li>
                        <li><Link to="/contact" className="hover:text-[#009B4D] transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li>123 School Lane, Education City</li>
                        <li>Phone: (123) 456-7890</li>
                        <li>Email: info@stjohn.edu</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-[#009B4D] transition-colors"><FaFacebook size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-[#009B4D] transition-colors"><FaTwitter size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-[#009B4D] transition-colors"><FaInstagram size={24} /></a>
                    </div>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} St John Secondary School. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
