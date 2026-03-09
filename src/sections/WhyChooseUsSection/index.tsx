import { FeatureCard } from "@/sections/WhyChooseUsSection/components/FeatureCard";

export const WhyChooseUsSection = () => {
  return (
    <div className="bg-[url('https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/680d7d95ce9dda385ee1093b_Background%20Dots.png')] box-border caret-transparent bg-center">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-14 md:gap-y-14">
                <div className="box-border caret-transparent max-w-[700px] min-h-[auto] min-w-[auto]">
                  <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
                    <div className="box-border caret-transparent flex min-h-[auto] min-w-[auto]">
                      <div className="text-green-700 box-border caret-transparent min-h-[auto] min-w-[auto] border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
                        <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                          Why Choose Us
                          <br className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6" />
                        </div>
                      </div>
                    </div>
                    <div className="text-neutral-950 box-border caret-transparent min-h-[auto] min-w-[auto]">
                      <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                        We{" "}
                        <span className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                          Design
                        </span>
                        for the{" "}
                        <span className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                          Future
                        </span>
                        to Drive Today’s{" "}
                        <span className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                          Success
                        </span>
                        <br className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]" />
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent gap-x-4 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] min-h-[auto] min-w-[auto] gap-y-4 w-full md:gap-x-8 md:grid-cols-[1fr_1fr] md:grid-rows-[auto_auto] md:gap-y-8">
                  <FeatureCard
                    imageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67bbf4557f15dfc01f0bbe24_Infinity.avif"
                    imageAlt=""
                    imageHeightClass="h-[47px]"
                    imageMaxWidthClass="max-w-[93px]"
                    imageMdHeightClass="md:h-[68px]"
                    imageMdMaxWidthClass="md:max-w-[133px]"
                    title="Unlimited Revisions"
                    description="We’re committed to your satisfaction with unlimited revisions at every step. Our mission is to make your vision come to life exactly as you imagine."
                  />
                  <FeatureCard
                    imageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67bbf455cd6e05ec201e5e82_Profile.avif"
                    imageAlt=""
                    imageAspectClass="aspect-[auto_59_/_57]"
                    imageHeightClass="h-[57px]"
                    imageMaxWidthClass="max-w-[59px]"
                    imageMdHeightClass="md:h-[68px]"
                    imageMdMaxWidthClass="md:max-w-[70px]"
                    title="Lifetime Support"
                    description="With our lifetime support, you’re never alone. We’ll be there for you at every stage with necessary guidance and assistance whenever you need it."
                  />
                  <div className="box-border caret-transparent gap-x-4 grid auto-cols-[1fr] col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] grid-cols-[1fr] grid-rows-[auto] min-h-[auto] min-w-[auto] gap-y-4 md:gap-x-8 md:col-end-[span_2] md:col-start-[span_2] md:grid-cols-[1fr_1fr_1fr] md:gap-y-8">
                    <FeatureCard
                      imageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67bbf455bde8347a515f5d6c_Dollar.avif"
                      imageAlt=""
                      imageAspectClass="aspect-[auto_47_/_67]"
                      imageHeightClass="h-[67px]"
                      imageMaxWidthClass="max-w-[47px]"
                      imageMdHeightClass="md:h-[84px]"
                      imageMdMaxWidthClass="md:max-w-[60px]"
                      title="Personalised Plans"
                      description="Get top-quality service without breaking the bank. Our rates are designed to fit your budget so that you can get the best value for your investment."
                    />
                    <FeatureCard
                      imageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67bbf455657afc36ca73f802_diagram.avif"
                      imageAlt=""
                      imageAspectClass="aspect-[auto_57_/_57]"
                      imageHeightClass="h-[57px]"
                      imageMaxWidthClass="max-w-[57px]"
                      imageMdHeightClass="md:h-[81px]"
                      imageMdMaxWidthClass="md:max-w-[81px]"
                      title="Custom Design Solutions"
                      description="Our easy payment options are completely flexible. So, you can invest in your success while staying within your budget."
                    />
                    <FeatureCard
                      imageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67bbf455f7d2b364987895ff_star.avif"
                      imageAlt=""
                      imageAspectClass="aspect-[auto_57_/_56]"
                      imageHeightClass="h-14"
                      imageMaxWidthClass="w-[57px]"
                      imageMdHeightClass="md:h-20"
                      imageMdMaxWidthClass="md:w-[81px]"
                      title="24/7 Customer Support"
                      description="Benefit from the expertise of our carefully chosen resources that are designed to make your journey smooth and effortless with outstanding results."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
