
export default function AboutContent() {
    return (
        <div className="w-full flex flex-col gap-7">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#191919]">
                Mechanisms Operational of Abbatoir           </h3>

            <div className="flex flex-col gap-6 text-xl text-justify text-[#191919] leading-8">
                <p className="indent-8">
                    The Abattoir Mobile App operates through real-time data capture integrated directly into slaughterhouse workflows. Each livestock unit is identified using a QR Code that links to its digital profile, enabling inspectors to access animal data, inspection history, and regulatory requirements instantly. Inspection results, health assessments, and processing statuses are recorded digitally and time-stamped to ensure accuracy and accountability.
                </p>
                <p className="indent-8">
                    As livestock progresses through slaughtering, processing, and packaging stages, the app records each operational step in a structured sequence. Documentation such as inspection approvals, hygiene checks, and certification records is captured and stored centrally, ensuring consistency and audit readiness. All data entries are validated and synchronized with the Ternaqin platform, eliminating manual reconciliation and reporting delays.                </p>
                <p className="indent-8">
                    To ensure end-to-end traceability, the app integrates seamlessly with blockchain-backed records and centralized dashboards. Every operational update contributes to an immutable digital trail that connects livestock origin, processing history, and packaging outcomes. This mechanism guarantees data integrity, enables real-time monitoring, and supports regulatory verification across the entire meat supply chain.
                </p>
            </div>
            <div className="pt-8 flex items-center border-t border-[#E3E3E3] justify-between text-[#A5A5A5] text-sm">
                <p>© 2026 TernaQin Indonesia</p>
                <p>All Right Reserved</p>
            </div>
        </div>
    );
}
