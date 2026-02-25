
export default function AboutContent() {
    return (
        <div className="w-full flex flex-col gap-7">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#191919]">
                Mechanisms Operational of Administrator           </h3>

            <div className="flex flex-col gap-6 text-xl text-justify text-[#191919] leading-8">
                <p className="indent-8">
                    The Administrator Web operates through a structured data flow that captures, validates, and synchronizes information from multiple operational touchpoints. Livestock data is recorded at the source—such as farms, inspections, or RPH processes—and stored in a centralized system where it can be accessed and updated in real time. Each data entry follows standardized formats and validation rules to ensure consistency and accuracy across the platform.
                </p>
                <p className="indent-8">
                    Operational activities such as livestock monitoring, treatment logging, employee task assignments, and daily reporting are managed through role-based workflows. These workflows define who can input, review, approve, or analyze data, ensuring proper accountability and controlled access. Integrated dashboards aggregate this information into visual insights, allowing administrators to track trends, detect anomalies, and respond proactively to operational risks. </p>
                <p className="indent-8">
                    To support traceability and compliance, the platform seamlessly integrates with QR Code identification and blockchain-backed records within the broader Ternaqin ecosystem. Data synchronization ensures that every operational update—whether related to livestock status, workforce activity, or transaction history—is reflected across connected systems. This mechanism guarantees data integrity, real-time visibility, and audit-ready documentation across the entire livestock operation. </p>            </div>

            <div className="pt-8 flex items-center border-t border-[#E3E3E3] justify-between text-[#A5A5A5] text-sm">
                <p>© 2026 TernaQin Indonesia</p>
                <p>All Right Reserved</p>
            </div>
        </div>
    );
}
