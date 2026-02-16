import PinnedScene from "@/components/PinnedScene";
import Navbar from "@/components/Navbar";
import HeroMain from "@/components/HeroMain";
import SectionReveal from "@/components/SectionReveal";
import Image from "next/image";


export default function HeroContent() {
  return (
    <PinnedScene
    id="pinned-scene" // tambahkan ID supaya mudah referensi
      frame={8}
      overlay={<Navbar />}
      background={
        <>
          {/* Background Image */}
          <Image
            src="/img/hero.png"
            alt="cow farm"
            fill
            priority
            className="object-cover"
          />

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.75) 0%,
              rgba(0,0,0,0.55) 40%,
              rgba(0,0,0,0.55) 75%,
              rgba(0,0,0,0.7) 100%
            )
          `,
            }}
          />

          {/* Scroll Darkening */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "black",
              opacity:
                "calc(var(--pinned-progress, 0) * var(--pinned-progress, 0) * 0.7)",
            }}
          />
        </>
      }
      hero={<HeroMain />}
      next={<SectionReveal />}
    />
  );
}
