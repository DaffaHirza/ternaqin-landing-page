import Image from "next/image";

export default function SectionService() {
  return (
    <section className="relative bg-[#F3F3F3] py-24 overflow-hidden">
      {/* subtle background curve */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] rounded-full border-[120px] border-black" />
      </div>

      <div className="w-full px-4 space-y-12 relative z-10">
        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start mb-24">
          <div className="md:col-span-2">
            <span className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium bg-[#1F4941] text-white rounded-full">
              <span className="w-2 h-2 bg-white rounded-full" />
              Services
            </span>
          </div>

          <div className="md:col-span-10">
            <h2 className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[88px] font-semibold leading-[1.05] tracking-[-0.02em] text-[#1A1A1A]">
              Optimizing Livestock
            </h2>

            <p className="mt-8 text-[24px] font-regular md:text-[32px] text-[#9A9A9A] leading-relaxed">
              Providing smart, transparent, and scalable digital solutions to
              streamline livestock management through QR-based tracking and farm
              operations for sustainable growth and efficiency.
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
          {/* 01 - PRIMARY CARD */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 relative rounded-[28px] p-10 min-h-[800px] shadow-sm text-white flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/img/bg-service-card-1.svg"
                alt="service background"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-[60px] leading-none font-semibold opacity-90 relative -top-[3px]">
                    01
                  </span>

                  <div className="flex items-start gap-2">
                    <button
                      className="
        px-5 md:px-8 
        h-[48px] md:h-[60px] 
        rounded-[10px] md:rounded-[12px] 
        bg-white 
        text-[#1F4941] 
        text-sm md:text-lg 
        font-medium 
        shadow-md 
        hover:scale-105 
        transition
      "
                    >
                      Learn More
                    </button>

                    <button
                      className="
        w-[48px] md:w-[60px] 
        h-[48px] md:h-[60px] 
        rounded-[10px] md:rounded-[12px] 
        bg-white 
        flex items-center justify-center 
        shadow-md 
        hover:scale-105 
        transition
      "
                    >
                      <Image
                        src="/img/arrow-right.svg"
                        alt="arrow-right"
                        width={24}
                        height={24}
                      />
                    </button>
                  </div>
                </div>

                <div className="mt-6 h-[1px] bg-white/30 w-full" />

                <p className="mt-8 text-[18px] text-white/80 leading-relaxed">
                  A centralized administration platform for managing all
                  livestock data digitally and efficiently, from cattle
                  identification, health and vaccination records, to integrated
                  activity and sales reports.
                </p>
              </div>

              <div className="flex items-center gap-3 mt-6 text-white/90">
                <span className="text-lg">
                  <Image
                    src="/img/people.svg"
                    alt="people"
                    width={40}
                    height={40}
                  />
                </span>
                <span className="text-[30px] font-medium">
                  Livestock Administrator
                </span>
              </div>
            </div>
          </div>

          {/* 02 */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2 relative    rounded-[28px] p-8 flex flex-col justify-between min-h-[800px] shadow-sm overflow-hidden">
            {/* Background SVG */}
            <div className="absolute inset-0">
              <Image
                src="/img/service-bg-card-disable.svg"
                alt="service background"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex justify-between items-start">
                <span className="text-[68px] leading-none font-semibold text-black relative -top-[4px]">
                  02
                </span>

                <a
                  href="#contact"
                  className="flex items-center justify-center h-[56px] w-[56px] rounded-xl bg-[#1F4941]"
                >
                  <Image
                    src="/img/arrow-right-white.svg"
                    alt=""
                    width={32}
                    height={32}
                  />
                </a>
              </div>

              <span className="text-[30px] font-medium text-black">
                Employee
              </span>
            </div>
          </div>

          {/* 03 */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2 relative rounded-[28px] p-8 flex flex-col justify-between min-h-[800px] shadow-sm overflow-hidden">
            {/* Background SVG */}
            <div className="absolute inset-0">
              <Image
                src="/img/service-bg-card-disable.svg"
                alt="service background"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex justify-between items-start">
                <span className="text-[68px] leading-none font-semibold text-black relative -top-[4px]">
                  03
                </span>

                <a
                  href="#contact"
                  className="flex items-center justify-center h-[56px] w-[56px] rounded-xl bg-[#1F4941]"
                >
                  <Image
                    src="/img/arrow-right-white.svg"
                    alt=""
                    width={32}
                    height={32}
                  />
                </a>
              </div>

              <span className="text-[30px] font-medium text-black">
                Abattoir
              </span>
            </div>
          </div>

          {/* TESTIMONIAL */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 bg-white rounded-[32px] overflow-hidden shadow-sm flex flex-col min-h-[820px]">
            {/* Image Section */}
            <div className="relative h-[360px] bg-[#EAEAEA] rounded-[28px] m-4 flex justify-center overflow-hidden">
              <Image
                src="/img/service-enchancing.svg"
                alt="phone"
                fill
                className="object-cover object-top "
              />
            </div>

            {/* Content */}
            <div className="px-10 pb-10 pt-6 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-[40px] font-semibold text-[#1A1A1A] leading-[1.15] tracking-[-0.5px]">
                  Enhancing Experiences <br />
                  for Our Customers
                </h3>

                <div className="mt-24 text-[#F5A623] text-[20px] tracking-[4px]">
                  <Image src="/img/star.svg" alt="" width={120} height={120} />
                </div>

                <p className=" text-[20px] text-[#9A9A9A] leading-[1.6] max-w-[480px]">
                  “Thank you for being part of the innovation that supports and
                  empowers livestock farming in Indonesia.”
                </p>
              </div>

              {/* Bottom Row */}
              <div className=" flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src="/img/chris.svg"
                    alt="Chris Hemsworth"
                    width={44}
                    height={44}
                    className="rounded-full object-cover"
                  />
                  <span className="text-[18px] font-medium text-[#1A1A1A]">
                    Chris Hemsworth
                  </span>
                </div>

                <span className="text-[16px] text-[#9A9A9A]">900K+ Users</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
