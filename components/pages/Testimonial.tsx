"use client";
import Image from "next/image";

type TestimonialItem = {
  id: number;
  name: string;
  role: string;
};

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

type TestimonialCardProps = {
  item: TestimonialItem;
  index: number;
};

function TestimonialCard({ item, index }: TestimonialCardProps) {
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
        "Thank you for being part of the innovation that supports and empowers
        livestock farming in Indonesia."
      </p>
      <div className="flex justify-between items-center">
        <div className="flex gap-1 mb-3">
          {[...Array(4)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 fill-orange-400"
              viewBox="0 0 20 20"
            >
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

type MarqueeRowProps = {
  items: TestimonialItem[];
  direction?: "left" | "right";
};

function MarqueeRow({ items, direction = "left" }: MarqueeRowProps) {
  const tripled = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#F3F3F3] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#F3F3F3] to-transparent z-10 pointer-events-none" />
      <div
        className="flex gap-3 w-max"
        style={{
          animation: `${direction === "left" ? "marqueeLeft" : "marqueeRight"
            } ${direction === "left" ? "30s" : "35s"} linear infinite`,
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
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start my-18">
              {/* LEFT — Badge */}
              <div className="md:col-span-2 mt-0 sm:mt-2 md:mt-5 lg:mt-6">
                <span className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium bg-[#1F4941] text-white rounded-full">
                  <Image
                    src="/img/flash-circle.svg"
                    alt="arrow-right"
                    width={24}
                    height={24}
                  />
                  Testimonial
                </span>
              </div>

              {/* RIGHT — Heading */}
              <div className="md:col-span-10">
                <h2
                  className="
             text-[32px] 
             sm:text-[40px] 
             md:text-[56px] 
             lg:text-[72px] 
             font-semibold 
             leading-[1.1] 
             md:leading-[1.05] 
             tracking-[-0.02em] 
             text-[#1c1c1c]
           "
                >
                  Trusted By Teams, Startups, and Enterprises That Prioritize Speed and{" "}
                  <br className="hidden md:block" />
                  <span className="text-[#bcbcbc] font-medium">
                    Simplicity Backed by Customer Success
                  </span>
                </h2>
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
