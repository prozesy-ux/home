import { BonusCard } from "@/sections/PricingSection/components/BonusCard";

export const BonusSection = () => {
  return (
    <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] overflow-hidden mt-8 rounded-3xl md:mt-0">
      <div className="relative bg-neutral-950 border-b-zinc-800 border-l-stone-800/60 border-r-stone-800/60 border-t-zinc-800 box-border caret-transparent z-[3] overflow-hidden m-0.5 pt-8 pb-4 px-0 rounded-3xl border-l border-r md:pb-8 md:px-8">
        <div className="box-border caret-transparent before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"></div>
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent max-w-[510px] text-center w-full mx-auto px-5">
            <h2 className="relative text-[28px] font-bold box-border caret-transparent leading-[33.6px] z-20 font-redhatdisplay_variablefont_wght md:static md:text-5xl md:leading-[57.6px] md:z-auto">
              <span className="text-[28px] bg-clip-text bg-[linear-gradient(rgb(251,250,246),rgb(134,134,134)_81%)] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]">
                Bonuses Worth Over
              </span>
              <span className="text-[28px] bg-clip-text bg-[linear-gradient(70deg,rgba(120,89,233,0.54),rgba(255,255,255,0.8)_39%,rgb(255,248,40)_61%,rgb(105,112,19))] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]">
                $2,500-Yours Free!
              </span>
            </h2>
          </div>
          <div className="box-border caret-transparent gap-x-6 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-6 mt-10 md:grid-cols-[1fr_1fr_1fr_1fr]">
            <BonusCard
              iconUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673a038c80806ed8478ebd33_Frame (2).svg"
              title="Free Design Prototype "
              description="Experience your design in action before development."
            />
            <BonusCard
              iconUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673a038df944f8b1aefac679_Frame (3).svg"
              title="Developer Handoff"
              description="We ensure what we design is exactly what gets built."
            />
            <BonusCard
              iconUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673a038d00a0d08adf632e55_Frame (4).svg"
              title="Project Management"
              description="Stay on track with our expert project management."
            />
            <BonusCard
              iconUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673a038cd746e88bae725bd2_Frame (5).svg"
              title="Project Consultation"
              description="Get professional advice to enhance your project."
            />
          </div>
        </div>
        <div className="absolute box-border caret-transparent max-w-[213px] z-0 right-[0%] top-[0%] md:max-w-none">
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673a372ca8de37d4fb0e5816_Group 1000004381.avif"
            alt=""
            className="box-border caret-transparent inline-block max-w-full"
          />
        </div>
      </div>
      <div className="absolute box-border caret-transparent h-full w-full z-[2] inset-[0%]">
        <div className="absolute bg-[linear-gradient(rgba(127,33,255,0.6),rgb(52,109,255)_29%,rgb(191,199,101)_52%,rgb(80,65,255)_79%,rgba(127,33,255,0.6)),linear-gradient(25deg,rgba(127,33,255,0.6),rgba(219,219,219,0.79)_41%,rgba(255,255,255,0.89)_61%,rgba(80,60,120,0.07))] bg-size-[auto,auto] box-border caret-transparent blur-[10px] h-[150%] translate-x-[-50.0%] w-[150%] z-0 bg-[position:0%,0%_0%,0%] left-2/4 top-[0%] md:top-2/4"></div>
      </div>
    </div>
  );
};
