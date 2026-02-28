
export default function AboutContent() {
    return (
        <div className="w-full flex flex-col gap-7">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#191919]">
                About Employee            </h3>

            <div className="flex flex-col gap-6 text-xl text-justify text-[#191919] leading-8">
                <p className="indent-8">
                    The Employee Mobile App is a mobile-first workforce management solution designed to support field employees and RPH personnel in executing and reporting daily operational tasks. As part of the Ternaqin ecosystem, the app serves as a direct interface between on-site activities and centralized management systems, ensuring that workforce data is captured accurately at the point of execution. This approach eliminates manual reporting delays and improves overall operational transparency. </p>
                <p className="indent-8">
                    The app focuses on simplifying essential workforce processes such as attendance logging, task execution, and activity reporting. By providing a structured and intuitive interface, it ensures that employees can easily record shift times, submit progress updates, and report operational activities without disrupting their workflow. All data is standardized and securely synchronized with the central platform, reducing errors and ensuring data consistency across teams.</p>

                <p className="indent-8">
                    Beyond operational convenience, the Employee Mobile App plays a critical role in strengthening accountability and performance monitoring. Each activity is time-stamped, user-associated, and contextually recorded, creating a reliable audit trail of workforce actions. This supports accurate performance evaluation, regulatory readiness, and continuous improvement in workforce operations across farms and abattoir environments.                </p>
            </div>

            <div className="pt-8 flex items-center border-t border-[#E3E3E3] justify-between text-[#A5A5A5] text-sm">
                <p>© 2026 TernaQin Indonesia</p>
                <p>All Right Reserved</p>
            </div>
        </div>
    );
}
