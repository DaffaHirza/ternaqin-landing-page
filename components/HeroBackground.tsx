import Image from "next/image";

export default function HeroBackground() {
  return (
    <>
      <Image
        src="/img/hero.png"
        alt="Livestock farm"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />
    </>
  );
}
