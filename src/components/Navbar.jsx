import { useState } from "react";
import { Menu, X } from "lucide-react"; // install lucide-react if not already: npm i lucide-react

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#e8e6da] shadow-sm border-b border-gray-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-18">

                    {/* Logo + tagline */}
                    <div className="flex items-center space-x-2">
                        <img
                            src="https://res.cloudinary.com/dt8emxboh/image/upload/v1745313653/gyjkjrbk5q1kw7xnfwzr.png" // replace with your logo
                            alt="KuppiSmart"
                            className="h-10 w-auto"
                        />
                    </div>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#services" className="text-gray-800 hover:text-green-700 font-medium">
                            Services
                        </a>
                        <a href="#faqs" className="text-gray-800 hover:text-green-700 font-medium">
                            FAQs
                        </a>
                        <a href="#contact" className="text-gray-800 hover:text-green-700 font-medium">
                            Contact Us
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-800 focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 text-center">
                    <a href="#services" className="block text-gray-800 hover:text-green-700 font-medium">
                        Services
                    </a>
                    <a href="#faqs" className="block text-gray-800 hover:text-green-700 font-medium">
                        FAQs
                    </a>
                    <a href="#contact" className="block text-gray-800 hover:text-green-700 font-medium">
                        Contact Us
                    </a>
                    <button className="mt-2 w-full bg-green-700 hover:bg-green-800 text-white font-medium px-4 py-2 rounded-lg shadow-md transition">
                        Login
                    </button>
                </div>
            )}
        </nav>
    );
}
