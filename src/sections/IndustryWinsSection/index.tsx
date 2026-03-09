import { ProjectCard } from "@/sections/IndustryWinsSection/components/ProjectCard";

export const IndustryWinsSection = () => {
  return (
    <section className="relative bg-zinc-50 box-border caret-transparent h-full z-10 -mt-10 rounded-t-[20px] md:rounded-t-[32px]">
      <div className="box-border caret-transparent py-[60px] md:py-[100px]">
        <div className="box-border caret-transparent z-[1] px-5 md:px-[94px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full mx-auto">
            <div className="sticky box-border caret-transparent">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent flex justify-start mb-2">
                  <div className="text-green-700 box-border caret-transparent min-h-[auto] min-w-[auto] border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
                    <div className="text-sm box-border caret-transparent tracking-[0.32px] leading-[21px] capitalize md:text-base md:leading-6">
                      Industry Wins
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent max-w-[420px] mb-8 md:mb-14">
                  <h2 className="text-[28px] font-bold box-border caret-transparent leading-[33.6px] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                    Proven Success in{" "}
                    <span className="text-[28px] italic box-border caret-transparent inline-block leading-[33.6px] font-playfairdisplay_variablefont_wght md:text-5xl md:inline md:leading-[57.6px]">
                      Every Industry
                    </span>
                  </h2>
                </div>
              </div>
              <div className="relative box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-20 md:gap-y-20">
                <ProjectCard
                  href="https://www.designmonks.co/projects/triply-plan-book-travel"
                  linkClassName="bg-indigo-200 p-4 top-[100px]"
                  category="Travel"
                  title="Easy Booking for Dream Trips"
                  description="Triply is a hassle-free & effective tour solution for travelers. It's an all-inclusive booking and planning website that helps people make their dream trips easier."
                  stat1Label="Pages in Projects"
                  stat1Value="40+"
                  stat2Label="Retention Growth"
                  stat2Value="36%"
                  testimonialBgColor="bg-indigo-300"
                  testimonialImageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67bfffa4c7cf7ce8c1000112_Zantrik.avif"
                  testimonialImageAlt=""
                  testimonialName="Shubho Al-Faroque"
                  testimonialTitle="Triply CEO"
                  projectImageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67ac7758594e31e0312a925f_e0482580c600f74a17f23e4f9a90e82e_1.avif"
                  projectImageAlt=""
                  mobileTestimonialBgColor="bg-indigo-300"
                />
                <ProjectCard
                  href="https://www.designmonks.co/projects/food-ordering-mobile-app-design"
                  linkClassName="bg-rose-300 z-[3] pl-5 pr-4 py-4 rounded-2xl top-40"
                  category="Restaurant"
                  title="Transform Your Dining"
                  description="At Plate, we bring you a handpicked selection of premium restaurants that offer not just meals, but memorable dining experiences, you'll cherish."
                  stat1Label="Location"
                  stat1Value="France"
                  stat2Label="Project Duration"
                  stat2Value="5 Months"
                  testimonialBgColor="bg-rose-400"
                  testimonialImageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67bfffa4bb3423877d7e9573_Klub.avif"
                  testimonialImageAlt="Restaurant website Design"
                  testimonialName="Neil Saidi"
                  testimonialTitle="Plate CEO"
                  projectImageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67ac7759bb3dd367d1496be0_7bc437d91a35f0cfd064cdc379817e74_2.avif"
                  projectImageAlt=""
                  mobileTestimonialBgColor="bg-rose-400"
                />
                <ProjectCard
                  href="https://www.designmonks.co/projects/navigating-the-future-of-distributed-energy-systems"
                  linkClassName="bg-orange-200 z-[4] p-4 top-[216px]"
                  category="SaaS"
                  title="Reducing Carbon Footprints"
                  description="Yenex is a smart and sustainable energy platform. It empowers users with distributed energy solutions to reduce carbon footprints effortlessly."
                  stat1Label="Project timeline"
                  stat1Value="2.5 Months"
                  stat2Label="Customer Acquisition"
                  stat2Value="40%"
                  testimonialBgColor="bg-amber-300"
                  testimonialImageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67bfffa4029650aa984d4193_Yenex.avif"
                  testimonialImageAlt=""
                  testimonialName="Ted Nash"
                  testimonialTitle="Yenex CEO"
                  projectImageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67ac7758837d0dffb8e32f63_137e4404fe981fb7e0f2f0db1f9ec8e1_3.avif"
                  projectImageAlt=""
                  mobileTestimonialBgColor="bg-amber-300"
                />
                <ProjectCard
                  href="https://www.designmonks.co/projects/enhancing-fitness-for-australians"
                  linkClassName="bg-cyan-200 z-[5] p-4 top-[272px]"
                  category="Healthcare"
                  title="Revolutionize Fitness Goals"
                  description="Fitmate transforms fitness in Australia with flexible gym access, personalized schedules, and AI-driven insights to solve common workout limitations for users."
                  stat1Label="Project scope"
                  stat1Value="Mobile App"
                  stat2Label="Project Duration"
                  stat2Value="2 Months"
                  testimonialBgColor="bg-cyan-300"
                  testimonialImageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67326b39a997e70f0c610c88_Photo (1).avif"
                  testimonialImageAlt=""
                  testimonialName="Omar"
                  testimonialTitle="Fitmate CEO"
                  projectImageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67ac775942997040149279e4_4e1a024419bc26a83fde290b2ebc5fcf_4.avif"
                  projectImageAlt=""
                  mobileTestimonialBgColor="bg-cyan-300 md:bg-lime-300"
                />
                <ProjectCard
                  href="https://www.designmonks.co/projects/zantrik-intuitive-vehicle-management-solution"
                  linkClassName="bg-teal-100 top-[-28.8px] z-[7] p-4"
                  category="Vehicle Maintenance Platform"
                  title="Simplifying Vehicle Care"
                  description="Zantrik is an innovative vehicle maintenance app. We revamped it with a fresh design, gamification, and intuitive features to boost user engagement."
                  stat1Label="Project Duration"
                  stat1Value="8 Weeks"
                  stat2Label="Work Scope"
                  stat2Value="Mobile App"
                  testimonialBgColor="bg-teal-300"
                  testimonialImageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67bfffa4c7cf7ce8c1000112_Zantrik.avif"
                  testimonialImageAlt=""
                  testimonialName="Shubho Al-Farooque"
                  testimonialTitle="Zantrik CEO"
                  projectImageUrl="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67ac7758b9d04d9f75e7bc48_0f92202ed3fd271cc358161c2617e175_5.avif"
                  projectImageAlt=""
                  mobileTestimonialBgColor="bg-teal-300 md:bg-violet-200"
                />
              </div>
              <div className="relative items-center box-border caret-transparent flex justify-center mt-10 md:mt-[60px]">
                <a
                  href="https://www.designmonks.co/projects"
                  className="relative text-violet-600 items-center bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] shadow-[rgba(255,255,255,0.72)_0px_1.6px_3px_0px_inset] box-border caret-transparent flex flex-col h-14 justify-center max-w-full min-h-[auto] min-w-[auto] text-left w-full z-10 overflow-hidden rounded-lg md:max-w-[207px]"
                >
                  <div className="absolute items-center bg-neutral-400 box-border caret-transparent flex h-full justify-center w-full inset-[0%]">
                    <div className="absolute bg-[linear-gradient(90deg,rgba(255,255,255,0.79)_61%,rgb(255,255,255)_75%)] box-border caret-transparent blur-[6px] h-20 translate-y-[-50.0%] w-full left-2/4 right-[0%] top-2/4 bottom-[0%]"></div>
                  </div>
                  <div className="absolute bg-[linear-gradient(rgb(89,45,181)_25%,rgb(125,64,255))] box-border caret-transparent rounded-lg inset-[0%]"></div>
                  <div className="relative text-gray-200 box-border caret-transparent min-h-[auto] min-w-[auto] w-full md:w-auto">
                    <div className="relative items-center box-border caret-transparent gap-x-2 flex h-full justify-center gap-y-2 w-full z-[1]">
                      <div className="text-zinc-50 text-base font-bold box-border caret-transparent tracking-[0.32px] leading-[19.2px] min-h-[auto] min-w-[auto]">
                        See All Projects
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
