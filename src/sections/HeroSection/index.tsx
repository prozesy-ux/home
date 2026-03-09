import { HeroContent } from "@/sections/HeroSection/components/HeroContent";
import { LogoCarousel } from "@/sections/HeroSection/components/LogoCarousel";
import { HeroImages } from "@/sections/HeroSection/components/HeroImages";

export const HeroSection = () => {
  return (
    <section className="relative text-zinc-50 bg-neutral-950 box-border caret-transparent h-auto overflow-hidden pt-[90px] pb-20 md:h-[980px] md:pb-0">
      <div className="box-border caret-transparent h-full z-[1] px-5 md:px-[94px]">
        <div className="box-border caret-transparent h-full max-w-[1252px] w-full mx-auto">
          <div className="box-border caret-transparent h-[570px] justify-around md:h-full md:justify-normal">
            <HeroContent />
            <LogoCarousel />
          </div>
        </div>
      </div>
      <HeroImages
        containerVariant="left-[0%] top-[90px]"
        mainImageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6772a59f9e4d013c6a671384_Mockups.avif"
        mainImageAlt=""
        mainImageVariant="w-full md:translate-y-[1.08504px] md:w-[245px]"
        secondaryImageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6772a59fa5a5e8b8e00985f8_Ai.avif"
        secondaryImageAlt=""
        secondaryImageVariant="w-[81px] right-[70px] bottom-[70px] md:w-[117px] md:bottom-[60px]"
        tertiaryImageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6772a59fb66e3dddbecf4561_Cube.avif"
        tertiaryImageAlt=""
        tertiaryImageVariant="w-[108px] top-[30px]"
      />
      <HeroImages
        containerVariant="right-[0%] top-[125px]"
        mainImageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6772a8cda0faac73a2d81fb2_Frame 1618873776.avif"
        mainImageAlt=""
        mainImageVariant="w-[290px] md:translate-y-[10.915px] md:w-[310px]"
        secondaryImageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6772a59f7b1eefa28a38aa7d_cursor.avif"
        secondaryImageAlt=""
        secondaryImageVariant="w-[61px] z-[2] right-[143px] top-[166px] md:right-[140px] md:top-[168px]"
        tertiaryImageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6772a5a00b29b82dff1f0438_ring.avif"
        tertiaryImageAlt=""
        tertiaryImageVariant="w-[71px] right-[0%] top-9"
      />
      <div className="absolute items-center box-border caret-transparent flex justify-center opacity-[0.88] pointer-events-none z-[1] bottom-[1%] inset-x-[0%] md:bottom-[0%]">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673b29a85449a44b5ebfdfe7_Glow (1).avif"
          alt=""
          className="aspect-[auto_412_/_125] box-border caret-transparent h-full max-w-full min-h-[auto] min-w-[auto] w-full md:h-[125px]"
        />
      </div>
    </section>
  );
};
