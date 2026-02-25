
export default function AboutContent() {
    return (
        <div className="w-full flex flex-col gap-7">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#191919]">
                Users Of Abbatoir
            </h3>

            <div className="flex flex-col gap-6 text-xl text-justify text-[#191919] leading-8">
                <p className="indent-8">
                    The primary users of the Abattoir Mobile App are RPH inspectors, slaughterhouse operators, and quality control personnel responsible for daily processing activities. These users rely on the app to conduct inspections, record processing data, and manage documentation efficiently in fast-paced operational environments. The mobile-first design ensures ease of use while maintaining structured and compliant data entry.                </p>

                <p className="indent-8">
                    Supervisors and facility managers use the app to monitor inspection outcomes, processing progress, and compliance status in real time. Through centralized access to operational data, they can identify bottlenecks, address non-compliance issues promptly, and maintain consistent quality and safety standards across shifts and facilities. This visibility enhances operational oversight and decision-making.                </p>

                <p className="indent-8">
                    For regulators, auditors, and organizational leadership, the Abattoir Mobile App serves as a trusted source of verified operational data. Complete digital records support audits, certifications, and regulatory reporting with minimal administrative burden. By connecting frontline operators, management, and oversight bodies within a single platform, the app strengthens trust, accountability, and transparency throughout the abattoir value chain.                </p>
            </div>
            <div className="pt-8 flex items-center border-t border-[#E3E3E3] justify-between text-[#A5A5A5] text-sm">
                <p>© 2026 TernaQin Indonesia</p>
                <p>All Right Reserved</p>
            </div>
        </div>
    );
}
