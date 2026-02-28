import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Page() {
    return (
        <div className="min-h-screen bg-[#F3F3F3] px-5 py-12 sm:px-8 lg:px-5">
            <Navbar />
            <div className="mx-auto mt-10 max-w-5xl">
                <h1 className="text-3xl font-semibold text-[#191919] sm:text-4xl">Services</h1>
                <p className="mt-3 text-lg text-[#666666]">Pilih service untuk melihat detail halaman masing-masing.</p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <Link
                        href="/services/livestock"
                        className="rounded-xl border border-[#D9D9D9] bg-white p-5 text-[#191919] transition hover:border-[#1F4941]"
                    >
                        Livestock
                    </Link>
                    <Link
                        href="/services/employee"
                        className="rounded-xl border border-[#D9D9D9] bg-white p-5 text-[#191919] transition hover:border-[#1F4941]"
                    >
                        Employee
                    </Link>
                    <Link
                        href="/services/abbatoir"
                        className="rounded-xl border border-[#D9D9D9] bg-white p-5 text-[#191919] transition hover:border-[#1F4941]"
                    >
                        Abbatoir
                    </Link>
                </div>
            </div>
        </div>
    );
}
