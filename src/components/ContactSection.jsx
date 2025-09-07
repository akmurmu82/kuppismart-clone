import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
    return (
        <section className="bg-[#e8e6da] py-12 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-10 gap-6">
                {/* Contact Form (70%) */}
                <div className="bg-[#9bbb5e] rounded-xl shadow-md p-6 md:col-span-7">
                    <h2 className="text-lg font-bold">Get In Touch with Us!</h2>
                    <p className="text-sm text-gray-700 mt-1">
                        Have a question or need a tailored IoT solution? Fill out the form,
                        and our team will reach out to you soon!
                    </p>

                    <form className="mt-6 space-y-4">
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
                    <div>
                        <h2 className="text-lg font-bold mb-4">Contact Details</h2>
                        <div className="space-y-4 text-sm">
                            <div>
                                <p className="flex items-center gap-2 font-medium">
                                    <MapPin className="w-4 h-4" /> Address
                                </p>
                                <p className="text-gray-800 ml-6">T-Hub Phase 2, Hyderabad</p>
                            </div>
                            <div>
                                <p className="flex items-center gap-2 font-medium">
                                    <Phone className="w-4 h-4" /> Phone
                                </p>
                                <p className="text-gray-800 ml-6">+91-8683484493</p>
                            </div>
                            <div>
                                <p className="flex items-center gap-2 font-medium">
                                    <Mail className="w-4 h-4" /> Email
                                </p>
                                <p className="text-gray-800 ml-6">akhilreddy@livestockify.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="mt-6">
                        <p className="font-medium mb-2">Follow us on</p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow hover:bg-green-100"
                            >
                                <i className="fab fa-facebook-f text-green-700"></i>
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow hover:bg-green-100"
                            >
                                <i className="fab fa-twitter text-green-700"></i>
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow hover:bg-green-100"
                            >
                                <i className="fab fa-linkedin-in text-green-700"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
