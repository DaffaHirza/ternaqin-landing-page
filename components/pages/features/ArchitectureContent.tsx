
export default function ArchitectureContent() {
    return (
        <div className="w-full flex flex-col gap-7">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#191919]">
                Platform Governance and Ecosystem Architecture
            </h3>

            <div className="flex flex-col items-center text-[#A5A5A5]">
                <img src="/img/bgacrhitecture.svg" alt="Hero Image" className="w-full rounded-lg mb-2" />
                <p>Source : Illustration generated using Gemini AI</p>
            </div>

            <div className="flex flex-col gap-6 text-xl text-justify text-[#191919] leading-8">
                <p className="indent-8">
                    The Next-Generation Platform Ecosystem with AI Assistance is
                    governed by a unified digital architecture that ensures
                    interoperability, security, and consistency across all
                    operational domains within the Ternaqin ecosystem. The
                    platform is designed around a modular yet integrated
                    structure, enabling livestock management, abattoir (RPH)
                    operations, workforce coordination, supply chain tracking,
                    and customer engagement to operate within a single system of
                    record. Governance policies define data ownership, access
                    permissions, and operational authority for each stakeholder,
                    ensuring that all participants interact with the platform
                    under standardized and enforceable rules.
                </p>

                <p className="indent-8">
                    Data governance within the ecosystem prioritizes integrity,
                    transparency, and regulatory alignment. All operational data
                    is structured, validated, and synchronized in real time
                    across platform modules, while blockchain-backed records
                    provide immutability and auditability for critical
                    transactions and compliance events. QR code identification
                    acts as a physical-to-digital bridge, ensuring that every
                    animal, process, and product is accurately linked to its
                    digital identity. This governance framework eliminates data
                    silos, reduces duplication, and establishes a trusted
                    foundation for cross-functional collaboration.
                </p>

                <p className="indent-8">
                    To ensure long-term adaptability, the platform ecosystem
                    incorporates governance mechanisms for system evolution,
                    policy updates, and regulatory changes. AI-driven monitoring
                    continuously evaluates data quality, system performance, and
                    compliance readiness, while controlled update cycles ensure
                    stability without disrupting operations. Through this
                    architecture, Ternaqin establishes a future-ready ecosystem
                    that balances centralized governance with decentralized
                    operational execution.
                </p>
            </div>

            <div className="flex flex-col gap-3">
                <h4 className="text-3xl font-semibold text-[#191919]">References</h4>
                <ul className="list-disc pl-6 space-y-2 text-[#A5A5A5]">
                    <li>
                        Zheng, Z., dkk. (2020). “Blockchain challenges and
                        opportunities: A survey.” International Journal of Web and
                        Grid Services.
                    </li>
                    <li>
                        Duan, Y., dkk. (2019). “Artificial intelligence for decision
                        making in the era of Big Data – survey and proposals.”
                        International Journal of Information Management.
                    </li>
                </ul>
            </div>

            <div className="pt-8 flex items-center border-t border-[#E3E3E3] justify-between text-[#A5A5A5] text-sm">
                <p>© 2026 TernaQin Indonesia</p>
                <p>All Right Reserved</p>
            </div>
        </div>
    );
}
