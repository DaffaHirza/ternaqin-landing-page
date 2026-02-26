import InsightTemplate from "@/components/InsightTemplate";

export default function BlockchainSecuritySystem() {
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
      title="Blockchain Security System"
      heroImage="/img/hero-bss.svg"
      heroDescription="Ternaqin leverages blockchain technology to deliver secure, transparent, and immutable transactions across the livestock value chain by recording critical data such as ownership transfers, processing, and distribution records on a decentralized ledger. This creates a single, tamper-proof source of truth that ensures full traceability, strengthens data integrity, and supports regulatory compliance through real-time verification. By integrating blockchain into its intelligent livestock ecosystem, Ternaqin enhances trust among stakeholders, enables data-driven decision-making, and supports scalable, sustainable growth while redefining transparency in livestock transactions."
      sections={[
        {
          label: "Blockchain Rules",
          title: "Blockchain Rules",
          image: "/img/br-illustration.svg",
          description: [
            "Blockchain governance within Ternaqin is structured around clearly defined rules that ensure data integrity, accountability, and interoperability across the livestock value chain. At the protocol level, Ternaqin adopts permissioned blockchain rules, where only verified stakeholders—such as farmers, processors, distributors, and regulators—can participate as nodes. Each participant must undergo identity verification and role-based authorization to ensure that only trusted entities can submit, validate, or view specific data. Smart contract policies define how ownership transfers, certification updates, and compliance records are executed, ensuring that all transactions follow standardized and enforceable digital rules without manual intervention.",

            "Data governance rules are designed to balance transparency with privacy. While key lifecycle data (origin, health status, processing events, and distribution milestones) is publicly verifiable within the ecosystem, sensitive commercial and personal information is encrypted and access-controlled using cryptographic permissions. Ternaqin enforces immutable data recording, meaning once information is validated and added to the ledger, it cannot be altered or deleted. This rule establishes a permanent audit trail that supports regulatory audits, reduces fraud, and increases confidence among buyers, regulators, and financial institutions.",

            "Operational governance rules further define consensus responsibilities, node performance requirements, and dispute resolution mechanisms. Validator nodes must maintain uptime, follow consensus protocols, and comply with performance benchmarks to remain active in the network. Governance frameworks also include mechanisms for protocol upgrades, stakeholder voting, and policy updates, ensuring the blockchain infrastructure remains adaptable to regulatory changes and technological evolution. Through these governance rules, Ternaqin establishes a structured, compliant, and future-ready decentralized data environment for livestock management.",
          ],
          references: [
            {
              text: "Zyskind, G., & Nathan, O. (2015). Decentralizing Privacy: Using Blockchain to Protect Personal Data. IEEE CS Security and Privacy Workshops.",
            },
            {
              text: "Casino, F., et al. (2019). A systematic literature review of blockchain-based applications: Current status, classification and open issues.",
            },
          ],
        },
        {
          label: "Blockchain Mechanisms",
          title: "Blockchain Mechanisms",
          image: "/img/bm-illustration.svg",
          description: [
            "The blockchain mechanism in Ternaqin is built on a distributed ledger architecture where each transaction is grouped into blocks and linked cryptographically to form a secure chain of records. When a livestock-related event occurs—such as animal registration, health inspection, ownership transfer, or slaughter processing—the data is submitted as a transaction. Validator nodes verify the authenticity, accuracy, and authorization of the transaction using cryptographic signatures and predefined smart contract logic. Once validated, the transaction is packaged into a block and appended to the blockchain, creating a permanent and chronological record of livestock activities.",
            "Consensus mechanisms ensure that all participating nodes agree on the validity of transactions before they are recorded. Ternaqin can leverage energy-efficient consensus models such as Practical Byzantine Fault Tolerance (PBFT) or Proof of Authority (PoA), which are well-suited for enterprise and permissioned blockchain environments. These mechanisms enable fast transaction finality, low latency, and high throughput, which are essential for real-time livestock data tracking and large-scale supply chain operations. Hashing and cryptographic linking between blocks prevent data tampering, as any unauthorized modification would invalidate the entire chain.",
            "Smart contracts automate business logic and compliance workflows within the Ternaqin platform. These programmable contracts execute predefined rules when certain conditions are met—for example, automatically updating ownership records upon payment confirmation, triggering certification updates after veterinary validation, or releasing compliance reports to regulators. By embedding automation into the blockchain mechanism, Ternaqin reduces manual processing, minimizes human error, and ensures that all stakeholders operate under transparent, enforceable digital agreements.",
          ],
          references: [
            {
              text: "Buttle, F., & Maklan, S. (2019). Customer Relationship Management: Concepts and Technologies. Routledge.",
            },
            {
              text: "Kumar, V., & Reinartz, W. (2018). Customer Relationship Management: Concept, Strategy, and Tools. Springer.",
            },
            {
              text: "Payne, A., & Frow, P. (2013). Strategic Customer Management: Integrating Relationship Marketing and CRM. Cambridge University Press.",
            },
          ],
        },
        {
          label: "Blockchain Implementation",
          title: "Blockchain Implementation",
          image: "/img/bi-illustration.svg",
          description: [
            "In practical implementation, Ternaqin integrates blockchain as the backbone of its intelligent livestock data infrastructure. Each animal is assigned a unique digital identity, represented by a QR Code or RFID tag, which links to a blockchain-based profile containing origin, health history, feeding records, and lifecycle events. Data from IoT devices, farm management systems, and processing facilities is securely transmitted to the blockchain, ensuring that every event is recorded in real time. This implementation creates end-to-end traceability from farm to consumer, enabling buyers to verify product authenticity and ethical sourcing instantly.",
            "Ternaqin also implements blockchain for transaction management and ownership traceability. When livestock or livestock-derived products change ownership—such as from farmer to processor, distributor, or retailer—the transfer is recorded on the blockchain through smart contracts. This provides a transparent and tamper-proof transaction history, reducing disputes, fraud, and inefficiencies in the supply chain. Financial institutions and insurers can access verified blockchain records to assess risk, provide financing, or automate claims processing, creating new financial services opportunities within the livestock ecosystem.",
            "From a regulatory and sustainability perspective, blockchain implementation supports compliance monitoring, certification, and sustainability reporting. Regulatory bodies can access immutable records to verify health inspections, halal certification processes, animal welfare compliance, and environmental impact metrics. Ternaqin can also generate blockchain-based analytics dashboards for stakeholders, enabling data-driven decision-making and sustainability optimization. By embedding blockchain into its core architecture, Ternaqin positions itself as a trusted digital infrastructure provider for the livestock industry, enabling scalable growth, enhanced transparency, and global market readiness.",
          ],
          references: [
            {
              text: "Zyskind, G., & Nathan, O. (2015). Decentralizing Privacy: Using Blockchain to Protect Personal Data.",
            },
            {
              text: `Kampan, K., et al. (2022). Adoption of Blockchain Technology for Enhanced Traceability of Livestock-Based Products.`,
            },
          ],
        },
      ]}
    />
  );
}
