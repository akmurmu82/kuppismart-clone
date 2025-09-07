import { Mail, Phone, MapPin, Facebook } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function ContactSection() {
    return (
        <section className="bg-[#e8e6da] py-12 px-12 border" id="contact">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-10 gap-10">
                {/* Contact Form (70%) */}
                <div className="bg-[#9bbb5e] rounded-xl shadow-md p-6 md:col-span-7">
                    <h2 className="text-lg font-bold">Get In Touch with Us!</h2>
                    <p className="text-sm text-gray-700 mt-1">
                        Have a question or need a tailored IoT solution? Fill out the form,
                        and our team will reach out to you soon!
                    </p>

                    <form className="px-15 mt-6 space-y-4 text-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full bg-white px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-white px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full bg-white px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                        />
                        <textarea
                            placeholder="Message"
                            rows="4"
                            className="w-full bg-white px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-green-900 text-white px-6 py-2 rounded-md hover:bg-green-800 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Details (30%) */}
                <div className="bg-[#9bbb5e] rounded-xl shadow-md p-6 md:col-span-3 flex flex-col justify-between">
                    {/* Heading */}
                    <h2 className="text-lg font-bold mb-6">Contact Details</h2>

                    {/* Info */}
                    <div className="space-y-6 text-sm">
                        {/* Address */}
                        <div>
                            <p className="gap-2 font-bold mb-1">
                                Address
                            </p>
                            <p className="flex items-center text-gray-800 ml-6 border-b border-gray-300 pb-2">
                                <MapPin className="w-4 h-4 mr-2" /> T-Hub Phase 2, Hyderabad
                            </p>
                        </div>

                        {/* Phone */}
                        <div>
                            <p className="gap-2 font-bold mb-1">
                                Phone
                            </p>
                            <p className="flex items-center text-gray-800 ml-6 border-b border-gray-300 pb-2">
                                <Phone className="w-4 h-4 mr-2" /> +91-8683484493
                            </p>
                        </div>

                        {/* Email */}
                        <div>
                            <p className="gap-2 font-bold mb-1">
                                Email
                            </p>
                            <p className="flex items-center text-gray-800 ml-6 border-b border-gray-300 pb-2">
                                <Mail className="w-4 h-4 mr-2" /> akhilreddy@livestockify.com
                            </p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="mt-8 text-center">
                        <p className="font-bold mb-3">Follow us on</p>
                        <div className="flex justify-center gap-4">
                            <a
                                href="#"
                                className="w-9 h-9 mr-3 rounded-full bg-white flex items-center justify-center shadow hover:bg-green-500"
                            >
                                <FaFacebookF className="text-black text-lg" />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 mr-3 rounded-full bg-white flex items-center justify-center shadow hover:bg-green-500"
                            >
                                <FaTwitter className="text-black text-lg" />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 mr-3 rounded-full bg-white flex items-center justify-center shadow hover:bg-green-500"
                            >
                                <FaLinkedinIn className="text-black text-lg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
