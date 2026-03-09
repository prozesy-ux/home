export type ReferralCarouselProps = {
  testimonials: Array<{
    quote: string;
    imageUrl: string;
    imageAlt: string;
    name: string;
    title: string;
    ariaLabel: string;
  }>;
  carouselVariant: string;
};

export const ReferralCarousel = (props: ReferralCarouselProps) => {
  return (
    <div
      role="region"
      className="relative box-border caret-transparent flex-col max-h-[640px] min-h-[auto] min-w-[auto] overflow-hidden md:max-h-[786px]"
    >
      <div className="relative box-border caret-transparent z-0 overflow-hidden">
        <div
          role="presentation"
          className={`box-border caret-transparent gap-x-0 flex h-full gap-y-0 ${props.carouselVariant}`}
        >
          {props.testimonials.map((testimonial, index) => (
            <div
              key={index}
              role="group"
              aria-label={testimonial.ariaLabel}
              className="relative box-border caret-transparent shrink-0 list-none min-h-[auto] min-w-[auto] w-80 mr-4 md:w-[400px]"
            >
              <div className="items-start box-border caret-transparent gap-x-6 flex flex-col h-full justify-between gap-y-6 w-full border border-neutral-200 p-4 rounded-2xl border-solid md:p-6">
                <p className="text-neutral-600 text-base box-border caret-transparent tracking-[0.36px] leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
                  {testimonial.quote}
                </p>
                <div className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] gap-y-2">
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.imageAlt}
                    className="aspect-square box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] object-cover align-bottom w-[52px] rounded-[100%]"
                  />
                  <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                    <p className="text-neutral-950 text-base font-bold box-border caret-transparent tracking-[0.36px] leading-[19.2px] font-redhatdisplay_variablefont_wght md:text-xl md:leading-6">
                      {testimonial.name}
                    </p>
                    <p className="text-neutral-600 text-sm box-border caret-transparent tracking-[0.36px] leading-[21px] md:text-base md:leading-6">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
