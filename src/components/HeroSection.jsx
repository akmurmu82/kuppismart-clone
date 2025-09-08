import { Phone } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="bg-[#e8e6da]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-between">

                {/* Left Content */}
                <div className="max-w-xl text-center lg:text-left space-y-6">
                    <div className="text-right hight-0">
                        <h1 className="text-2xl md:text-4xl font-extrabold">
                            Smart IoT Solutions for a<br />
                            <span className="text-[#7a9d3f]">
                                Sustainable Future
                            </span>
                        </h1>
                        <div className="flex justify-end mt-2 h-10">
                            <img src="https://res.cloudinary.com/dt8emxboh/image/upload/v1745817632/jdnegc2zhketehva8i6n.png" alt="" />
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-gray-700 text-md font-semibold">
                            Harness the power of IoT to optimize productivity, enhance
                            efficiency, and build a greener tomorrow
                        </p>

                        <div className="my-5">
                            <a
                                href="#contact"
                                className="inline-flex items-center space-x-2 bg-[#7a9d3f] hover:bg-green-800 text-white font-medium px-6 py-3 rounded-lg shadow-md transition"
                            >
                                <Phone size={18} />
                                <span>Contact Us</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Content - Single Product Image */}
                <div className="mt-10 lg:mt-0 flex justify-center lg:justify-end">
                    <img
                        src="https://res.cloudinary.com/dt8emxboh/image/upload/v1745821669/bedikrcsckzppju5rfxz.png"
                        alt="IoT Device"
                        className="w-full max-w-lg object-contain transition duratin-300 hover:scale-110"
                    />
                </div>
            </div>
        </section>
    );
}
