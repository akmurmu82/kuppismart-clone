export default function CommitmentSection() {
    return (
        <section className="bg-[#e8e6da] py-12">
            <div className="mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-10">

                {/* Left Content */}
                <div className="w-full lg:w-1/2 space-y-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-snug text-right">
                        Our Commitment to{" "}
                        <span className="text-green-600">Sustainability</span>
                    </h2>

                    {/* Custom Divider */}
                    <div className="relative w-full h-[6px]">
                        {/* Base line */}
                        <div className="absolute top-2 left-0 w-full h-[1px] bg-green-800 -translate-y-1/2"></div>

                        {/* Rounded thick segment */}
                        <div className="absolute left-0 w-2/3 h-[15px] bg-[#92954D] rounded-full -translate-y-1/2"></div>

                        {/* Circle marker */}
                        <div className="absolute top-2 right-0 w-4 h-4 bg-green-700 rounded-full -translate-y-1/2"></div>
                    </div>
                </div>

                {/* Right Image with blur transition */}
                <div className="w-full lg:w-1/2 relative">
                    {/* Image */}
                    <img
                        src="https://res.cloudinary.com/dt8emxboh/image/upload/v1745482635/ysp2ydxjhmyxbgfg0uzu.png"
                        alt="Commitment to Sustainability"
                        className="object-cover w-full h-72 lg:h-96"
                    />

                    {/* Blur overlay to transition from text to image */}
                    <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#e8e6da] via-[#e8e6da]/70 to-transparent"></div>
                </div>
            </div>
        </section>
    );
}
