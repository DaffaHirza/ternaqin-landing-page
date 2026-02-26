import InsightTemplate from "@/components/InsightTemplate";

export default function IntelligentLivestockManagement() {
  return (
    <InsightTemplate
      categories={[
        { label: "SCM" },
        { label: "CRM" },
        { label: "POS" },
        { label: "SEO" },
      ]}
      title="Intelligent Livestock Management"
      heroImage="/img/hero-livestock.svg"
      heroDescription="Intelligent Livestock Management enables centralized, data-driven control of livestock operations across the entire lifecycle. By combining real-time monitoring, digital records, and AI-powered insights, the system tracks animal health, ownership, productivity, and movement with accuracy and consistency. This intelligent approach reduces manual processes, minimizes errors, and supports better decision-making—improving animal welfare, operational efficiency, and traceability while ensuring compliance and sustainable livestock management."
      sections={[
        {
          label: "Supply Chain Management",
          title: "Supply Chain Management",
          image: "/img/scm-illustration.svg",
          description: [
            "Supply Chain Management is designed to orchestrate the entire livestock supply chain by seamlessly connecting upstream and downstream activities, from farm-level production and processing to distribution, retail, and end consumers. Through a unified digital platform, it centralizes data, workflows, and stakeholder interactions, eliminating information silos and ensuring consistent coordination across every stage of the supply chain. This integrated approach allows organizations to manage complex operations with greater clarity, control, and operational continuity.",
            "The system delivers end-to-end visibility through real-time tracking and comprehensive traceability of livestock and products as they move across the supply chain. Every transaction, handling process, and status update is digitally recorded and easily accessible, enabling organizations to monitor product origin, processing history, logistics progress, and delivery outcomes. This level of transparency strengthens regulatory compliance, improves quality assurance, reduces operational risk, and enables faster identification and resolution of potential issues.",
            "By leveraging intelligent analytics and data-driven insights, Supply Chain Management supports proactive decision-making and continuous optimization. Organizations can improve logistics planning, balance supply and demand, reduce delays, and optimize resource utilization across networks. The result is a more resilient, efficient, and scalable supply chain that enhances collaboration among stakeholders, builds trust with partners and customers, and supports long-term sustainable growth.",
          ],
          references: [
            {
              text: "Christopher, M. (2016). Logistics & Supply Chain Management. Pearson Higher Ed.",
            },
            {
              text: 'Aung, M. M., & Chang, Y. S. (2014). "Traceability in a food supply chain: Safety and quality perspectives". Food Control, 39, 172-184.',
            },
            {
              text: "Waller, M. A., & Fawcett, S. E. (2013). Data science, predictive analytics, and big data: a revolution that will transform supply chain design and management. Journal of Business Logistics.",
            },
          ],
        },
        {
          label: "Customer Relationship Management",
          title: "Customer Relationship Management",
          image: "/img/crm-illustration.svg",
          description: [
            "Customer Relationship Management is designed to support end-to-end customer engagement within the livestock ecosystem by centralizing customer data, interactions, and transaction histories into a unified digital platform. This holistic view enables organizations to better understand customer profiles, preferences, and purchasing patterns, ensuring more accurate targeting, consistent communication, and personalized service delivery across every touchpoint.",
            "The system streamlines customer-facing operations by integrating order management, inquiries, feedback handling, and after-sales support into structured workflows. With real-time access to customer and product information, sales and support teams can respond more quickly and accurately, coordinate effectively with operational units, and maintain clear communication throughout the customer journey. This improves service reliability, transparency, and overall customer satisfaction.",
            "Powered by data analytics and actionable insights, Customer Relationship Management enables businesses to identify trends, anticipate customer needs, and build long-term relationships based on trust and value. By leveraging transparent product information, traceable transactions, and performance insights, organizations can strengthen customer loyalty, improve retention, and drive sustainable growth while maintaining accountability and professionalism across the livestock value chain.",
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
          label: "Point of Sale",
          title: "Point of Sale",
          image: "/img/pos-illustration.svg",
          description: [
            "Point of Sale (POS) within the Ternaqin ecosystem is designed to manage livestock and meat product transactions in a seamless, accurate, and fully integrated manner. By connecting sales activities directly with inventory, pricing, customer data, and product traceability, the POS system ensures that every transaction is recorded in real time and aligned with upstream operational data. This integration reduces manual input, minimizes errors, and provides a consistent sales experience across physical outlets, distribution points, and partner locations.",
            "The POS system supports transparent and compliant transactions by linking each sale to verified product data, including origin, processing history, certifications, and batch information. Through QR code and blockchain-backed records, every transaction can be traced back to its source, strengthening food safety assurance and regulatory compliance. This capability enables businesses to confidently manage sales of livestock products while maintaining accountability, audit readiness, and trust among regulators, partners, and customers.",
            "Powered by centralized data and intelligent reporting, Ternaqin’s POS delivers actionable insights into sales performance, demand patterns, and customer behavior. Organizations can monitor revenue trends, optimize pricing strategies, manage stock levels efficiently, and respond quickly to market changes. By aligning sales operations with the broader Ternaqin platform, the POS system supports scalable growth, operational efficiency, and a transparent, data-driven commercial ecosystem.",
          ],
          references: [
            {
              text: "Buttle, F., & Maklan, S. (2019). Customer Relationship Management: Concepts and Technologies. Routledge.",
            },
            {
              text: `Ionescu, S., et al. (2020). "The Impact of Point of Sale Systems on Business Performance". Journal of Information Systems & Operations Management.`,
            },
            {
              text: `Tian, F. (2016). "An agri-food supply chain traceability system for China based on RFID & blockchain technology". IEEE International Conference on Service Operations and Logistics, and Informatics.`,
            },
            {
              text: `Chuang, S. H., & Lin, H. N. (2017). "The effect of strategic alignment between business and IT on business agility". Information & Management.`,
            },
          ],
        },
        {
          label: "Search Engine Optimization",
          title: "Search Engine Optimization",
          image: "/img/seo-illustration.svg",
          description: [
            "Search Engine Optimization (SEO) within the Ternaqin ecosystem is designed to strengthen digital visibility, discoverability, and brand credibility across the livestock and agribusiness industry. By structuring platform content, product information, and educational resources using SEO best practices, Ternaqin ensures that stakeholders—including farmers, distributors, regulators, and consumers—can easily find accurate and relevant information through search engines. This approach helps position Ternaqin as a trusted, authoritative digital platform in a traditionally fragmented industry.",
            "SEO implementation is closely aligned with Ternaqin’s data-driven architecture, enabling optimized indexing of traceable livestock data, certifications, supply chain insights, and consumer-facing product information. Pages enriched with verified data, structured metadata, and transparent records improve search relevance while reinforcing trust and compliance. This not only increases organic traffic but also ensures that users accessing Ternaqin through search channels receive consistent, reliable, and up-to-date information.",
            "By leveraging analytics and performance insights, SEO within Ternaqin supports continuous optimization of content strategy and user engagement. Organizations can identify search trends, understand audience behavior, and tailor messaging to industry needs while maintaining accuracy and transparency. As a result, SEO becomes a strategic growth driver—enhancing digital reach, supporting customer acquisition, and strengthening Ternaqin’s role as a leading, data-driven ecosystem for the livestock industry.",
          ],
          references: [
            {
              text: "Payne, A., & Frow, P. (2013). Strategic Customer Management: Integrating Relationship Marketing and CRM. Cambridge University Press.",
            },
            {
              text: `Tian, F. (2016). "An agri-food supply chain traceability system for China based on RFID & blockchain technology". IEEE International Conference on Service Operations and Logistics, and Informatics.`,
            },
            {
              text: `Ionescu, S., et al. (2020). "The Impact of Point of Sale Systems on Business Performance". Journal of Information Systems & Operations Management.`,
            },
            {
              text: `Enge, E., Spencer, S., & Stricchiola, J. (2015). The Art of SEO: Mastering Search Engine Optimization. O'Reilly Media.`,
            },
          ],
        },
      ]}
    />
  );
}
