import { ComparisonRow } from "@/sections/ComparisonSection/components/ComparisonRow";

export const ComparisonSection = () => {
  return (
    <div className="box-border caret-transparent py-[60px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
        <div className="box-border caret-transparent gap-x-10 flex flex-col gap-y-10">
          <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-4 text-center">
            <div className="box-border caret-transparent flex min-h-[auto] min-w-[auto]">
              <div className="text-green-500 box-border caret-transparent min-h-[auto] min-w-[auto] border border-green-800 px-3 py-1 rounded-3xl border-solid">
                <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                  Why Choose Us
                </div>
              </div>
            </div>
            <div className="text-zinc-50 box-border caret-transparent min-h-[auto] min-w-[auto]">
              <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                <span className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                  Design Monks’s
                </span>
                Alternative?
                <br className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]" />
                <span className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                  Think
                </span>
                One More Time!
              </h2>
            </div>
          </div>
          <div className="box-border caret-transparent gap-x-2.5 flex flex-col min-h-[auto] min-w-[auto] gap-y-2.5 overflow-auto md:gap-x-10 md:gap-y-10 md:overflow-visible">
            <div className="items-center box-border caret-transparent gap-x-0 grid auto-cols-[1fr] grid-cols-[1.75fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] min-h-[auto] min-w-[884px] gap-y-0 w-full mx-5 px-10 md:grid-cols-[3.5fr_1fr_1fr_1fr_1fr_1fr] md:min-w-[1249px] md:mx-0">
              <div className="text-zinc-50 box-border caret-transparent min-h-[auto] min-w-[auto]">
                <div className="text-base font-bold box-border caret-transparent leading-[19.2px] font-redhatdisplay_variablefont_wght md:text-xl md:leading-6">
                  Platform
                </div>
              </div>
              <div className="text-zinc-50 box-border caret-transparent min-h-[auto] min-w-[auto] text-center">
                <div className="text-base font-bold box-border caret-transparent leading-[19.2px] font-redhatdisplay_variablefont_wght md:text-xl md:leading-6">
                  Speed
                </div>
              </div>
              <div className="text-zinc-50 box-border caret-transparent min-h-[auto] min-w-[auto] text-center">
                <div className="text-base font-bold box-border caret-transparent leading-[19.2px] font-redhatdisplay_variablefont_wght md:text-xl md:leading-6">
                  Flexibility
                </div>
              </div>
              <div className="text-zinc-50 box-border caret-transparent min-h-[auto] min-w-[auto] text-center">
                <div className="text-base font-bold box-border caret-transparent leading-[19.2px] font-redhatdisplay_variablefont_wght md:text-xl md:leading-6">
                  Quality
                </div>
              </div>
              <div className="text-zinc-50 box-border caret-transparent min-h-[auto] min-w-[auto] text-center">
                <div className="text-base font-bold box-border caret-transparent leading-[19.2px] font-redhatdisplay_variablefont_wght md:text-xl md:leading-6">
                  Scalability
                </div>
              </div>
              <div className="text-zinc-50 box-border caret-transparent min-h-[auto] min-w-[auto] text-center">
                <div className="text-base font-bold box-border caret-transparent leading-[19.2px] font-redhatdisplay_variablefont_wght md:text-xl md:leading-6">
                  Affordability
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] gap-y-8 mx-5 md:gap-y-14 md:mx-0">
              <ComparisonRow
                variant="relative bg-[linear-gradient(183deg,rgb(235,248,252),rgb(127,184,239)_30%,rgb(81,66,241)_62%,rgb(29,29,41))] box-border caret-transparent min-h-[auto] min-w-[884px] w-full overflow-hidden p-[1.5px] rounded-[32px] md:min-w-[1252px]"
                iconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-18.svg"
                title="Design Monks"
                description="Expert-driven & committed to higher quality. Get effective result & full support without hiring in-house employees"
                feature1IconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-19.svg"
                feature1HasWrapper={true}
                feature2IconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-19.svg"
                feature2HasWrapper={true}
                feature3IconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-19.svg"
                feature3HasWrapper={true}
                feature4IconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-19.svg"
                feature4HasWrapper={true}
                feature5IconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-19.svg"
                feature5HasWrapper={true}
                showDecorationImages={true}
                decorationImage1Url="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/681244ac644e26ebc70402b7_Ellipse 11.avif"
                decorationImage2Url="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68124543eaad0129fcf9956e_Ellipse 13.avif"
                iconWrapperVariant="items-center bg-violet-600 box-border caret-transparent hidden justify-center max-h-[85px] max-w-[85px] min-h-[85px] min-w-[85px] rounded-[10px] md:flex"
              />
              <ComparisonRow
                variant="border-b-neutral-600/50 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 pb-6 border-b"
                iconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-20.svg"
                title="In House Team"
                description="A full-time designer may ensure brand consistency, but there’s a risk of limited expertise even though you pay regularly"
                feature1IconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-21.svg"
                feature1HasWrapper={false}
                feature2IconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-21.svg"
                feature2HasWrapper={false}
                feature3IconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-21.svg"
                feature3HasWrapper={false}
                feature4IconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-19.svg"
                feature4HasWrapper={true}
                feature5IconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-21.svg"
                feature5HasWrapper={false}
                iconWrapperVariant="items-center bg-blue-600/30 hidden justify-center max-h-[85px] max-w-[85px] min-h-[85px] min-w-[85px] rounded-[10px] md:flex"
                showDecorationImages={false}
              />
              <ComparisonRow
                variant="items-center border-b-neutral-600/50 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800"
                iconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-22.svg"
                title="Creative Agencies"
                description="Agencies offer structured processes but mostly with high costs, long timelines, and less flexibility for your projects"
                feature1IconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-21.svg"
                feature1HasWrapper={false}
                feature2IconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-21.svg"
                feature2HasWrapper={false}
                feature3IconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-19.svg"
                feature3HasWrapper={true}
                feature4IconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-19.svg"
                feature4HasWrapper={true}
                feature5IconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-21.svg"
                feature5HasWrapper={false}
                iconWrapperVariant="items-center bg-blue-600/30 box-border caret-transparent hidden justify-center max-h-[85px] max-w-[85px] min-h-[85px] min-w-[85px] rounded-[10px] md:flex"
              />
              <ComparisonRow
                variant="items-center border-b-neutral-600/50 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800"
                iconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-23.svg"
                title="Freelancers"
                description="Freelancers may provide affordable design services but they mostly lack consistency, reliability, and collaboration"
                feature1IconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-21.svg"
                feature1HasWrapper={false}
                feature2IconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-19.svg"
                feature2HasWrapper={true}
                feature3IconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-21.svg"
                feature3HasWrapper={false}
                feature4IconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-21.svg"
                feature4HasWrapper={false}
                feature5IconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-19.svg"
                feature5HasWrapper={true}
                iconWrapperVariant="items-center bg-blue-600/30 box-border caret-transparent hidden justify-center max-h-[85px] max-w-[85px] min-h-[85px] min-w-[85px] rounded-[10px] md:flex"
              />
              <ComparisonRow
                variant=""
                iconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-24.svg"
                title="Self-Service Tools"
                description="DIY tools like website builders are budget-friendly, but you can’t expect strategic thinking & originality"
                feature1IconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-21.svg"
                feature1HasWrapper={false}
                feature2IconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-21.svg"
                feature2HasWrapper={false}
                feature3IconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-19.svg"
                feature3HasWrapper={true}
                feature4IconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-19.svg"
                feature4HasWrapper={true}
                feature5IconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-21.svg"
                feature5HasWrapper={false}
                iconWrapperVariant="items-center bg-blue-600/30 box-border caret-transparent hidden justify-center max-h-[85px] max-w-[85px] min-h-[85px] min-w-[85px] rounded-[10px] md:flex"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
