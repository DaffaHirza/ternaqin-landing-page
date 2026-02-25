
export default function AboutContent() {
    return (
        <div className="w-full flex flex-col gap-7">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#191919]">
                User Of Employee
            </h3>

            <div className="flex flex-col gap-6 text-xl text-justify text-[#191919] leading-8">
                <p className="indent-8">
                    The primary users of the Employee Mobile App are field workers, RPH staff, and operational employees involved in daily livestock activities. These users rely on the app to record attendance, receive task assignments, and report operational progress in a simple and efficient manner. By using a mobile interface tailored to on-site conditions, employees can complete administrative reporting without interrupting core operational tasks.
                </p>

                <p className="indent-8">
                    Supervisors and operational managers also interact indirectly with the app through real-time access to workforce data. They use the reported information to monitor attendance compliance, track task execution, and identify operational bottlenecks. This visibility enables managers to respond quickly to issues, optimize workforce deployment, and maintain consistent operational standards.
                </p>

                <p className="indent-8">
                    For organizational leadership and compliance teams, the Employee Mobile App provides reliable, structured workforce data that supports performance evaluation, audits, and regulatory reporting. By connecting employees, supervisors, and administrators through a single mobile platform, the app strengthens coordination, improves accountability, and supports scalable workforce management across the livestock value chain.
                </p>
            </div>
            <div className="pt-8 flex items-center border-t border-[#E3E3E3] justify-between text-[#A5A5A5] text-sm">
                <p>© 2026 TernaQin Indonesia</p>
                <p>All Right Reserved</p>
            </div>
        </div>
    );
}
