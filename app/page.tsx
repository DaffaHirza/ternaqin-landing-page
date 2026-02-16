import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      {/* ================= HERO PINNED ================= */}
      <section className="hero-section">
        <Hero />
      </section>

      {/* NEXT SECTION */}
      <section className="h-screen bg-neutral-900 text-white flex items-center justify-center">
        Features Section
      </section>
    </>
  );
}
