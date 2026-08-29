import Image from "next/image";
import { HeroGreeting } from "@/components/sections/hero-greeting";

export function Hero() {
  return (
    <div className="relative h-[460px] w-full overflow-hidden rounded-[14px] lg:absolute lg:inset-0 lg:h-auto lg:rounded-none">
      <Image
        src="/images/hero.jpg"
        alt="Kaido standing in a spotlight"
        fill
        priority
        sizes="(min-width: 1024px) 750px, 100vw"
        className="size-full object-cover object-[32%_22%]"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#0a0a0a] to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <HeroGreeting />
      </div>
    </div>
  );
}
