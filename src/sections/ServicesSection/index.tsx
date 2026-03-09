import { ServiceTab } from "@/sections/ServicesSection/components/ServiceTab";
import { ServiceImage } from "@/sections/ServicesSection/components/ServiceImage";

export const ServicesSection = () => {
  return (
    <section className="relative bg-neutral-950 box-border caret-transparent rounded-[32px]">
      <div className="box-border caret-transparent py-[60px] md:py-[100px]">
        <div className="box-border caret-transparent z-[1] px-5 md:px-[94px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full mx-auto">
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent gap-x-2 flex flex-col gap-y-2 md:gap-x-4 md:gap-y-4">
                <div className="box-border caret-transparent flex justify-start min-h-[auto] min-w-[auto] mb-2">
                  <div className="text-green-700 box-border caret-transparent min-h-[auto] min-w-[auto] border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
                    <div className="text-sm box-border caret-transparent tracking-[0.32px] leading-[21px] capitalize md:text-base md:leading-6">
                      What We Do
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                  <h2 className="text-white text-[28px] font-bold box-border caret-transparent leading-[33.6px] capitalize font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                    <span className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]">
                      We Design{" "}
                    </span>
                    <span className="text-[28px] italic box-border caret-transparent inline-block leading-[33.6px] font-playfairdisplay_variablefont_wght md:text-5xl md:inline md:leading-[57.6px]">
                      Brands
                    </span>
                    <span className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]">
                      {" "}
                      That{" "}
                    </span>
                    <span className="text-[28px] italic box-border caret-transparent inline-block leading-[33.6px] font-playfairdisplay_variablefont_wght md:text-5xl md:inline md:leading-[57.6px]">
                      Speak
                    </span>
                    <span className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]">
                      <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]"></em>
                      to Audiences
                    </span>
                  </h2>
                </div>
              </div>
              <div className="items-start box-border caret-transparent gap-x-8 flex flex-col justify-start gap-y-8 mt-8 md:flex-row md:mt-14">
                <ServiceTab />
                <div className="items-center box-border caret-transparent gap-x-[50px] flex basis-[0%] flex-col grow min-h-[auto] min-w-[auto] gap-y-[50px] w-full md:[align-items:normal] md:w-3/5">
                  <ServiceImage
                    image1Src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/679a9c4888217669122eebaf_3d41798d228903d42862a148dd56aeb1_Project Cards (10) (1).avif"
                    image1Alt=""
                    image2Src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67ac78087a5b72120cc3e5db_d1a5f14e5e5fc69f2dbac575600f06f4_Project Cards-6.avif"
                    image2Alt=""
                  />
                  <ServiceImage
                    image1Src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67ac78084947770a14f1eb7c_d1cec41f22346c1c941376236623384b_Project Cards.avif"
                    image1Alt=""
                    image2Src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67ac78089c9a93e810fbfa6e_Project Cards-1.avif"
                    image2Alt=""
                    showExtraDiv={true}
                  />
                  <ServiceImage
                    image1Src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67ac7809638da68108df9847_Project Cards-4.avif"
                    image1Alt=""
                    image2Src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67ac78089a0d6cfed1675211_Project Cards-5.avif"
                    image2Alt=""
                  />
                  <ServiceImage
                    image1Src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67ac780912dabe81710b65ed_8e70a34a4056237eca17e1209cecdebe_Project Cards-2.avif"
                    image1Alt=""
                    image2Src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67ac78088c2757d4cdf75977_Project Cards-3.avif"
                    image2Alt=""
                    showExtraDiv={true}
                  />
                </div>
              </div>
              <div className="relative items-center box-border caret-transparent flex justify-center mt-10 md:mt-14">
                <a
                  href="https://www.designmonks.co/contact"
                  className="relative text-violet-600 items-center bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] shadow-[rgba(255,255,255,0.72)_0px_1.6px_3px_0px_inset] box-border caret-transparent flex flex-col h-14 justify-center max-w-full min-h-[auto] min-w-[auto] text-left w-full z-[5] overflow-hidden rounded-lg md:max-w-[177px]"
                >
                  <div className="absolute items-center bg-neutral-400 box-border caret-transparent flex h-full justify-center w-full inset-[0%]">
                    <div className="absolute bg-[linear-gradient(90deg,rgba(255,255,255,0.79)_61%,rgb(255,255,255)_75%)] box-border caret-transparent blur-[6px] h-20 translate-y-[-50.0%] w-full left-2/4 right-[0%] top-2/4 bottom-[0%]"></div>
                  </div>
                  <div className="absolute bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] box-border caret-transparent rounded-lg inset-[0%]"></div>
                  <div className="relative text-gray-200 box-border caret-transparent min-h-[auto] min-w-[auto] w-full md:w-auto">
                    <div className="relative items-center box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 w-full z-[1]">
                      <div className="text-zinc-50 text-base font-bold box-border caret-transparent tracking-[0.32px] leading-[19.2px] min-h-[auto] min-w-[auto]">
                        Book a Call
                      </div>
                      <img
                        src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67adba6a3ab018a0349e2bc2_CTA Arrow (2).svg"
                        alt=""
                        className="box-border caret-transparent h-7 max-w-7 min-h-[auto] min-w-[auto] object-contain w-full md:h-6 md:max-w-6"
                      />
                    </div>
                  </div>
                  <img
                    src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/672a7a8e3a6aba070d15d4c0_Star 6.avif"
                    alt=""
                    className="absolute box-border caret-transparent max-w-full right-[0%] top-[0%]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
