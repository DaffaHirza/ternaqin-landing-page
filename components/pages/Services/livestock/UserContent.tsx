
export default function AboutContent() {
    return (
        <div className="w-full flex flex-col gap-7">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#191919]">
                About Livestock Administrator
            </h3>

            <div className="flex flex-col gap-6 text-xl text-justify text-[#191919] leading-8">
                <p className="indent-8">
                    The Administrator Web is a centralized digital platform designed to modernize livestock operations by consolidating animal records, operational data, and workforce management into a single, unified system. It serves as the core administrative backbone of the Ternaqin ecosystem, enabling organizations to manage livestock activities with greater accuracy, transparency, and consistency. By replacing fragmented manual processes with structured digital workflows, the platform ensures reliable data handling across all operational layers.
                </p>

                <p className="indent-8">
                    Built to support traceability and regulatory readiness, the Administrator Web digitizes critical information such as cattle identification, health records, treatment history, and ownership data. This centralized approach minimizes data duplication, reduces human error, and establishes a single source of truth for livestock operations. As a result, administrators gain full visibility into daily activities, historical records, and operational performance across farms, RPH facilities, and distribution points.
                </p>

                <p className="indent-8">
                    Beyond record management, the platform emphasizes data-driven governance and operational efficiency. Through real-time monitoring, reporting tools, and performance insights, the Administrator Web empowers organizations to make informed decisions, optimize resource allocation, and maintain consistent operational standards. It plays a key role in supporting scalable growth while ensuring transparency, accountability, and long-term sustainability within the livestock value chain.
                </p>
            </div>
            <div className="pt-8 flex items-center border-t border-[#E3E3E3] justify-between text-[#A5A5A5] text-sm">
                <p>© 2026 TernaQin Indonesia</p>
                <p>All Right Reserved</p>
            </div>
        </div>
    );
}
