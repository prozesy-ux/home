import { AIFeatureCard } from "@/sections/AIDesignSection/components/AIFeatureCard";
import { AILogo } from "@/sections/AIDesignSection/components/AILogo";

export const AIDesignSection = () => {
  return (
    <div className="relative box-border caret-transparent overflow-clip rounded-[20px] md:rounded-[32px]">
      <div className="box-border caret-transparent">
        <div className="bg-neutral-950 box-border caret-transparent">
          <div className="box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
            <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
              <div className="items-center box-border caret-transparent gap-x-8 flex flex-col justify-start gap-y-8 md:gap-x-14 md:gap-y-14">
                <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-4 text-center">
                  <div className="box-border caret-transparent flex min-h-[auto] min-w-[auto]">
                    <div className="text-green-500 box-border caret-transparent min-h-[auto] min-w-[auto] border border-green-800 px-3 py-1 rounded-3xl border-solid">
                      <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                        AI-Powered Design
                      </div>
                    </div>
                  </div>
                  <h2 className="text-zinc-50 text-[28px] font-bold box-border caret-transparent leading-[33.6px] min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                    Smarter Design,{" "}
                    <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                      Supercharged by AI
                    </em>
                  </h2>
                  <p className="text-neutral-300 text-base box-border caret-transparent tracking-[0.36px] leading-6 max-w-2xl min-h-[auto] min-w-[auto] mx-auto md:text-lg md:leading-[27px]">
                    From wireframes to launch, we blend AI tools with strategy
                    to deliver faster, sharper, and data-led design results.
                  </p>
                </div>
                <div className="box-border caret-transparent gap-x-5 flex flex-col min-h-[auto] min-w-[auto] gap-y-5 md:gap-x-[normal] md:block md:flex-row md:gap-y-[normal]">
                  <div className="box-border caret-transparent gap-x-5 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] min-h-[auto] min-w-[auto] gap-y-5 md:gap-x-8 md:grid-cols-[1fr_1fr_1fr] md:min-h-0 md:min-w-0 md:gap-y-8">
                    <AIFeatureCard
                      iconSrc="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-10.svg"
                      iconAlt="Icon"
                      iconVariant="h-[152px] w-[370px]"
                      backgroundIconSrc="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-11.svg"
                      backgroundIconAlt="Icon"
                      title="UX Copy"
                      titleEmphasis="That Clicks"
                      description="We use AI to create effective copies like CTAs and microcopy that speaks."
                      featureImageSrc="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0f8e5e4eed26b3df33dbf_Frame 427321588 (10) (1).avif"
                      featureImageAlt=""
                      containerVariant="left-2/4 top-full"
                    />
                    <AIFeatureCard
                      iconSrc="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-12.svg"
                      iconAlt="Icon"
                      iconVariant="h-[102px]"
                      backgroundIconSrc="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-11.svg"
                      backgroundIconAlt="Icon"
                      title="Visuals,"
                      titleEmphasis="Instantly on Point"
                      description="We generate custom visuals using AI for faster concept directions, brand-ready"
                      featureImageSrc="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0fd1543795606db43fc7a_b0912675069a2f6948f5db3e54c11327_Frame 2147226580 (1).avif"
                      featureImageAlt=""
                      containerVariant="absolute box-border caret-transparent hidden transform-none z-[-1] right-2/4 top-full md:block md:translate-x-[13px]"
                    />
                    <AIFeatureCard
                      iconSrc="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-13.svg"
                      iconAlt="Icon"
                      iconVariant="h-[152px] w-[370px]"
                      backgroundIconSrc="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-11.svg"
                      backgroundIconAlt="Icon"
                      title="Data-Led"
                      titleEmphasis="Design Decisions"
                      description="We predict user behavior before launch with AI-powered heatmaps that help us"
                      featureImageSrc="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0fd7c6c69d5e8b586e825_Frame 2147226653 (2) (1).avif"
                      featureImageAlt=""
                      containerVariant="absolute box-border caret-transparent hidden transform-none z-[-1] right-2/4 top-full md:block md:translate-x-[13px]"
                    />
                  </div>
                  <AILogo />
                  <div className="box-border caret-transparent gap-x-5 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] min-h-[auto] min-w-[auto] gap-y-5 md:gap-x-8 md:grid-cols-[1fr_1fr_1fr] md:min-h-0 md:min-w-0 md:gap-y-8">
                    <AIFeatureCard
                      iconSrc="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-14.svg"
                      iconAlt="Icon"
                      iconVariant="h-[153px] w-[370px]"
                      backgroundIconSrc="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-11.svg"
                      backgroundIconAlt="Icon"
                      title="Smarter &"
                      titleEmphasis="Faster Wireframes"
                      description="We rapidly turn ideas into functional wireframes using AI tools, with less"
                      featureImageSrc="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0feeeeec420934eb6dc33_f5af64da87fb7c474458934d16bc50fe_Frame 2147226581 (1).avif"
                      featureImageAlt=""
                      containerVariant="absolute box-border caret-transparent hidden transform-none z-[-1] left-2/4 bottom-full md:block md:translate-y-[26px]"
                    />
                    <AIFeatureCard
                      iconSrc="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-15.svg"
                      iconAlt="Icon"
                      iconVariant="h-[98px]"
                      backgroundIconSrc="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-11.svg"
                      backgroundIconAlt="Icon"
                      title="Launch Quicker,"
                      titleEmphasis="Spend Less"
                      description="AI reduces revisions and guesswork and makes your website ready to launch"
                      featureImageSrc="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0fe116b9d3d649da7d5ef_Frame 427321588 (13) (1).avif"
                      featureImageAlt=""
                      containerVariant="absolute box-border caret-transparent hidden transform-none z-[-1] left-2/4 bottom-full md:block md:translate-y-1.5"
                    />
                    <AIFeatureCard
                      iconSrc="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-16.svg"
                      iconAlt="Icon"
                      iconVariant="h-[153px] w-[370px]"
                      backgroundIconSrc="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-11.svg"
                      backgroundIconAlt="Icon"
                      title="No Blank"
                      titleEmphasis="Canvas Struggles"
                      description="AI generates editable mockups from prompts so we can skip the slow start"
                      featureImageSrc="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0fdca701e60e4fb26c2fa_Frame 427321588 (11) (1).avif"
                      featureImageAlt=""
                      containerVariant="transform-none right-2/4 bottom-full md:translate-x-[15px] md:translate-y-[26px]"
                    />
                  </div>
                </div>
                <div className="box-border caret-transparent hidden before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
