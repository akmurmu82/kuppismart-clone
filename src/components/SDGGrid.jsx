export default function SDGGrid() {
    const goals = [
        "https://res.cloudinary.com/dt8emxboh/image/upload/v1745492394/jst4a1lycakogyfnkh8x.png",
        "https://res.cloudinary.com/dt8emxboh/image/upload/v1745492424/ba6zh1getssk2ciwwbuw.png",
        "https://res.cloudinary.com/dt8emxboh/image/upload/v1745492439/wihy7qvtjsakob6zcak4.png",
        "https://res.cloudinary.com/dt8emxboh/image/upload/v1745492457/pwkff5tet5sjphxqekal.png",
        "https://res.cloudinary.com/dt8emxboh/image/upload/v1745492493/jwxkrvmbeociblwqok9p.png",
        "https://res.cloudinary.com/dt8emxboh/image/upload/v1745492509/hp3ndaixhmhvifhnqu7f.png",
        "https://res.cloudinary.com/dt8emxboh/image/upload/v1745492527/uwnnrxi2ufrvbjqsgkle.png",
        "https://res.cloudinary.com/dt8emxboh/image/upload/v1745492547/uxrvsmazqhwtm2uhqupb.png",
        "https://res.cloudinary.com/dt8emxboh/image/upload/v1745492563/umgvagufbqzs907lpsvw.png",
        "https://res.cloudinary.com/dt8emxboh/image/upload/v1745492578/hmwcdqljgsqx678pahcy.png",
    ];

    const firstEight = goals.slice(0, 8);
    const lastTwo = goals.slice(8);

    return (
        <section className="bg-[#e8e6da] py-12 px-6">
            <div className="mx-auto max-w-7xl">
                {/* Grid for first 8 images */}
                <div className="grid grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
                    {firstEight.map((goal, index) => (
                        <img
                            key={index}
                            src={goal}
                            alt={`SDG ${index + 1}`}
                            className="w-28 h-auto md:w-40 lg:w-52 object-contain shadow-[10px_10px_0px_0px_rgba(0,0,0,0.25)]"
                        />
                    ))}
                </div>

                {/* Last row (special layout) */}
                <div className="mt-10 grid grid-cols-3 md:hidden">
                    {/* small screens: 9 in row 3, 10 centered bottom */}
                    <div className="col-span-1 flex justify-center">
                        <img
                            src={goals[8]}
                            alt="SDG 9"
                            className="w-28 h-auto object-contain shadow-[10px_10px_0px_0px_rgba(0,0,0,0.25)]"
                        />
                    </div>
                    <div className="col-span-3 flex justify-center">
                        <img
                            src={goals[9]}
                            alt="SDG 10"
                            className="w-28 h-auto object-contain shadow-[10px_10px_0px_0px_rgba(0,0,0,0.25)]"
                        />
                    </div>
                </div>

                {/* Large screens: last two spaced around */}
                <div className="hidden md:flex justify-around mt-10">
                    {lastTwo.map((goal, index) => (
                        <img
                            key={index + 8}
                            src={goal}
                            alt={`SDG ${index + 9}`}
                            className="w-40 lg:w-52 h-auto object-contain shadow-[10px_10px_0px_0px_rgba(0,0,0,0.25)]"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
