import InsightTemplate from "@/components/InsightTemplate";

export default function qrCodeApplication() {
  return (
    <InsightTemplate
      categories={
        [
          // { label: "SCM" },
          // { label: "CRM" },
          // { label: "POS" },
          // { label: "SEO" },
        ]
      }
      title="QR Code Application"
      heroImage="/img/hero-qr.svg"
      heroDescription="Ternaqin uses QR Code technology as a unified digital identifier to connect livestock data from farm to consumer. Each animal is assigned a unique QR Code linked to its origin, health records, ownership history, and lifecycle data, ensuring accurate identification and eliminating manual errors. Integrated into RPH (slaughterhouse) operations, QR Codes track inspections, processing stages, certifications, and batch records, all synchronized with blockchain-backed data for full traceability and compliance. On meat packaging, QR Codes allow consumers to instantly access verified origin, processing history, and quality assurance information building trust, enhancing food safety, and enabling informed purchasing decisions across the entire supply chain."
      sections={[
        {
          label: "QR Code Standards",
          title: "QR Code Governance and Data Standards",
          image: "/img/qcg-illustration.svg",
          description: [
            "QR Code governance within the Ternaqin ecosystem is established through strict identification rules and standardized data structures that ensure reliability, consistency, and trust across the livestock value chain. Each QR Code is uniquely generated and permanently associated with a single livestock entity or product batch, preventing duplication, manipulation, or misidentification. The data linked to the QR Code follows predefined schemas covering origin details, health records, veterinary inspections, ownership history, processing milestones, and certification status. These standards ensure that all stakeholders operate under a unified data language while maintaining accurate and consistent traceability.",

            "To balance transparency and data protection, Ternaqin applies role-based access control to all QR Code–linked information. Farmers, veterinarians, and RPH operators are authorized to input and update data relevant to their operational responsibilities, while regulators and auditors are granted verification and monitoring access. Consumers receive controlled, read-only access to verified product information via packaging QR Codes. Sensitive or commercial data is protected through access permissions and cryptographic safeguards, ensuring compliance with food safety, halal certification, and data privacy regulations.",

            "To reinforce accountability, Ternaqin enforces validation and audit rules for every QR Code interaction. Each scan, update, or status change is logged and synchronized with blockchain-backed records, creating a tamper-proof audit trail. Automated validation mechanisms detect inconsistencies, missing data, or unauthorized actions in real time. Through these governance and data standards, QR Codes function not merely as labels but as trusted digital identifiers that uphold data integrity, regulatory alignment, and ecosystem-wide accountability.",
          ],
          references: [
            {
              text: `Tarjan, L., dkk. (2014). "A Microsoft Azure Based Solution for Real-Time Inventory Management Using QR Codes and GS1 Standards."`,
            },
            {
              text: `Feng, J., dkk. (2020). "A Blockchain-based Traceability System for Livestock Product Quality."`,
            },
          ],
        },
        {
          label: "QR Code Mechanisms",
          title: "QR Code OperationalMechanisms",
          image: "/img/qom-illustration.svg",
          description: [
            "Operationally, QR Codes in Ternaqin act as a real-time bridge between physical livestock processes and the digital data ecosystem. At the farm level, QR Codes are generated during livestock registration and attached to animals or associated documentation. Each scan represents a verified operational event, such as health checks, vaccinations, or ownership transfers. These events are digitally recorded, time-stamped, and linked to the animal’s profile, ensuring that lifecycle data is continuously updated as livestock moves across the supply chain.",
            "Within RPH (slaughterhouse) operations, QR Codes are embedded into every critical control point. QR scanning is conducted during ante-mortem inspections, slaughtering processes, post-mortem evaluations, certification issuance, and batch formation. Each scan triggers automated system updates that synchronize operational data with blockchain-backed records. This mechanism eliminates manual data entry, reduces human error, and ensures accurate correlation between individual animals and final meat batches, which is essential for compliance, traceability, and recall readiness.",
            "Beyond processing, QR Code mechanisms extend through logistics, distribution, and retail stages. Logistics providers scan QR Codes to record transportation, storage, and delivery events, maintaining continuity of traceability. At the retail level, QR Codes on packaging serve as the final verification point for product authenticity. Through this end-to-end operational mechanism, QR Codes function as active data connectors that align physical workflows, digital systems, and blockchain validation across the entire Ternaqin ecosystem.",
          ],
          references: [
            {
              text: `Voulodimos, A. S., dkk. (2010). "A Complete Farm-to-Fork Traceability System Based on RFID and QR Code Patterns."`,
            },
            {
              text: `Aung, M. M., & Chang, Y. S. (2014). "Traceability in a food supply chain: Safety and quality perspectives."`,
            },
          ],
        },
        {
          label: "QR Code Implementation",
          title: "QR Code Implementation and Consumer Transparency",
          image: "/img/qci-illustration.svg",
          description: [
            "In implementation, Ternaqin integrates QR Code technology as a core interface within its intelligent livestock platform. QR Codes are embedded into farm management systems, RPH operational workflows, logistics tracking, and packaging processes, ensuring consistent usage across all operational touchpoints. The system is designed to support high-frequency scanning, real-time data synchronization, and seamless integration with blockchain infrastructure. This ensures that traceability and transparency are embedded into daily operations rather than treated as standalone features.",
            "From a regulatory and business perspective, QR Code implementation enables efficient audits, streamlined compliance verification, and improved risk management. Regulators and certification bodies can instantly access verified inspection records, halal certification data, and processing histories without relying on fragmented documentation. In the event of quality issues or recalls, QR-linked batch data allows rapid identification and isolation of affected products, reducing operational disruption and reputational risk for stakeholders.",
            "For consumers, QR Codes transform transparency into a direct and accessible experience. By scanning QR Codes on meat packaging, consumers can instantly view verified information about origin, processing history, certifications, and quality assurance. This builds trust, enhances food safety awareness, and supports informed purchasing decisions. Through comprehensive QR Code implementation, Ternaqin connects physical products with trusted digital records, reinforcing its position as a technology-driven platform that delivers transparency, accountability, and confidence across the livestock value chain.",
          ],
          references: [
            {
              text: `Voulodimos, A. S., et al. (2010). "A Complete Farm-to-Fork Traceability System Based on RFID and QR Code Patterns."`,
            },
            {
              text: `Liu, P., et al. (2019). "The Impact of Traceability Systems on Consumer Trust in Food Quality and Safety."`,
            },
          ],
        },
      ]}
    />
  );
}
