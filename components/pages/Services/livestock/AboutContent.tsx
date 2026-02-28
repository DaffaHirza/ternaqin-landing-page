
export default function AboutContent() {
    return (
        <div className="w-full flex flex-col gap-7">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#191919]">
                Users of Administrator            </h3>

            <div className="flex flex-col gap-6 text-xl text-justify text-[#191919] leading-8">
                <p className="indent-8">
                    The primary users of the Administrator Web are system administrators, operational managers, and compliance officers responsible for overseeing livestock and workforce activities. Administrators use the platform to manage master data, configure workflows, assign roles, and monitor overall system performance. Through centralized control, they ensure operational consistency, data governance, and adherence to internal and external standards.                </p>

                <p className="indent-8">
                    Operational managers rely on the platform for day-to-day supervision of livestock activities and workforce coordination. They can monitor cattle health, track daily treatments, review operational reports, and evaluate employee performance in real time. By having access to structured and up-to-date information, managers are able to make faster, more accurate decisions that improve efficiency and reduce operational risks.                </p>

                <p className="indent-8">
                    For compliance teams and decision-makers, the Administrator Web functions as a reliable source of verified operational data. It supports reporting, audits, and regulatory submissions by providing complete historical records and traceable activity logs. By serving diverse user roles within a single platform, the Administrator Web strengthens collaboration, enhances accountability, and supports data-driven management across modern livestock operations.                </p>
            </div>

            <div className="pt-8 flex items-center border-t border-[#E3E3E3] justify-between text-[#A5A5A5] text-sm">
                <p>© 2026 TernaQin Indonesia</p>
                <p>All Right Reserved</p>
            </div>
        </div>
    );
}
