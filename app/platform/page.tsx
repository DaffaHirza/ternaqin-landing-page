import InsightTemplate from "@/components/InsightTemplate";

export default function IntelligentLivestockManagement() {
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
      title="Next-Generation Platform Ecosystem with AI Assistance"
      heroImage="/img/hero-platform.svg"
      heroDescription="Next-Generation Platform Ecosystem with AI Assistance is a fully integrated digital ecosystem that unifies livestock management, abattoir operations, workforce coordination, supply chain tracking, and customer engagement into a single intelligent environment. Powered by real-time data synchronization and AI-driven insights, the platform eliminates data silos, enables faster decision-making, and maintains consistent operational standards across the livestock value chain. By leveraging blockchain-backed records and QR code identification, it ensures end-to-end transparency, traceability, and compliance from farm to consumer, while supporting scalable, efficient, and sustainable growth in a data-driven livestock industry."
      sections={[
        {
          label: "Platform Architecture",
          title: "Platform Governance and Ecosystem Architecture",
          image: "/img/ngp-illustration.svg",
          description: [
            "The Next-Generation Platform Ecosystem with AI Assistance is governed by a unified digital architecture that ensures interoperability, security, and consistency across all operational domains within the Ternaqin ecosystem. The platform is designed around a modular yet integrated structure, enabling livestock management, abattoir (RPH) operations, workforce coordination, supply chain tracking, and customer engagement to operate within a single system of record. Governance policies define data ownership, access permissions, and operational authority for each stakeholder, ensuring that all participants interact with the platform under standardized and enforceable rules.",
            "Data governance within the ecosystem prioritizes integrity, transparency, and regulatory alignment. All operational data is structured, validated, and synchronized in real time across platform modules, while blockchain-backed records provide immutability and auditability for critical transactions and compliance events. QR Code identification acts as a physical-to-digital bridge, ensuring that every animal, process, and product is accurately linked to its digital identity. This governance framework eliminates data silos, reduces duplication, and establishes a trusted foundation for cross-functional collaboration.",
            "To ensure long-term adaptability, the platform ecosystem incorporates governance mechanisms for system evolution, policy updates, and regulatory changes. AI-driven monitoring continuously evaluates data quality, system performance, and compliance readiness, while controlled update cycles ensure stability without disrupting operations. Through this architecture, Ternaqin establishes a future-ready ecosystem that balances centralized governance with decentralized operational execution.",
          ],
          references: [
            {
              text: `Zheng, Z., dkk. (2020). "Blockchain challenges and opportunities: A survey." International Journal of Web and Grid Services.`,
            },
            {
              text: 'Duan, Y., dkk. (2019). "Artificial intelligence for decision making in the era of Big Data – survey and proposals." International Journal of Information Management.',
            },
          ],
        },
        {
          label: "Platform Implementation",
          title: "Platform Implementation and Intelligent Value Creation",
          image: "/img/pi-illustration.svg",
          description: [
            "In implementation, the Next-Generation Platform Ecosystem with AI Assistance is deployed as a scalable digital foundation that supports both current operations and future expansion. The platform integrates seamlessly with existing systems while providing standardized interfaces for new stakeholders and services. Role-based dashboards deliver real-time operational insights, compliance indicators, and performance metrics tailored to administrators, operators, regulators, and business partners. This implementation ensures rapid onboarding, consistent system adoption, and minimal disruption to ongoing operations.",
            "From a strategic and regulatory perspective, the platform enhances transparency, compliance, and trust across the ecosystem. Regulators and auditors gain continuous access to verified blockchain-backed records and AI-driven compliance summaries, reducing reliance on manual audits. Businesses benefit from improved risk visibility, faster issue resolution, and data-driven planning capabilities. This implementation shifts the ecosystem from reactive management to proactive, intelligence-led operations.",
            "Ultimately, the platform creates long-term value by transforming fragmented operational data into a unified source of intelligence. AI Assistance enables optimization of resources, reduction of waste, and improvement of food safety outcomes, while blockchain and QR Code technologies ensure traceability and accountability. Through intelligent integration and ecosystem-wide visibility, Ternaqin positions itself as a next-generation digital infrastructure provider that supports scalable, efficient, and sustainable growth in the data-driven livestock industry.",
          ],
          references: [
            {
              text: `Janssen, M., dkk. (2020). "Data governance for platform ecosystems: Critical factors and challenges." Government Information Quarterl`,
            },
            {
              text: `Duan, Y., dkk. (2019). "Artificial intelligence for decision making in the era of Big Data – survey and proposals." International Journal of Information Management.`,
            },
          ],
        },
      ]}
    />
  );
}
