import { PricingCard } from "@/sections/PricingSection/components/PricingCard";
import { BonusSection } from "@/sections/PricingSection/components/BonusSection";

export const PricingSection = () => {
  return (
    <div className="relative bg-neutral-950 box-border caret-transparent mt-[60px] rounded-[20px] md:mt-[100px] md:rounded-[32px]">
      <div className="relative box-border caret-transparent overflow-clip rounded-[20px] md:rounded-[32px]">
        <div className="box-border caret-transparent">
          <div className="bg-neutral-950 box-border caret-transparent">
            <div className="relative box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
              <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-14 md:gap-y-14">
                    <div className="box-border caret-transparent gap-x-8 flex flex-col min-h-[auto] min-w-[auto] gap-y-8 md:gap-x-14 md:gap-y-14">
                      <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-4 text-center">
                        <div className="box-border caret-transparent flex min-h-[auto] min-w-[auto]">
                          <div className="text-green-500 box-border caret-transparent min-h-[auto] min-w-[auto] border border-green-800 px-3 py-1 rounded-3xl border-solid">
                            <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                              Pricing plans
                            </div>
                          </div>
                        </div>
                        <div className="text-zinc-50 box-border caret-transparent min-h-[auto] min-w-[auto]">
                          <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                            <span className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                              Unbeatable{" "}
                            </span>
                            Value
                            <br className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]" />
                            Unmatched{" "}
                            <span className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                              Quality
                            </span>
                          </h2>
                        </div>
                      </div>
                      <div className="items-center box-border caret-transparent gap-x-4 flex flex-col auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] h-full min-h-[auto] min-w-[auto] gap-y-4 mt-9 md:gap-x-8 md:flex-row md:grid-cols-[1fr_1fr_1fr] md:h-auto md:gap-y-8 md:mt-14">
                        <PricingCard
                          price="$1,800"
                          subtitle="Ideal for Startup Owners, MVP Builders"
                          title="Website Design"
                          features={[
                            { text: "Design Style Guide" },
                            { text: "Responsive across all devices" },
                            { text: "Unlimited Revisions" },
                            { text: "Developer Handoff" },
                          ]}
                          exploreMoreUrl="https://www.designmonks.co/pricing#website/1-4pages"
                          variant=""
                        />
                        <PricingCard
                          price="$3,500"
                          subtitle="For SaaS & fast MVP launches."
                          title="Web/Mobile App Design"
                          features={[
                            { text: "UX Research" },
                            { text: "Design System with token" },
                            { text: "Unlimited Revisions" },
                            { text: "Developer handoff" },
                            { text: "Transparent communication" },
                            { text: "Responsive across all devices" },
                          ]}
                          exploreMoreUrl="https://www.designmonks.co/pricing#webapp/1-10pages"
                          variant="featured"
                          showDecorations={true}
                        />
                        <PricingCard
                          price="$3,800+"
                          subtitle="Ideal for Startup or MVP "
                          title="Monthly Subscription"
                          features={[
                            { text: "Monthly dedicated designers" },
                            { text: "Adhoc design support" },
                            { text: "Right designer for right product" },
                            { text: "Transparent communication" },
                          ]}
                          exploreMoreUrl="https://www.designmonks.co/pricing#subscription/monthly"
                          variant=""
                        />
                      </div>
                    </div>
                    <BonusSection />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[-220px] box-border caret-transparent hidden pointer-events-none right-0 md:block">
                <img
                  src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/680db6f4d3c0ca2155a5e42a_dab5b3b75db9828aff43984dd8f15ca5_19.avif"
                  alt=""
                  className="box-border caret-transparent inline-block max-w-full"
                />
              </div>
            </div>
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
                      <div className="relative bg-[linear-gradient(183deg,rgb(235,248,252),rgb(127,184,239)_30%,rgb(81,66,241)_62%,rgb(29,29,41))] box-border caret-transparent min-h-[auto] min-w-[884px] w-full overflow-hidden p-[1.5px] rounded-[32px] md:min-w-[1252px]">
                        <div className="items-center bg-neutral-950 bg-[linear-gradient(202deg,rgba(87,27,210,0.2),rgba(10,10,10,0.2))] shadow-[rgba(23,11,38,0.1)_0px_16px_24px_0px,rgba(255,255,255,0.09)_0px_8px_24px_0px_inset] box-border caret-transparent gap-x-0 grid auto-cols-[1fr] grid-cols-[1.75fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] min-w-[884px] gap-y-0 w-full px-10 py-[30px] rounded-[32px] md:grid-cols-[3.5fr_1fr_1fr_1fr_1fr_1fr] md:min-w-[1249px] md:py-6">
                          <div className="items-center box-border caret-transparent gap-x-6 flex col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] justify-start min-h-[auto] min-w-[auto] md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto">
                            <div className="items-center bg-violet-600 box-border caret-transparent hidden justify-center max-h-[85px] max-w-[85px] min-h-[85px] min-w-[85px] rounded-[10px] md:flex">
                              <img
                                src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-18.svg"
                                alt="Icon"
                                className="text-white box-border caret-transparent inline align-baseline w-8 md:block"
                              />
                            </div>
                            <div className="text-zinc-50 box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] gap-y-2">
                              <h3 className="text-xl font-bold box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
                                Design Monks
                              </h3>
                              <div className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
                                <div className="text-neutral-300 box-border caret-transparent">
                                  <div className="text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                                    Expert-driven &amp; committed to higher
                                    quality. Get effective result &amp; full
                                    support without hiring in-house employees
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
                            <div className="text-zinc-50 box-border caret-transparent flex min-h-[auto] min-w-[auto] w-6 md:w-10">
                              <img
                                src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-19.svg"
                                alt="Icon"
                                className="box-border caret-transparent align-baseline w-full"
                              />
                            </div>
                          </div>
                          <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
                            <div className="text-zinc-50 box-border caret-transparent flex min-h-[auto] min-w-[auto] w-6 md:w-10">
                              <img
                                src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-19.svg"
                                alt="Icon"
                                className="box-border caret-transparent align-baseline w-full"
                              />
                            </div>
                          </div>
                          <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
                            <div className="text-zinc-50 box-border caret-transparent flex min-h-[auto] min-w-[auto] w-6 md:w-10">
                              <img
                                src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-19.svg"
                                alt="Icon"
                                className="box-border caret-transparent align-baseline w-full"
                              />
                            </div>
                          </div>
                          <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
                            <div className="text-zinc-50 box-border caret-transparent flex min-h-[auto] min-w-[auto] w-6 md:w-10">
                              <img
                                src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-19.svg"
                                alt="Icon"
                                className="box-border caret-transparent align-baseline w-full"
                              />
                            </div>
                          </div>
                          <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
                            <div className="text-zinc-50 box-border caret-transparent flex min-h-[auto] min-w-[auto] w-6 md:w-10">
                              <img
                                src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-19.svg"
                                alt="Icon"
                                className="box-border caret-transparent align-baseline w-full"
                              />
                            </div>
                          </div>
                        </div>
                        <img
                          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/681244ac644e26ebc70402b7_Ellipse 11.avif"
                          alt=""
                          className="absolute box-border caret-transparent max-w-full right-[0%] top-[0%]"
                        />
                        <img
                          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68124543eaad0129fcf9956e_Ellipse 13.avif"
                          alt=""
                          className="absolute box-border caret-transparent max-w-full left-[0%] bottom-[0%]"
                        />
                      </div>
                      <div className="items-center border-b-neutral-600/50 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent gap-x-0 grid auto-cols-[1fr] grid-cols-[1.75fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] min-h-[auto] min-w-[884px] gap-y-0 w-full pb-6 px-10 border-b md:grid-cols-[3.5fr_1fr_1fr_1fr_1fr_1fr] md:min-w-[1249px]">
                        <div className="items-center box-border caret-transparent gap-x-6 flex col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] justify-start min-h-[auto] min-w-[auto] md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto">
                          <div className="items-center bg-blue-600/30 box-border caret-transparent hidden justify-center max-h-[85px] max-w-[85px] min-h-[85px] min-w-[85px] rounded-[10px] md:flex">
                            <img
                              src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-20.svg"
                              alt="Icon"
                              className="text-white box-border caret-transparent inline align-baseline w-8 md:block"
                            />
                          </div>
                          <div className="text-zinc-50 box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] gap-y-2">
                            <h3 className="text-xl font-bold box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
                              In House Team
                            </h3>
                            <div className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
                              <div className="box-border caret-transparent hidden md:block">
                                <div className="text-neutral-300 box-border caret-transparent">
                                  <div className="text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                                    A full-time designer may ensure brand
                                    consistency, but there’s a risk of limited
                                    expertise even though you pay regularly
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
                          <img
                            src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-21.svg"
                            alt="Icon"
                            className="text-red-500 box-border caret-transparent align-baseline w-6 md:w-10"
                          />
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
                          <img
                            src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-21.svg"
                            alt="Icon"
                            className="text-red-500 box-border caret-transparent align-baseline w-6 md:w-10"
                          />
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
                          <img
                            src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-21.svg"
                            alt="Icon"
                            className="text-red-500 box-border caret-transparent align-baseline w-6 md:w-10"
                          />
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
                          <div className="text-zinc-50 box-border caret-transparent flex min-h-[auto] min-w-[auto] w-6 md:w-10">
                            <img
                              src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-19.svg"
                              alt="Icon"
                              className="box-border caret-transparent align-baseline w-full"
                            />
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
                          <img
                            src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-21.svg"
                            alt="Icon"
                            className="text-red-500 box-border caret-transparent align-baseline w-6 md:w-10"
                          />
                        </div>
                      </div>
                      <div className="items-center border-b-neutral-600/50 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent gap-x-0 grid auto-cols-[1fr] grid-cols-[1.75fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] min-h-[auto] min-w-[884px] gap-y-0 w-full pb-6 px-10 border-b md:grid-cols-[3.5fr_1fr_1fr_1fr_1fr_1fr] md:min-w-[1249px]">
                        <div className="items-center box-border caret-transparent gap-x-6 flex col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] justify-start min-h-[auto] min-w-[auto] md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto">
                          <div className="items-center bg-blue-600/30 box-border caret-transparent hidden justify-center max-h-[85px] max-w-[85px] min-h-[85px] min-w-[85px] rounded-[10px] md:flex">
                            <img
                              src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-22.svg"
                              alt="Icon"
                              className="text-white box-border caret-transparent inline align-baseline w-8 md:block"
                            />
                          </div>
                          <div className="text-zinc-50 box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] gap-y-2">
                            <h3 className="text-xl font-bold box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
                              Creative Agencies
                            </h3>
                            <div className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
                              <div className="text-neutral-300 box-border caret-transparent">
                                <div className="text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                                  Agencies offer structured processes but mostly
                                  with high costs, long timelines, and less
                                  flexibility for your projects
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
                          <img
                            src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-21.svg"
                            alt="Icon"
                            className="text-red-500 box-border caret-transparent align-baseline w-6 md:w-10"
                          />
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
                          <img
                            src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-21.svg"
                            alt="Icon"
                            className="text-red-500 box-border caret-transparent align-baseline w-6 md:w-10"
                          />
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
                          <div className="text-zinc-50 box-border caret-transparent flex min-h-[auto] min-w-[auto] w-6 md:w-10">
                            <img
                              src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-19.svg"
                              alt="Icon"
                              className="box-border caret-transparent align-baseline w-full"
                            />
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
                          <div className="text-zinc-50 box-border caret-transparent flex min-h-[auto] min-w-[auto] w-6 md:w-10">
                            <img
                              src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-19.svg"
                              alt="Icon"
                              className="box-border caret-transparent align-baseline w-full"
                            />
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
                          <img
                            src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-21.svg"
                            alt="Icon"
                            className="text-red-500 box-border caret-transparent align-baseline w-6 md:w-10"
                          />
                        </div>
                      </div>
                      <div className="items-center border-b-neutral-600/50 border-l-zinc-800 border-r-zinc-800 border-t-zinc-800 box-border caret-transparent gap-x-0 grid auto-cols-[1fr] grid-cols-[1.75fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] min-h-[auto] min-w-[884px] gap-y-0 w-full pb-6 px-10 border-b md:grid-cols-[3.5fr_1fr_1fr_1fr_1fr_1fr] md:min-w-[1249px]">
                        <div className="items-center box-border caret-transparent gap-x-6 flex col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] justify-start min-h-[auto] min-w-[auto] md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto">
                          <div className="items-center bg-blue-600/30 box-border caret-transparent hidden justify-center max-h-[85px] max-w-[85px] min-h-[85px] min-w-[85px] rounded-[10px] md:flex">
                            <img
                              src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-23.svg"
                              alt="Icon"
                              className="text-white box-border caret-transparent inline align-baseline w-8 md:block"
                            />
                          </div>
                          <div className="text-zinc-50 box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] gap-y-2">
                            <h3 className="text-xl font-bold box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
                              Freelancers
                            </h3>
                            <div className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
                              <div className="text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                                Freelancers may provide affordable design
                                services but they mostly lack consistency,
                                reliability, and collaboration
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
                          <img
                            src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-21.svg"
                            alt="Icon"
                            className="text-red-500 box-border caret-transparent align-baseline w-6 md:w-10"
                          />
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
                          <div className="text-zinc-50 box-border caret-transparent flex min-h-[auto] min-w-[auto] w-6 md:w-10">
                            <img
                              src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-19.svg"
                              alt="Icon"
                              className="box-border caret-transparent align-baseline w-full"
                            />
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
                          <img
                            src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-21.svg"
                            alt="Icon"
                            className="text-red-500 box-border caret-transparent align-baseline w-6 md:w-10"
                          />
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
                          <img
                            src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-21.svg"
                            alt="Icon"
                            className="text-red-500 box-border caret-transparent align-baseline w-6 md:w-10"
                          />
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
                          <div className="text-zinc-50 box-border caret-transparent flex min-h-[auto] min-w-[auto] w-6 md:w-10">
                            <img
                              src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-19.svg"
                              alt="Icon"
                              className="box-border caret-transparent align-baseline w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="items-center box-border caret-transparent gap-x-0 grid auto-cols-[1fr] grid-cols-[1.75fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] min-h-[auto] min-w-[884px] gap-y-0 w-full pb-6 px-10 md:grid-cols-[3.5fr_1fr_1fr_1fr_1fr_1fr] md:min-w-[1249px]">
                        <div className="items-center box-border caret-transparent gap-x-6 flex col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] justify-start min-h-[auto] min-w-[auto] md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto">
                          <div className="items-center bg-blue-600/30 box-border caret-transparent hidden justify-center max-h-[85px] max-w-[85px] min-h-[85px] min-w-[85px] rounded-[10px] md:flex">
                            <img
                              src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-24.svg"
                              alt="Icon"
                              className="text-white box-border caret-transparent inline align-baseline w-8 md:block"
                            />
                          </div>
                          <div className="text-zinc-50 box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] gap-y-2">
                            <h3 className="text-xl font-bold box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
                              Self-Service Tools
                            </h3>
                            <div className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
                              <div className="text-neutral-300 box-border caret-transparent">
                                <div className="text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                                  DIY tools like website builders are
                                  budget-friendly, but you can’t expect
                                  strategic thinking &amp; originality
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
                          <img
                            src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-21.svg"
                            alt="Icon"
                            className="text-red-500 box-border caret-transparent align-baseline w-6 md:w-10"
                          />
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
                          <img
                            src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-21.svg"
                            alt="Icon"
                            className="text-red-500 box-border caret-transparent align-baseline w-6 md:w-10"
                          />
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
                          <div className="text-zinc-50 box-border caret-transparent flex min-h-[auto] min-w-[auto] w-6 md:w-10">
                            <img
                              src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-19.svg"
                              alt="Icon"
                              className="box-border caret-transparent align-baseline w-full"
                            />
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
                          <div className="text-zinc-50 box-border caret-transparent flex min-h-[auto] min-w-[auto] w-6 md:w-10">
                            <img
                              src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-19.svg"
                              alt="Icon"
                              className="box-border caret-transparent align-baseline w-full"
                            />
                          </div>
                        </div>
                        <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
                          <img
                            src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-21.svg"
                            alt="Icon"
                            className="text-red-500 box-border caret-transparent align-baseline w-6 md:w-10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute box-border caret-transparent pointer-events-none w-full top-0">
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6812483c6bde6e720d880757_Shade (1).avif"
            alt=""
            className="box-border caret-transparent inline-block max-w-full"
          />
        </div>
      </div>
      <div className="absolute box-border caret-transparent block overflow-hidden left-1 bottom-[3px] md:hidden">
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67fa4f5fbcba998c365983d4_Cursor.avif"
          alt=""
          className="box-border caret-transparent inline-block max-w-full"
        />
      </div>
    </div>
  );
};
