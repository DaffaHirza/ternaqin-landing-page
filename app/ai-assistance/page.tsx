import InsightTemplate from "@/components/InsightTemplate";

export default function aiAssistanceSupport() {
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
      title="AI Assistance Support"
      heroImage="/img/hero-ai.svg"
      heroDescription="AI Assistance serves as a unified intelligence layer across the Ternaqin ecosystem, helping administrators, RPH operators, and operational teams manage livestock processes with greater accuracy and efficiency. Through automation, real-time data analysis, and contextual insights, it streamlines operations, ensures transparency and compliance, and supports regulatory readiness. Integrated into RPH workflows and field activities, AI Assistance improves food safety, reduces risk, accelerates onboarding, and enhances productivity. By transforming operational data into actionable insights, it enables smarter decisions, optimized resources, and sustainable scaling across the livestock value chain."
      sections={[
        {
          label: "AI Mechanisms",
          title: "AI Operational Mechanisms in the Ternaqin Ecosystem",
          image: "/img/aim-illustration.svg",
          description: [
            "Operationally, AI Assistance acts as a real-time analytical engine that processes large volumes of livestock and operational data to deliver actionable insights. As data flows into the system from farms, RPH facilities, logistics operations, and inspections, AI algorithms analyze patterns, anomalies, and performance indicators. These analyses enable early detection of potential risks such as data inconsistencies, compliance gaps, operational bottlenecks, or deviations from standard operating procedures. By operating continuously, AI transforms raw operational data into meaningful intelligence that supports proactive decision-making.",

            "Within RPH workflows, AI Assistance supports inspection processes, operational monitoring, and compliance readiness. AI can highlight incomplete inspection records, flag unusual processing timelines, or detect inconsistencies between physical operations and digital records. During slaughterhouse activities, AI-generated alerts help operators address issues before they escalate, reducing food safety risks and operational disruptions. This mechanism minimizes manual oversight burden while increasing accuracy and consistency across high-volume, time-sensitive operations.",

            "AI Assistance also accelerates onboarding and workforce efficiency by providing contextual guidance and operational recommendations. New operators or field teams receive system-driven prompts, validation checks, and best-practice suggestions based on real-time conditions. By embedding intelligence directly into daily workflows, AI reduces dependency on manual supervision, lowers error rates, and ensures standardized execution across distributed operational environments. This operational mechanism positions AI as an active support system rather than a passive analytics tool.",
          ],
          references: [
            {
              text: 'Annosi, M. C., dkk. (2021). "The Role of AI in Food Supply Chain Management." Journal of Business Research.',
            },
            {
              text: 'Baurhoo, B., dkk. (2021). "Applications of artificial intelligence in livestock production and meat processing." Frontiers in Animal Science.',
            },
          ],
        },
        {
          label: "AI Implementation",
          title: "AI Implementation and Decision Support for Ternaqin",
          image: "/img/aii-illustration.svg",
          description: [
            "In implementation, Ternaqin embeds AI Assistance as a unified intelligence layer across its digital infrastructure, integrating seamlessly with QR Code systems, blockchain records, RPH platforms, and field applications. AI dashboards provide role-specific insights such as operational performance metrics, compliance readiness indicators, and risk assessments. These insights are delivered in real time, enabling administrators and operators to respond quickly to changing conditions and operational demands. The implementation is designed for scalability, allowing AI capabilities to expand as data volume and ecosystem complexity grow.",
            "From a regulatory and risk management perspective, AI Assistance strengthens transparency and compliance monitoring. AI continuously evaluates inspection completeness, certification alignment, and data consistency, helping organizations maintain audit readiness at all times. Regulators and internal compliance teams can rely on AI-generated summaries and alerts to focus attention on high-risk areas, reducing the need for reactive audits or corrective actions. This implementation supports a shift from manual, retrospective compliance checks to proactive, data-driven oversight.",
            "For strategic decision-making, AI Assistance converts operational data into actionable intelligence that supports optimization and sustainable growth. AI-driven insights help organizations optimize resource allocation, improve throughput, reduce waste, and enhance food safety outcomes. By enabling smarter decisions at both operational and strategic levels, AI Assistance empowers Ternaqin to scale efficiently while maintaining trust, accountability, and system-wide transparency. Through this implementation, AI becomes a foundational enabler of intelligent, resilient, and future-ready livestock management.",
          ],
          references: [
            {
              text: 'Casino, F., dkk. (2019). "A systematic literature review of blockchain-based applications: Current status, classification and open issues." Telematics and Informatics.',
            },
            {
              text: 'Salah, K., dkk. (2019). "Blockchain for AI: Review and open research challenges." IEEE Access.',
            },
            {
              text: 'Tsolakis, N., dkk. (2021). "Blockchain and AI for agriculture supply chain management and resilience." International Journal of Operations & Production Management.',
            },
          ],
        },
      ]}
    />
  );
}
