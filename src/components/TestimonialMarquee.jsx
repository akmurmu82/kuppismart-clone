export default function TestimonialMarquee() {
    const testimonials = [
        {
            name: "Senthilvel",
            role: "Broiler Poultry Farm Tamil Nadu",
            image: "/user-avatar1.jpg",
            text: "I’m amazed at how Kuppismart has improved the efficiency of my broiler farm. The automation features have saved me time and money, while the data insights have helped me optimize feed management and reduce waste."
        },
        {
            name: "Priya Kumar",
            role: "Layer Poultry Farm Kerala",
            image: "/user-avatar2.jpg",
            text: "Kuppismart has streamlined our operations completely. Feed wastage has reduced, and we now make better decisions based on real-time insights."
        },
        {
            name: "Ravi Shankar",
            role: "Organic Poultry Farm Karnataka",
            image: "/user-avatar3.jpg",
            text: "The automation has saved us countless hours of manual work. It’s a must-have for any poultry farmer aiming to scale efficiently."
        }
    ];

    return (
        <section className="bg-[#e8e6da] py-8 overflow-hidden">
            <div className="max-w-3xl mx-auto px-4 text-center space-y-4 mb-8">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                    We let our <span className="text-green-600">clients</span> be <br /> our speaker
                </h2>

                {/* Subtitle */}
                <p className="mt-4 text-gray-700 text-bold md:text-lg">
                    See how KuppiSmart is transforming <br className="hidden md:block" /> farms with smart IoT solutions
                </p>

                {/* CTA Button */}
                <div className="mt-6">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-[#7a9d3f] text-white px-6 py-2 rounded-lg shadow hover:bg-[#7a9d3f] transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 6.75l8.954 5.372c.47.282 1.072.282 1.542 0L21.75 6.75M2.25 17.25h19.5c.621 0 1.125-.504 1.125-1.125V7.875c0-.621-.504-1.125-1.125-1.125H2.25c-.621 0-1.125.504-1.125 1.125v8.25c0 .621.504 1.125 1.125 1.125z"
                            />
                        </svg>
                        Contact Us
                    </a>
                </div>
            </div>
            <div className="relative w-full">
                {/* Wrapper for infinite scroll */}
                <div className="flex animate-marquee space-x-6">
                    {[...testimonials, ...testimonials].map((t, index) => (
                        <div
                            key={index}
                            className="w-80 p-4 rounded-2xl shadow-md bg-white flex-shrink-0 flex flex-col space-y-3"
                        >
                            {/* User Info */}
                            <div className="flex items-center space-x-3">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="text-sm font-semibold">{t.name}</h3>
                                    <p className="text-xs text-gray-500">{t.role}</p>
                                </div>
                            </div>

                            {/* Testimonial */}
                            <p className="text-sm text-gray-600 leading-relaxed italic">
                                “{t.text}”
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
