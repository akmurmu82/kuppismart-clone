export default function ImpactSection() {
    return (
        <section className="bg-[#e8e6da] pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-[#7a9d3f] text-white rounded-2xl py-8 px-6 md:py-12 md:px-10">
                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
                        Our Impact
                    </h2>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-10 text-center">
                        {/* Card 1 */}
                        <div className="space-y-4">
                            <img
                                src="https://res.cloudinary.com/dt8emxboh/image/upload/v1745390075/uv9myl2jb8j2vve07nej.png"
                                alt="Smart IoT Clients"
                                className="mx-auto h-20 sm:h-24 md:h-28 object-contain"
                            />
                            <p className="text-sm sm:text-base md:text-lg font-semibold text-black">
                                100+ clients using smart IoT solutions
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="space-y-4">
                            <img
                                src="https://res.cloudinary.com/dt8emxboh/image/upload/v1745390260/a2wo3jh4ckuwnodblxtq.png"
                                alt="Productivity Increase"
                                className="mx-auto h-20 sm:h-24 md:h-28 object-contain"
                            />
                            <p className="text-sm sm:text-base md:text-lg font-semibold text-black">
                                25% increase in productivity
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="space-y-4">
                            <img
                                src="https://res.cloudinary.com/dt8emxboh/image/upload/v1745390318/nmj2ipp107bkdgglf6oa.png"
                                alt="Resource Saving"
                                className="mx-auto h-20 sm:h-24 md:h-28 object-contain"
                            />
                            <p className="text-sm sm:text-base md:text-lg font-semibold text-black">
                                Natural resource and water waste slashed by 40%
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
