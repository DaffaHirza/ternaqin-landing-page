import Image from "next/image";

export default function SectionService() {
  return (
    <section className="relative bg-[#F3F3F3] py-24 overflow-hidden">
      {/* subtle background curve */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] rounded-full border-[120px] border-black" />
      </div>

      <div className="w-full  px-4 space-y-12 relative z-10">
        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start mb-24">
          {/* LEFT — Badge */}
          <div className="md:col-span-2">
            <span className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium bg-[#1F4941] text-white rounded-full">
              <span className="w-2 h-2 bg-white rounded-full" />
              Services
            </span>
          </div>

          {/* RIGHT — Heading + Description */}
          <div className="md:col-span-10">
            {/* Title */}
            <h2
              className="
        text-[40px]
        sm:text-[56px]
        md:text-[72px]
        lg:text-[88px]
        font-semibold
        leading-[1.05]
        tracking-[-0.02em]
        text-[#1A1A1A]
      "
            >
              Optimizing Livestock
            </h2>

            {/* Description */}
            <p className="mt-8 text-[24px] font-regular md:text-[32px] text-[#9A9A9A] leading-relaxed">
              Providing smart, transparent, and scalable digital solutions to
              streamline livestock management through QR-based tracking and farm
              operations for sustainable growth and efficiency.
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-12 gap-6">
          {/* 01 - PRIMARY CARD */}
          <div className="col-span-5 bg-[#1F4941] text-white rounded-[28px] p-10 relative overflow-hidden flex flex-col justify-between min-h-[520px] shadow-sm">
            <div>
              <div className="flex justify-between items-start">
                <span className="text-4xl font-light opacity-90">01</span>

                <button className="flex items-center gap-3 bg-white text-[#1F4941] px-4 py-2 rounded-xl text-sm font-medium">
                  Learn More
                  <span className="text-lg">↗</span>
                </button>
              </div>

              <div className="mt-6 h-[1px] bg-white/30 w-full" />

              <p className="mt-8 text-sm text-white/80 leading-relaxed max-w-md">
                A centralized administration platform for managing all livestock
                data digitally and efficiently, from cattle identification,
                health and vaccination records, to integrated activity and sales
                reports.
              </p>
            </div>

            <div className="relative mt-8">
              <Image
                src="/img/dashboard-preview.png"
                alt="dashboard"
                width={600}
                height={400}
                className="rounded-xl"
              />
            </div>

            <div className="flex items-center gap-3 mt-6 text-white/90">
              <span className="text-lg">👤</span>
              <span className="text-lg">Livestock Administrator</span>
            </div>
          </div>

          {/* 02 */}
          <div className="col-span-2 bg-white rounded-[28px] p-8 flex flex-col justify-between min-h-[520px] shadow-sm">
            <div className="flex justify-between items-start">
              <span className="text-4xl text-[#1A1A1A]">02</span>
              <button className="bg-[#1F4941] text-white w-9 h-9 rounded-lg flex items-center justify-center">
                ↗
              </button>
            </div>

            <span className="text-lg text-[#1A1A1A]">Employee</span>
          </div>

          {/* 03 */}
          <div className="col-span-2 bg-white rounded-[28px] p-8 flex flex-col justify-between min-h-[520px] shadow-sm">
            <div className="flex justify-between items-start">
              <span className="text-4xl text-[#1A1A1A]">03</span>
              <button className="bg-[#1F4941] text-white w-9 h-9 rounded-lg flex items-center justify-center">
                ↗
              </button>
            </div>

            <span className="text-lg text-[#1A1A1A]">Abattoir</span>
          </div>

          {/* TESTIMONIAL CARD */}
          <div className="col-span-3 bg-white rounded-[28px] overflow-hidden shadow-sm flex flex-col justify-between min-h-[520px]">
            <div className="relative h-[280px] bg-[#EAEAEA] flex items-center justify-center">
              <Image
                src="/img/phone-preview.png"
                alt="phone"
                width={220}
                height={400}
                className="object-contain"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-semibold text-[#1A1A1A]">
                Enhancing Experiences
                <br />
                for Our Customers
              </h3>

              <div className="mt-4 text-[#F5A623] text-lg">★★★★★</div>

              <p className="mt-4 text-sm text-[#8A8A8A] leading-relaxed">
                “Thank you for being part of the innovation that supports and
                empowers livestock farming in Indonesia.”
              </p>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#D9D9D9]" />
                  <span className="text-sm text-[#1A1A1A]">
                    Chris Hemsworth
                  </span>
                </div>

                <span className="text-xs text-[#8A8A8A]">900K+ Users</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
