export default function ImpactSection() {
    return (
        <section className="bg-[#e8e6da] pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-green-600 text-white rounded-2xl py-12 px-6">
                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                        Our Impact
                    </h2>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                        {/* Card 1 */}
                        <div className="space-y-4">
                            <img
                                src="https://res.cloudinary.com/dt8emxboh/image/upload/v1745390075/uv9myl2jb8j2vve07nej.png"
                                alt="Smart IoT Clients"
                                className="mx-auto h-28 object-contain"
                            />
                            <p className="text-lg font-semibold text-black">
                                100+ clients using smart IoT solutions
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="space-y-4">
                            <img
                                src="https://res.cloudinary.com/dt8emxboh/image/upload/v1745390260/a2wo3jh4ckuwnodblxtq.png"
                                alt="Productivity Increase"
                                className="mx-auto h-28 object-contain"
                            />
                            <p className="text-lg font-semibold text-black">
                                25% increase in productivity
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="space-y-4">
                            <img
                                src="https://res.cloudinary.com/dt8emxboh/image/upload/v1745390318/nmj2ipp107bkdgglf6oa.png"
                                alt="Resource Saving"
                                className="mx-auto h-28 object-contain"
                            />
                            <p className="text-lg font-semibold text-black">
                                Natural resource and water waste slashed by 40%
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
