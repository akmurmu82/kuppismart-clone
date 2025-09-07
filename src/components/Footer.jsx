export default function Footer() {
    return (
        <footer className="bg-[#7c9257] text-center">
            {/* Logo Section */}
            <div className="bg-[#e8e6da] inline-block px-6 py-3 rounded-b-xl mt-[-20px]">
                <img
                    src="https://res.cloudinary.com/dt8emxboh/image/upload/v1745581307/q1630fdbgrdgn6sjz8co.png" // replace with your logo path
                    alt="KuppiSmart Logo"
                    className="h-15 mx-auto"
                />
            </div>

            {/* Copyright */}
            <div className="border-t border-white mt-4 py-4">
                <p className="text-sm text-black font-bold">
                    Copyright © 2024 All rights reserved.
                </p>
            </div>
        </footer>
    );
}
