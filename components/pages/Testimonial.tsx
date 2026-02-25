"use client";

const testimonials = [
    { id: 1, name: "Michael Jack", role: "Founder at Berkah Farm" },
    { id: 2, name: "Sarah Chen", role: "CTO at TechVenture" },
    { id: 3, name: "Andi Pratama", role: "CEO at AgriNusa" },
    { id: 4, name: "Diana Putri", role: "Head of Ops at FarmTech" },
    { id: 5, name: "Rizky Hakim", role: "Founder at HijauLand" },
    { id: 6, name: "Lena Wijaya", role: "Director at NusaGrow" },
    { id: 7, name: "Budi Santoso", role: "Manager at TaniMaju" },
    { id: 8, name: "Maya Indah", role: "Founder at GreenBase" },
];

function TestimonialCard({ item, index }) {
    return (
        <div className="bg-white rounded-lg p-6 max-w-90 shrink-0">
            <div className="flex items-center mb-7">
                <img
                    src="/img/profiltestimoni.svg"
                    alt={item.name}
                    className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                    <p className="text-[#191919] font-semibold">{item.name}</p>
                    <p className="text-[#A5A5A5] text-sm">{item.role}</p>
                </div>
            </div>
            <p className="text-[#191919] mb-7">
                "Thank you for being part of the innovation that supports and empowers livestock farming in Indonesia."
            </p>
            <div className="flex justify-between items-center">
                <div className="flex gap-1 mb-3">
                    {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-orange-400" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                    ))}
                    <svg className="w-5 h-5" viewBox="0 0 20 20">
                        <defs>
                            <linearGradient id={`half-star-${index}`}>
                                <stop offset="50%" stopColor="#fb923c" />
                                <stop offset="50%" stopColor="#d1d5db" />
                            </linearGradient>
                        </defs>
                        <path
                            fill={`url(#half-star-${index})`}
                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                        />
                    </svg>
                </div>
                <p className="text-[#A5A5A5] text-medium">4.5</p>
            </div>
        </div>
    );
}

function MarqueeRow({ items, direction = "left" }) {
    const tripled = [...items, ...items, ...items];
    return (
        <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#F3F3F3] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#F3F3F3] to-transparent z-10 pointer-events-none" />
            <div
                className="flex gap-3 w-max"
                style={{
                    animation: `${direction === "left" ? "marqueeLeft" : "marqueeRight"} ${direction === "left" ? "30s" : "35s"} linear infinite`,
                }}
            >
                {tripled.map((item, i) => (
                    <TestimonialCard key={`${item.id}-${i}`} item={item} index={i} />
                ))}
            </div>
        </div>
    );
}

export default function TestimonialSection() {
    const row1 = testimonials.slice(0, 4);
    const row2 = testimonials.slice(4, 8);

    return (
        <>
            <style>{`
                @keyframes marqueeLeft {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-33.333%); }
                }
                @keyframes marqueeRight {
                    0%   { transform: translateX(-33.333%); }
                    100% { transform: translateX(0); }
                }
            `}</style>

            <section className="min-h-screen bg-[#F3F3F3] py-20 overflow-hidden">
                <div className="max-w-screen mx-auto px-6 mb-14">
                    <div className="mb-6">
                        <div className="flex items-start mb-12 gap-6">
                            <span className="flex bg-[#1F4941] text-white px-4 py-2 rounded-full gap-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.97 2C6.44997 2 1.96997 6.48 1.96997 12C1.96997 17.52 6.44997 22 11.97 22C17.49 22 21.97 17.52 21.97 12C21.97 6.48 17.5 2 11.97 2ZM15.72 12.35L12 16.58L11.56 17.08C10.95 17.77 10.45 17.59 10.45 16.66V12.7H8.74997C7.97997 12.7 7.76997 12.23 8.27997 11.65L12 7.42L12.44 6.92C13.05 6.23 13.55 6.41 13.55 7.34V11.3H15.25C16.02 11.3 16.23 11.77 15.72 12.35Z" fill="white" />
                                </svg>
                                <span>Testimonials</span>
                            </span>
                            <div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-4">
                                    Trusted By Teams, Startups, And Enterprises That Prioritize Speed And
                                </h1>
                                <p className="text-4xl md:text-5xl lg:text-6xl text-gray-400">
                                    Simplicity Backed By Customer Success
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cards: grid diganti marquee */}
                <div className="flex flex-col gap-3">
                    <MarqueeRow items={row1} direction="left" />
                    <MarqueeRow items={row2} direction="right" />
                </div>
            </section>
        </>
    );
}