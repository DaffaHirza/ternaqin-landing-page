
export default function AboutContent() {
    return (
        <div className="w-full flex flex-col gap-7">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#191919]">
                Mechanisms Operational of Employee           </h3>

            <div className="flex flex-col gap-6 text-xl text-justify text-[#191919] leading-8">
                <p className="indent-8">
                    The Employee Mobile App operates through real-time mobile data capture that connects workforce activities directly to the Ternaqin platform. Employees log attendance by recording shift start and end times, while task assignments and progress updates are submitted through structured digital forms. This ensures that operational data is collected consistently and immediately, minimizing reporting gaps and manual intervention.                </p>
                <p className="indent-8">
                    Task reporting follows predefined workflows that align with operational standards and roles. Employees receive assigned tasks, submit completion updates, and attach supporting information such as notes, photos, or QR code scans where applicable. Each submission is validated and synchronized with the central system, enabling supervisors to monitor task status and workforce performance in real time.
                </p>
                <p className="indent-8">
                    To support operational intelligence, the app continuously feeds workforce data into analytics dashboards and reporting modules. Attendance trends, task completion rates, and activity patterns are processed into actionable insights that support workforce planning and decision-making. Through seamless integration with other Ternaqin modules, the Employee Mobile App ensures that workforce data contributes directly to operational efficiency and traceability.
                </p>
            </div>
            <div className="pt-8 flex items-center border-t border-[#E3E3E3] justify-between text-[#A5A5A5] text-sm">
                <p>© 2026 TernaQin Indonesia</p>
                <p>All Right Reserved</p>
            </div>
        </div>
    );
}
