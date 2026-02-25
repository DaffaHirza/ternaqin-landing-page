
export default function AboutContent() {
    return (
        <div className="w-full flex flex-col gap-7">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#191919]">
                About Abbatoir            </h3>

            <div className="flex flex-col gap-6 text-xl text-justify text-[#191919] leading-8">
                <p className="indent-8">
                    The Abattoir Mobile App is designed to support RPH operators and inspection teams by transforming traditionally manual slaughterhouse processes into structured digital workflows. As a critical component of the Ternaqin ecosystem, the app centralizes inspection records, processing data, and certification documentation within a single mobile interface. This ensures that all abattoir activities are recorded accurately and consistently at the point of operation.
                </p>
                <p className="indent-8">
                    The platform addresses key challenges in abattoir operations, including fragmented documentation, delayed reporting, and limited traceability. By digitizing inspection results, processing stages, and packaging records, the app establishes a standardized data structure that improves transparency and reduces the risk of data loss or manipulation. This centralized approach supports regulatory compliance and enhances operational control across facilities.
                </p>
                <p className="indent-8">
                    Beyond compliance, the Abattoir Mobile App enables data-driven process optimization. Real-time visibility into inspection outcomes, processing volumes, and operational trends allows management to identify inefficiencies, improve throughput, and maintain consistent quality standards. By aligning operational execution with digital oversight, the app strengthens food safety assurance and supports scalable abattoir operations.
                </p>            </div>

            <div className="pt-8 flex items-center border-t border-[#E3E3E3] justify-between text-[#A5A5A5] text-sm">
                <p>© 2026 TernaQin Indonesia</p>
                <p>All Right Reserved</p>
            </div>
        </div>
    );
}
