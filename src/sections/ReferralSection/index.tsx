import { ReferralCarousel } from "@/sections/ReferralSection/components/ReferralCarousel";

export const ReferralSection = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent px-5 py-[60px] md:px-[94px] md:py-[100px]">
          <div className="box-border caret-transparent max-w-[1252px] w-full z-[1] mx-auto">
            <div className="items-center box-border caret-transparent gap-x-8 flex flex-col justify-start gap-y-8 md:gap-x-14 md:gap-y-14">
              <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-4 text-center">
                <div className="box-border caret-transparent flex min-h-[auto] min-w-[auto]">
                  <div className="text-green-700 box-border caret-transparent min-h-[auto] min-w-[auto] border border-emerald-400 px-3 py-1 rounded-3xl border-solid">
                    <div className="text-sm box-border caret-transparent leading-[21px] md:text-base md:leading-6">
                      Referral From People
                    </div>
                  </div>
                </div>
                <h2 className="text-neutral-950 text-[28px] font-bold box-border caret-transparent leading-[33.6px] min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                  Trusted by People
                  <br className="text-[28px] box-border caret-transparent leading-[33.6px] md:text-5xl md:leading-[57.6px]" />
                  <em className="text-[28px] italic box-border caret-transparent leading-[33.6px] capitalize font-playfairdisplay_variablefont_wght md:text-5xl md:leading-[57.6px]">
                    Chosen by Brands
                  </em>
                </h2>
              </div>
              <div className="box-border caret-transparent hidden before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"></div>
              <div className="relative box-border caret-transparent gap-x-4 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto_auto_auto] min-h-[auto] min-w-[auto] gap-y-4 w-full">
                <ReferralCarousel
                  carouselVariant="translate-x-[-974.5px]"
                  testimonials={[
                    {
                      quote:
                        "Thanks to Design Monks for building a world-class website that captured our vision and helped us land customers from day one. They went beyond design, researching trends and bringing great ideas, all while staying responsive and on time. Highly recommended!",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6860efe1964edd477423306a_Client_Klasio.avif",
                      imageAlt: "",
                      name: "Emran Hasan",
                      title: "CEO & Co Founder @ Klasio",
                      ariaLabel: "21 of 22",
                    },
                    {
                      quote:
                        "We’ve worked with Design Monks for over 2 years on 10+ projects, and the experience has been outstanding. They deliver with precision, provide clear documentation, and make the whole process smooth and worry-free. With them, our design is always in safe hands.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db872c298ed3df2fd8ea8a_Client_Moshiur Rahman Radif.avif",
                      imageAlt: "",
                      name: "Moshiur Rahman Radif",
                      title: "COO @ Ontik Technologies",
                      ariaLabel: "22 of 22",
                    },
                    {
                      quote:
                        "Design Monks was a pleasure to work with. They were proactive, and efficient, and never hesitated to challenge me in my assumptions. The design they built for me was beautiful, and I would not hesitate to retain them again in the future",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684befe7696e3ebd23c7a3f7_6841287f022320ba6d4df48a_Client_Jenna.avif",
                      imageAlt: "",
                      name: "Jenna Carvalho",
                      title: "Principal @ Guardian Estate Company",
                      ariaLabel: "1 of 22",
                    },
                    {
                      quote:
                        "I've had the pleasure of collaborating with Design Monks for a while now on my new project. They're lightning-quick in addressing any questions or feedback I have, and they consistently go the extra mile to make sure I'm thrilled with the final outcome. I wholeheartedly endorse them",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bef93fc8165be6c14ecbd_67b790a2c5539dbd6bb9aba7_Yenex (2).avif",
                      imageAlt: "",
                      name: "Ted Nash",
                      title: "Founder & CEO @ Yenex",
                      ariaLabel: "2 of 22",
                    },
                    {
                      quote:
                        "Working with Design Monks on our ESDIAC app and group websites was an excellent experience. They were patient, attentive to feedback, and delivered clean, consistent, high-quality work. We’re proud of the results and happy to continue our long-term partnership with them.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db83d0788461a30fddc0f8_Client_Sofia Gouveia.avif",
                      imageAlt: "",
                      name: "Sofia Gouveia",
                      title: "Design Director @ Esdiac",
                      ariaLabel: "3 of 22",
                    },
                    {
                      quote:
                        "I’ve worked with Design Monks on three websites, and they’ve been nothing but exceptional. Their design is top-notch, development is reliable, and communication is always smooth. They quickly act on feedback and deliver exactly what I need. For me, they’re a 10/10 partner for all things design and development.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db86d30e6ba269e3a20e68_Client_Austin.avif",
                      imageAlt: "",
                      name: "Austin",
                      title: "CEO @ Clarity LLC",
                      ariaLabel: "4 of 22",
                    },
                    {
                      quote:
                        "Working with Design Monks was a great experience. They were responsible, communicative, and delivered excellent design work as per my requirements. I appreciated their flexibility, professionalism, and quick turnaround on feedback. Would happily work together again!",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68527ad3ec7d9727d6040292_Client_voc ai.avif",
                      imageAlt: "",
                      name: "Nora Peng",
                      title: "Marketing Manager @ Voc AI",
                      ariaLabel: "5 of 22",
                    },
                    {
                      quote:
                        "Design Monks is a professional, reliable partner for end-to-end product builds. From clean, modern designs to seamless development with Dev Monks, they exceeded my expectations. I couldn’t be happier with the collaboration!",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/697c78ae153f55d2e85ebf4a_Client_Anika.avif",
                      imageAlt: "",
                      name: "Anika",
                      title: "Founder @ Coinpulse",
                      ariaLabel: "6 of 22",
                    },
                    {
                      quote:
                        "Working with Design Monks was a great experience. They translated our business goals into clean, aesthetic designs with total transparency. The process was fast and stress-free, even in the complex cybersecurity space. They are a patient, committed, and highly recommended design partner.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/69720239a107841275fed266_Client_Armen Avagyan.avif",
                      imageAlt: "",
                      name: "Armen Avagyan",
                      title: "CEO & Co Founder @ Fraus",
                      ariaLabel: "7 of 22",
                    },
                    {
                      quote:
                        "Big shoutout to the Design Monks team. They brought our vision to life both visually and strategically. They nailed the balance between clean design and real business results, and their transparency and responsiveness made everything smooth. The unlimited revisions gave us real peace of mind. ",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68e64d22cdc27ad396f305cc_Client_Dilicio.avif",
                      imageAlt: "",
                      name: "Victor Okon",
                      title: "COO & Co-founder @ Dlicio",
                      ariaLabel: "8 of 22",
                    },
                    {
                      quote:
                        "Working with Design Monks transformed our workflow. Their adherence to guidelines increased efficiency and contributed to business growth. We can now focus more on strategic initiatives and client engagement, thanks to saved hours",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/686646bacaef729d3510e818_Client_Plenty Pay.avif",
                      imageAlt: "",
                      name: "Kunle Adetayo",
                      title: "CEO & Founder @ Plentypay",
                      ariaLabel: "9 of 22",
                    },
                    {
                      quote:
                        "What I love most about Design Monks is how they truly listen to their clients. They guided us through each step, kept us informed, and made sure the final design was exactly what we envisioned. Their after-service support is amazing.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68527ab26336b8b657776f64_Client_Carnesia.avif",
                      imageAlt: "",
                      name: "Shakhawat Hossain",
                      title: "Founder @ Carnesia",
                      ariaLabel: "10 of 22",
                    },
                    {
                      quote:
                        "Had an amazing experience with Design Monks. Their talented team understood my vision and turned it into stunning visuals,with their impressive attention to detail skills. I highly recommend their high-quality design services.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bec308477c331aaafb599_67b790a2e3964135b80d7baa_Klub.avif",
                      imageAlt: "",
                      name: "Neil Saidi",
                      title: "Founder @ LeKlub",
                      ariaLabel: "11 of 22",
                    },
                    {
                      quote:
                        "I've collaborated with Design Monks for a year, and the experience has been truly remarkable. Their team's cooperative nature, combined with their innovative ideas and unwavering effort, has made our partnership a fruitful one.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68527a9ac82c754386d61213_Client_Akij.avif",
                      imageAlt: "",
                      name: "Laiza Lamyea Lia",
                      title: "Marketing Lead @ Akij Group",
                      ariaLabel: "12 of 22",
                    },
                    {
                      quote:
                        "We would like to extend our sincere gratitude to our valued client for the incredible opportunity to redesign the Zantrik App. Your trust in our team and your collaborative spirit have been truly appreciated.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bef356a6eead383e81ce3_67b790a29d1e281fc8d78828_Zantrik.avif",
                      imageAlt: "",
                      name: "Shuvo Al faruque",
                      title: "Founder & CEO @ Zantrik",
                      ariaLabel: "13 of 22",
                    },
                    {
                      quote:
                        "Design Monks delivered exactly as promised transparent, professional, and always prompt. Even with political disruptions affecting internet access they stayed on track and delivered on time, incorporating all our feedback. Would work with them again!",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bfc407bc73054444faba8_Client_Sitewise.avif",
                      imageAlt: "",
                      name: "Vimal Bhaya",
                      title: "Founder @ Renergy Technologies",
                      ariaLabel: "14 of 22",
                    },
                    {
                      quote:
                        "Fantastic experience working with Design Monks. They did more homework than I expected and actually studied details related to a whole new industry to iterate designs. Super professional, sleek, and fresh design output.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/69a044919acacd3897f9bb2d_Client_Tanmee.avif",
                      imageAlt: "",
                      name: "Rifah Tasfia",
                      title: "Product Consultant @ Carbobon",
                      ariaLabel: "15 of 22",
                    },
                    {
                      quote:
                        "Amazing experience! The Design Monks team is experienced, diligent, and follows a solid process from research to design. They handled our redesign and user feedback perfectly. Truly a standout team in globally.\n",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bfce0c577de4ae7895279_Client_Onethread.avif",
                      imageAlt: "",
                      name: "Erfanul Hoque",
                      title: "Founder @ Renergy Technologies",
                      ariaLabel: "16 of 22",
                    },
                    {
                      quote:
                        "We received the design on time and had a great experience working with Design Monks. Their team demonstrated exceptional efficiency and delivered high-quality designs with great attention to detail",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bfd22a100257a65958a6a_Client_Skillophy.avif",
                      imageAlt: "",
                      name: "Golam Rabby",
                      title: "Founder @ Skillophy",
                      ariaLabel: "17 of 22",
                    },
                    {
                      quote:
                        "Design Monks delivered beautiful, functional UX that truly drove business results. Their expert team blends aesthetics with real business value, boosting our user engagement and growth. Highly recommended!",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bfdfba59d24464bbbd7d3_Client_Affine.avif",
                      imageAlt: "",
                      name: "Fahim Aziz",
                      title: "Founder @ Backpack (YC), Affine, AlpineX",
                      ariaLabel: "18 of 22",
                    },
                    {
                      quote:
                        "We used Design Monks for two projects and he was reliable and creative. His design solutions worked well for what we needed and he helped create a good theme/style for our websites. I would recommend.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bfe5a1dc0c4a63566d47a_Client_Learndojo.avif",
                      imageAlt: "",
                      name: "Sajan Devshi",
                      title: "Founder @ Learndojo",
                      ariaLabel: "19 of 22",
                    },
                    {
                      quote:
                        "Design Monks felt like part of our own team. They understood our vision, built a scalable UX we still use, and made the whole process easy. If you want more than just good looks, go with Design Monks.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68e51a24ecc4a5210747d172_Client_Jahnobi.avif",
                      imageAlt: "",
                      name: "Jahnnobi Rahman",
                      title: "CEO & Founder @ Relaxy",
                      ariaLabel: "20 of 22",
                    },
                  ]}
                />
                <ReferralCarousel
                  carouselVariant="translate-x-[-689.5px]"
                  testimonials={[
                    {
                      quote:
                        "Had an amazing experience with Design Monks. Their talented team understood my vision and turned it into stunning visuals,with their impressive attention to detail skills. I highly recommend their high-quality design services.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bec308477c331aaafb599_67b790a2e3964135b80d7baa_Klub.avif",
                      imageAlt: "",
                      name: "Neil Saidi",
                      title: "Founder @ LeKlub",
                      ariaLabel: "21 of 22",
                    },
                    {
                      quote:
                        "What I love most about Design Monks is how they truly listen to their clients. They guided us through each step, kept us informed, and made sure the final design was exactly what we envisioned. Their after-service support is amazing.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68527ab26336b8b657776f64_Client_Carnesia.avif",
                      imageAlt: "",
                      name: "Shakhawat Hossain",
                      title: "Founder @ Carnesia",
                      ariaLabel: "22 of 22",
                    },
                    {
                      quote:
                        "Design Monks is a professional, reliable partner for end-to-end product builds. From clean, modern designs to seamless development with Dev Monks, they exceeded my expectations. I couldn’t be happier with the collaboration!",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/697c78ae153f55d2e85ebf4a_Client_Anika.avif",
                      imageAlt: "",
                      name: "Anika",
                      title: "Founder @ Coinpulse",
                      ariaLabel: "1 of 22",
                    },
                    {
                      quote:
                        "Working with Design Monks was a great experience. They translated our business goals into clean, aesthetic designs with total transparency. The process was fast and stress-free, even in the complex cybersecurity space. They are a patient, committed, and highly recommended design partner.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/69720239a107841275fed266_Client_Armen Avagyan.avif",
                      imageAlt: "",
                      name: "Armen Avagyan",
                      title: "CEO & Co Founder @ Fraus",
                      ariaLabel: "2 of 22",
                    },
                    {
                      quote:
                        "We’ve worked with Design Monks for over 2 years on 10+ projects, and the experience has been outstanding. They deliver with precision, provide clear documentation, and make the whole process smooth and worry-free. With them, our design is always in safe hands.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db872c298ed3df2fd8ea8a_Client_Moshiur Rahman Radif.avif",
                      imageAlt: "",
                      name: "Moshiur Rahman Radif",
                      title: "COO @ Ontik Technologies",
                      ariaLabel: "3 of 22",
                    },
                    {
                      quote:
                        "I’ve worked with Design Monks on three websites, and they’ve been nothing but exceptional. Their design is top-notch, development is reliable, and communication is always smooth. They quickly act on feedback and deliver exactly what I need. For me, they’re a 10/10 partner for all things design and development.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db86d30e6ba269e3a20e68_Client_Austin.avif",
                      imageAlt: "",
                      name: "Austin",
                      title: "CEO @ Clarity LLC",
                      ariaLabel: "4 of 22",
                    },
                    {
                      quote:
                        "Working with Design Monks on our ESDIAC app and group websites was an excellent experience. They were patient, attentive to feedback, and delivered clean, consistent, high-quality work. We’re proud of the results and happy to continue our long-term partnership with them.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db83d0788461a30fddc0f8_Client_Sofia Gouveia.avif",
                      imageAlt: "",
                      name: "Sofia Gouveia",
                      title: "Design Director @ Esdiac",
                      ariaLabel: "5 of 22",
                    },
                    {
                      quote:
                        "Working with Design Monks transformed our workflow. Their adherence to guidelines increased efficiency and contributed to business growth. We can now focus more on strategic initiatives and client engagement, thanks to saved hours",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/686646bacaef729d3510e818_Client_Plenty Pay.avif",
                      imageAlt: "",
                      name: "Kunle Adetayo",
                      title: "CEO & Founder @ Plentypay",
                      ariaLabel: "6 of 22",
                    },
                    {
                      quote:
                        "Thanks to Design Monks for building a world-class website that captured our vision and helped us land customers from day one. They went beyond design, researching trends and bringing great ideas, all while staying responsive and on time. Highly recommended!",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6860efe1964edd477423306a_Client_Klasio.avif",
                      imageAlt: "",
                      name: "Emran Hasan",
                      title: "CEO & Co Founder @ Klasio",
                      ariaLabel: "7 of 22",
                    },
                    {
                      quote:
                        "Big shoutout to the Design Monks team. They brought our vision to life both visually and strategically. They nailed the balance between clean design and real business results, and their transparency and responsiveness made everything smooth. The unlimited revisions gave us real peace of mind. ",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68e64d22cdc27ad396f305cc_Client_Dilicio.avif",
                      imageAlt: "",
                      name: "Victor Okon",
                      title: "COO & Co-founder @ Dlicio",
                      ariaLabel: "8 of 22",
                    },
                    {
                      quote:
                        "Design Monks felt like part of our own team. They understood our vision, built a scalable UX we still use, and made the whole process easy. If you want more than just good looks, go with Design Monks.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68e51a24ecc4a5210747d172_Client_Jahnobi.avif",
                      imageAlt: "",
                      name: "Jahnnobi Rahman",
                      title: "CEO & Founder @ Relaxy",
                      ariaLabel: "9 of 22",
                    },
                    {
                      quote:
                        "Working with Design Monks was a great experience. They were responsible, communicative, and delivered excellent design work as per my requirements. I appreciated their flexibility, professionalism, and quick turnaround on feedback. Would happily work together again!",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68527ad3ec7d9727d6040292_Client_voc ai.avif",
                      imageAlt: "",
                      name: "Nora Peng",
                      title: "Marketing Manager @ Voc AI",
                      ariaLabel: "10 of 22",
                    },
                    {
                      quote:
                        "Design Monks was a pleasure to work with. They were proactive, and efficient, and never hesitated to challenge me in my assumptions. The design they built for me was beautiful, and I would not hesitate to retain them again in the future",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684befe7696e3ebd23c7a3f7_6841287f022320ba6d4df48a_Client_Jenna.avif",
                      imageAlt: "",
                      name: "Jenna Carvalho",
                      title: "Principal @ Guardian Estate Company",
                      ariaLabel: "11 of 22",
                    },
                    {
                      quote:
                        "We used Design Monks for two projects and he was reliable and creative. His design solutions worked well for what we needed and he helped create a good theme/style for our websites. I would recommend.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bfe5a1dc0c4a63566d47a_Client_Learndojo.avif",
                      imageAlt: "",
                      name: "Sajan Devshi",
                      title: "Founder @ Learndojo",
                      ariaLabel: "12 of 22",
                    },
                    {
                      quote:
                        "Design Monks delivered beautiful, functional UX that truly drove business results. Their expert team blends aesthetics with real business value, boosting our user engagement and growth. Highly recommended!",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bfdfba59d24464bbbd7d3_Client_Affine.avif",
                      imageAlt: "",
                      name: "Fahim Aziz",
                      title: "Founder @ Backpack (YC), Affine, AlpineX",
                      ariaLabel: "13 of 22",
                    },
                    {
                      quote:
                        "We received the design on time and had a great experience working with Design Monks. Their team demonstrated exceptional efficiency and delivered high-quality designs with great attention to detail",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bfd22a100257a65958a6a_Client_Skillophy.avif",
                      imageAlt: "",
                      name: "Golam Rabby",
                      title: "Founder @ Skillophy",
                      ariaLabel: "14 of 22",
                    },
                    {
                      quote:
                        "Amazing experience! The Design Monks team is experienced, diligent, and follows a solid process from research to design. They handled our redesign and user feedback perfectly. Truly a standout team in globally.\n",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bfce0c577de4ae7895279_Client_Onethread.avif",
                      imageAlt: "",
                      name: "Erfanul Hoque",
                      title: "Founder @ Renergy Technologies",
                      ariaLabel: "15 of 22",
                    },
                    {
                      quote:
                        "Fantastic experience working with Design Monks. They did more homework than I expected and actually studied details related to a whole new industry to iterate designs. Super professional, sleek, and fresh design output.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/69a044919acacd3897f9bb2d_Client_Tanmee.avif",
                      imageAlt: "",
                      name: "Rifah Tasfia",
                      title: "Product Consultant @ Carbobon",
                      ariaLabel: "16 of 22",
                    },
                    {
                      quote:
                        "Design Monks delivered exactly as promised transparent, professional, and always prompt. Even with political disruptions affecting internet access they stayed on track and delivered on time, incorporating all our feedback. Would work with them again!",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bfc407bc73054444faba8_Client_Sitewise.avif",
                      imageAlt: "",
                      name: "Vimal Bhaya",
                      title: "Founder @ Renergy Technologies",
                      ariaLabel: "17 of 22",
                    },
                    {
                      quote:
                        "I've had the pleasure of collaborating with Design Monks for a while now on my new project. They're lightning-quick in addressing any questions or feedback I have, and they consistently go the extra mile to make sure I'm thrilled with the final outcome. I wholeheartedly endorse them",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bef93fc8165be6c14ecbd_67b790a2c5539dbd6bb9aba7_Yenex (2).avif",
                      imageAlt: "",
                      name: "Ted Nash",
                      title: "Founder & CEO @ Yenex",
                      ariaLabel: "18 of 22",
                    },
                    {
                      quote:
                        "We would like to extend our sincere gratitude to our valued client for the incredible opportunity to redesign the Zantrik App. Your trust in our team and your collaborative spirit have been truly appreciated.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bef356a6eead383e81ce3_67b790a29d1e281fc8d78828_Zantrik.avif",
                      imageAlt: "",
                      name: "Shuvo Al faruque",
                      title: "Founder & CEO @ Zantrik",
                      ariaLabel: "19 of 22",
                    },
                    {
                      quote:
                        "I've collaborated with Design Monks for a year, and the experience has been truly remarkable. Their team's cooperative nature, combined with their innovative ideas and unwavering effort, has made our partnership a fruitful one.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68527a9ac82c754386d61213_Client_Akij.avif",
                      imageAlt: "",
                      name: "Laiza Lamyea Lia",
                      title: "Marketing Lead @ Akij Group",
                      ariaLabel: "20 of 22",
                    },
                  ]}
                />
                <ReferralCarousel
                  carouselVariant="translate-x-[-974.5px]"
                  testimonials={[
                    {
                      quote:
                        "I've had the pleasure of collaborating with Design Monks for a while now on my new project. They're lightning-quick in addressing any questions or feedback I have, and they consistently go the extra mile to make sure I'm thrilled with the final outcome. I wholeheartedly endorse them",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bef93fc8165be6c14ecbd_67b790a2c5539dbd6bb9aba7_Yenex (2).avif",
                      imageAlt: "",
                      name: "Ted Nash",
                      title: "Founder & CEO @ Yenex",
                      ariaLabel: "21 of 22",
                    },
                    {
                      quote:
                        "Design Monks was a pleasure to work with. They were proactive, and efficient, and never hesitated to challenge me in my assumptions. The design they built for me was beautiful, and I would not hesitate to retain them again in the future",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684befe7696e3ebd23c7a3f7_6841287f022320ba6d4df48a_Client_Jenna.avif",
                      imageAlt: "",
                      name: "Jenna Carvalho",
                      title: "Principal @ Guardian Estate Company",
                      ariaLabel: "22 of 22",
                    },
                    {
                      quote:
                        "We’ve worked with Design Monks for over 2 years on 10+ projects, and the experience has been outstanding. They deliver with precision, provide clear documentation, and make the whole process smooth and worry-free. With them, our design is always in safe hands.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db872c298ed3df2fd8ea8a_Client_Moshiur Rahman Radif.avif",
                      imageAlt: "",
                      name: "Moshiur Rahman Radif",
                      title: "COO @ Ontik Technologies",
                      ariaLabel: "1 of 22",
                    },
                    {
                      quote:
                        "Thanks to Design Monks for building a world-class website that captured our vision and helped us land customers from day one. They went beyond design, researching trends and bringing great ideas, all while staying responsive and on time. Highly recommended!",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6860efe1964edd477423306a_Client_Klasio.avif",
                      imageAlt: "",
                      name: "Emran Hasan",
                      title: "CEO & Co Founder @ Klasio",
                      ariaLabel: "2 of 22",
                    },
                    {
                      quote:
                        "Design Monks felt like part of our own team. They understood our vision, built a scalable UX we still use, and made the whole process easy. If you want more than just good looks, go with Design Monks.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68e51a24ecc4a5210747d172_Client_Jahnobi.avif",
                      imageAlt: "",
                      name: "Jahnnobi Rahman",
                      title: "CEO & Founder @ Relaxy",
                      ariaLabel: "3 of 22",
                    },
                    {
                      quote:
                        "We used Design Monks for two projects and he was reliable and creative. His design solutions worked well for what we needed and he helped create a good theme/style for our websites. I would recommend.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bfe5a1dc0c4a63566d47a_Client_Learndojo.avif",
                      imageAlt: "",
                      name: "Sajan Devshi",
                      title: "Founder @ Learndojo",
                      ariaLabel: "4 of 22",
                    },
                    {
                      quote:
                        "Design Monks delivered beautiful, functional UX that truly drove business results. Their expert team blends aesthetics with real business value, boosting our user engagement and growth. Highly recommended!",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bfdfba59d24464bbbd7d3_Client_Affine.avif",
                      imageAlt: "",
                      name: "Fahim Aziz",
                      title: "Founder @ Backpack (YC), Affine, AlpineX",
                      ariaLabel: "5 of 22",
                    },
                    {
                      quote:
                        "We received the design on time and had a great experience working with Design Monks. Their team demonstrated exceptional efficiency and delivered high-quality designs with great attention to detail",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bfd22a100257a65958a6a_Client_Skillophy.avif",
                      imageAlt: "",
                      name: "Golam Rabby",
                      title: "Founder @ Skillophy",
                      ariaLabel: "6 of 22",
                    },
                    {
                      quote:
                        "Amazing experience! The Design Monks team is experienced, diligent, and follows a solid process from research to design. They handled our redesign and user feedback perfectly. Truly a standout team in globally.\n",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bfce0c577de4ae7895279_Client_Onethread.avif",
                      imageAlt: "",
                      name: "Erfanul Hoque",
                      title: "Founder @ Renergy Technologies",
                      ariaLabel: "7 of 22",
                    },
                    {
                      quote:
                        "Fantastic experience working with Design Monks. They did more homework than I expected and actually studied details related to a whole new industry to iterate designs. Super professional, sleek, and fresh design output.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/69a044919acacd3897f9bb2d_Client_Tanmee.avif",
                      imageAlt: "",
                      name: "Rifah Tasfia",
                      title: "Product Consultant @ Carbobon",
                      ariaLabel: "8 of 22",
                    },
                    {
                      quote:
                        "Design Monks delivered exactly as promised transparent, professional, and always prompt. Even with political disruptions affecting internet access they stayed on track and delivered on time, incorporating all our feedback. Would work with them again!",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bfc407bc73054444faba8_Client_Sitewise.avif",
                      imageAlt: "",
                      name: "Vimal Bhaya",
                      title: "Founder @ Renergy Technologies",
                      ariaLabel: "9 of 22",
                    },
                    {
                      quote:
                        "We would like to extend our sincere gratitude to our valued client for the incredible opportunity to redesign the Zantrik App. Your trust in our team and your collaborative spirit have been truly appreciated.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bef356a6eead383e81ce3_67b790a29d1e281fc8d78828_Zantrik.avif",
                      imageAlt: "",
                      name: "Shuvo Al faruque",
                      title: "Founder & CEO @ Zantrik",
                      ariaLabel: "10 of 22",
                    },
                    {
                      quote:
                        "I've collaborated with Design Monks for a year, and the experience has been truly remarkable. Their team's cooperative nature, combined with their innovative ideas and unwavering effort, has made our partnership a fruitful one.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68527a9ac82c754386d61213_Client_Akij.avif",
                      imageAlt: "",
                      name: "Laiza Lamyea Lia",
                      title: "Marketing Lead @ Akij Group",
                      ariaLabel: "11 of 22",
                    },
                    {
                      quote:
                        "Had an amazing experience with Design Monks. Their talented team understood my vision and turned it into stunning visuals,with their impressive attention to detail skills. I highly recommend their high-quality design services.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bec308477c331aaafb599_67b790a2e3964135b80d7baa_Klub.avif",
                      imageAlt: "",
                      name: "Neil Saidi",
                      title: "Founder @ LeKlub",
                      ariaLabel: "12 of 22",
                    },
                    {
                      quote:
                        "What I love most about Design Monks is how they truly listen to their clients. They guided us through each step, kept us informed, and made sure the final design was exactly what we envisioned. Their after-service support is amazing.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68527ab26336b8b657776f64_Client_Carnesia.avif",
                      imageAlt: "",
                      name: "Shakhawat Hossain",
                      title: "Founder @ Carnesia",
                      ariaLabel: "13 of 22",
                    },
                    {
                      quote:
                        "Working with Design Monks transformed our workflow. Their adherence to guidelines increased efficiency and contributed to business growth. We can now focus more on strategic initiatives and client engagement, thanks to saved hours",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/686646bacaef729d3510e818_Client_Plenty Pay.avif",
                      imageAlt: "",
                      name: "Kunle Adetayo",
                      title: "CEO & Founder @ Plentypay",
                      ariaLabel: "14 of 22",
                    },
                    {
                      quote:
                        "Big shoutout to the Design Monks team. They brought our vision to life both visually and strategically. They nailed the balance between clean design and real business results, and their transparency and responsiveness made everything smooth. The unlimited revisions gave us real peace of mind. ",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68e64d22cdc27ad396f305cc_Client_Dilicio.avif",
                      imageAlt: "",
                      name: "Victor Okon",
                      title: "COO & Co-founder @ Dlicio",
                      ariaLabel: "15 of 22",
                    },
                    {
                      quote:
                        "Working with Design Monks was a great experience. They translated our business goals into clean, aesthetic designs with total transparency. The process was fast and stress-free, even in the complex cybersecurity space. They are a patient, committed, and highly recommended design partner.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/69720239a107841275fed266_Client_Armen Avagyan.avif",
                      imageAlt: "",
                      name: "Armen Avagyan",
                      title: "CEO & Co Founder @ Fraus",
                      ariaLabel: "16 of 22",
                    },
                    {
                      quote:
                        "Design Monks is a professional, reliable partner for end-to-end product builds. From clean, modern designs to seamless development with Dev Monks, they exceeded my expectations. I couldn’t be happier with the collaboration!",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/697c78ae153f55d2e85ebf4a_Client_Anika.avif",
                      imageAlt: "",
                      name: "Anika",
                      title: "Founder @ Coinpulse",
                      ariaLabel: "17 of 22",
                    },
                    {
                      quote:
                        "Working with Design Monks was a great experience. They were responsible, communicative, and delivered excellent design work as per my requirements. I appreciated their flexibility, professionalism, and quick turnaround on feedback. Would happily work together again!",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68527ad3ec7d9727d6040292_Client_voc ai.avif",
                      imageAlt: "",
                      name: "Nora Peng",
                      title: "Marketing Manager @ Voc AI",
                      ariaLabel: "18 of 22",
                    },
                    {
                      quote:
                        "I’ve worked with Design Monks on three websites, and they’ve been nothing but exceptional. Their design is top-notch, development is reliable, and communication is always smooth. They quickly act on feedback and deliver exactly what I need. For me, they’re a 10/10 partner for all things design and development.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db86d30e6ba269e3a20e68_Client_Austin.avif",
                      imageAlt: "",
                      name: "Austin",
                      title: "CEO @ Clarity LLC",
                      ariaLabel: "19 of 22",
                    },
                    {
                      quote:
                        "Working with Design Monks on our ESDIAC app and group websites was an excellent experience. They were patient, attentive to feedback, and delivered clean, consistent, high-quality work. We’re proud of the results and happy to continue our long-term partnership with them.",
                      imageUrl:
                        "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db83d0788461a30fddc0f8_Client_Sofia Gouveia.avif",
                      imageAlt: "",
                      name: "Sofia Gouveia",
                      title: "Design Director @ Esdiac",
                      ariaLabel: "20 of 22",
                    },
                  ]}
                />
                <div className="absolute bg-[linear-gradient(90deg,rgb(250,250,250),rgba(255,255,255,0))] box-border caret-transparent h-full pointer-events-none w-[100px] left-0 md:w-[150px]"></div>
                <div className="absolute bg-[linear-gradient(90deg,rgba(255,255,255,0),rgb(250,250,250))] box-border caret-transparent h-full pointer-events-none w-[100px] right-0 md:w-[150px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
