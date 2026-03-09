import { TestimonialCarousel } from "@/sections/TestimonialsSection/components/TestimonialCarousel";

export const TestimonialsSection = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="bg-zinc-50 box-border caret-transparent">
        <div className="box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-14 md:gap-y-14">
              <div className="items-end box-border caret-transparent gap-x-4 grid auto-cols-[1fr] grid-cols-[1.5fr_1fr] grid-rows-[auto] justify-items-stretch min-h-[auto] min-w-[auto] gap-y-4">
                <div className="box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4">
                  <div className="box-border caret-transparent flex min-h-[auto] min-w-[auto]">
                    <div className="text-green-700 box-border caret-transparent min-h-[auto] min-w-[auto] border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
                      <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                        Client Stories
                      </div>
                    </div>
                  </div>
                  <h2 className="text-neutral-950 text-[28px] font-bold box-border caret-transparent leading-[33.6px] min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                    Success{" "}
                    <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                      Stories
                    </em>
                    <br className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]" />
                    That{" "}
                    <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                      Inspire Us
                    </em>
                  </h2>
                </div>
              </div>
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                <div
                  role="list"
                  className="box-border caret-transparent gap-x-4 flex gap-y-4 translate-x-[-816px] md:gap-x-8 md:gap-y-8"
                >
                  <TestimonialCarousel
                    ariaLabel="1 / 10"
                    clientImageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db83d7e2ef5cee4c7c64ad_Client_Sofia Gouveia_916.avif"
                    clientImageAlt=""
                    iconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-9.svg"
                    iconAlt="Icon"
                    logoUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68dcdfc38248b93d8a3fe1ed_Logo_Esdiac_mono.svg"
                    logoAlt=""
                    testimonialText="Working with Design Monks on our ESDIAC app and group websites was an excellent experience. They were patient, attentive to feedback, and delivered clean, consistent, high-quality work. We’re proud of the results and happy to continue our long-term partnership with them."
                    clientName="Sofia Gouveia"
                    clientTitle="Design Director @ Esdiac"
                  />
                  <TestimonialCarousel
                    ariaLabel="2 / 10"
                    clientImageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db86d8ef94ad655fb9fd01_Client_Austin_916.avif"
                    clientImageAlt=""
                    iconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-9.svg"
                    iconAlt="Icon"
                    logoUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db9056e42ba9fd6c172833_Logo_Clarity_mono.svg"
                    logoAlt=""
                    testimonialText="I’ve worked with Design Monks on three websites, and they’ve been nothing but exceptional. Their design is top-notch, development is reliable, and communication is always smooth. They quickly act on feedback and deliver exactly what I need. For me, they’re a 10/10 partner for all things design and development."
                    clientName="Austin"
                    clientTitle="CEO @ Clarity LLC"
                  />
                  <TestimonialCarousel
                    ariaLabel="3 / 10"
                    clientImageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/697c78b3798750901911bb75_Client_Anika _916.avif"
                    clientImageAlt=""
                    iconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-9.svg"
                    iconAlt="Icon"
                    logoUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/697b6e3416493b65e726d165_Logo_Coinpulse_ mono.svg"
                    logoAlt=""
                    testimonialText="Design Monks is a professional, reliable partner for end-to-end product builds. From clean, modern designs to seamless development with Dev Monks, they exceeded my expectations. I couldn’t be happier with the collaboration!"
                    clientName="Anika"
                    clientTitle="Founder @ Coinpulse"
                  />
                  <TestimonialCarousel
                    ariaLabel="4 / 10"
                    clientImageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6972023ccec47fa8734cf934_Client_Armen Avagyan _916.avif"
                    clientImageAlt=""
                    iconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-9.svg"
                    iconAlt="Icon"
                    logoUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/69720678ee0f40386f6b4992_Logo_Fraus_mono.svg"
                    logoAlt=""
                    testimonialText="Working with Design Monks was a great experience. They translated our business goals into clean, aesthetic designs with total transparency. The process was fast and stress-free, even in the complex cybersecurity space. They are a patient, committed, and highly recommended design partner."
                    clientName="Armen Avagyan"
                    clientTitle="CEO & Co Founder @ Fraus"
                  />
                  <TestimonialCarousel
                    ariaLabel="5 / 10"
                    clientImageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68e64d2785cf3cb4d1e5bcc1_Client_Dilicio_916.avif"
                    clientImageAlt=""
                    iconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-9.svg"
                    iconAlt="Icon"
                    logoUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef94ab9e4ca1123be230_Logo_Dlicio_mono.svg"
                    logoAlt=""
                    testimonialText="Big shoutout to the Design Monks team. They brought our vision to life both visually and strategically. They nailed the balance between clean design and real business results, and their transparency and responsiveness made everything smooth. The unlimited revisions gave us real peace of mind. "
                    clientName="Victor Okon"
                    clientTitle="COO & Co-founder @ Dlicio"
                  />
                  <TestimonialCarousel
                    ariaLabel="6 / 10"
                    clientImageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68c27038f25d2ac850921b7e_Client_LeKlub_reel.avif"
                    clientImageAlt=""
                    iconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-9.svg"
                    iconAlt="Icon"
                    logoUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f091d389d8df99129c17_Logo_leklub_mono.svg"
                    logoAlt=""
                    testimonialText="Had an amazing experience with Design Monks. Their talented team understood my vision and turned it into stunning visuals,with their impressive attention to detail skills. I highly recommend their high-quality design services."
                    clientName="Neil Saidi"
                    clientTitle="Founder @ LeKlub"
                  />
                  <TestimonialCarousel
                    ariaLabel="7 / 10"
                    clientImageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/69a044959b8bba79e7629219_Client_Tanmee _916.avif"
                    clientImageAlt=""
                    iconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-9.svg"
                    iconAlt="Icon"
                    logoUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef0413f8918ac5356de1_Logo_carbobon_mono.svg"
                    logoAlt=""
                    testimonialText="Fantastic experience working with Design Monks. They did more homework than I expected and actually studied details related to a whole new industry to iterate designs. Super professional, sleek, and fresh design output."
                    clientName="Rifah Tasfia"
                    clientTitle="Product Consultant @ Carbobon"
                  />
                  <TestimonialCarousel
                    ariaLabel="8 / 10"
                    clientImageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68e51a2880009d309ccf8a30_Client_Jahnobi_916.avif"
                    clientImageAlt=""
                    iconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-9.svg"
                    iconAlt="Icon"
                    logoUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/688656b4cb56ce5a1e817819_Logo_Relaxy_mono.svg"
                    logoAlt=""
                    testimonialText="Design Monks felt like part of our own team. They understood our vision, built a scalable UX we still use, and made the whole process easy. If you want more than just good looks, go with Design Monks."
                    clientName="Jahnnobi Rahman"
                    clientTitle="CEO & Founder @ Relaxy"
                  />
                  <TestimonialCarousel
                    ariaLabel="9 / 10"
                    clientImageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68c27001524a8683f8f0aff1_Client_Klasio_reel.avif"
                    clientImageAlt=""
                    iconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-9.svg"
                    iconAlt="Icon"
                    logoUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f07d9c093fad609a26bb_Logo_klasio_mono.svg"
                    logoAlt=""
                    testimonialText="Thanks to Design Monks for building a world-class website that captured our vision and helped us land customers from day one. They went beyond design, researching trends and bringing great ideas, all while staying responsive and on time. Highly recommended!"
                    clientName="Emran Hasan"
                    clientTitle="CEO & Co Founder @ Klasio"
                  />
                  <TestimonialCarousel
                    ariaLabel="10 / 10"
                    clientImageUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db8732b22da6b432112dce_Client_Moshiur Rahman Radif_916.avif"
                    clientImageAlt=""
                    iconUrl="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-9.svg"
                    iconAlt="Icon"
                    logoUrl="https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f13ec2ad5470f81a0156_Logo_ontik_mono.svg"
                    logoAlt=""
                    testimonialText="We’ve worked with Design Monks for over 2 years on 10+ projects, and the experience has been outstanding. They deliver with precision, provide clear documentation, and make the whole process smooth and worry-free. With them, our design is always in safe hands."
                    clientName="Moshiur Rahman Radif"
                    clientTitle="COO @ Ontik Technologies"
                  />
                </div>
                <span className="box-border caret-transparent"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
