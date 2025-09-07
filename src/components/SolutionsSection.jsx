export default function SolutionsSection() {
    const solutions = [
        {
            title: "Smart IoT Solutions for Efficient Sewage Water Treatment",
            img: "https://res.cloudinary.com/dt8emxboh/image/upload/v1745478651/oqyhv2pvlroflh3edwgd.png",
        },
        {
            title: "IoT Smart Solutions for Shrimp & Aqua Farming",
            img: "https://res.cloudinary.com/dt8emxboh/image/upload/v1745478678/ruwtugotkon8kjtchlvo.png",
        },
        {
            title: "IoT-Powered Smart Solutions for Efficient Poultry Farming",
            img: "https://res.cloudinary.com/dt8emxboh/image/upload/v1745478702/yvwebnxcerpfgljd8zta.png",
        },
        {
            title: "IoT Smart Solutions for Hydroponic & Controlled Farming",
            img: "https://res.cloudinary.com/dt8emxboh/image/upload/v1745478722/pu2gnvaypdmgwcvsgrt8.png",
        },
        {
            title: "IoT-Driven Smart Automation for Industrial Efficiency",
            img: "https://res.cloudinary.com/dt8emxboh/image/upload/v1745478751/awg4pbdv03ulbmwabn6x.png",
        },
    ];

    return (
        <section className="bg-[#e8e6da] py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-10">
                    Innovative Solutions We Offer
                </h2>

                {/* Desktop: grid | Mobile: horizontal scroll */}
                <div className="hidden md:grid grid-cols-3 gap-6">
                    {solutions.slice(0, 3).map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
                    <div className="col-span-3 flex justify-center gap-6 mt-6">
                        {solutions.slice(3).map((item, index) => (
                            <div key={index} className="w-1/3">
                                <Card item={item} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile: horizontal scroll */}
                <div className="flex md:hidden gap-6 overflow-x-auto snap-x snap-mandatory pb-4">
                    {solutions.map((item, index) => (
                        <div key={index} className="min-w-[250px] snap-start">
                            <Card item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Card({ item }) {
    return (
        <div className="relative rounded-xl overflow-hidden shadow-md group">
            <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
                <p className="text-white font-semibold text-center">{item.title}</p>
            </div>
        </div>
    );
}
