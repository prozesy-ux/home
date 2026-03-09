export type BonusCardProps = {
  iconUrl: string;
  title: string;
  description: string;
};

export const BonusCard = (props: BonusCardProps) => {
  return (
    <div className="relative bg-[linear-gradient(rgb(127,33,255),rgb(15,7,25)_92%)] box-border caret-transparent min-h-[auto] min-w-[auto] z-[5] overflow-hidden rounded-2xl">
      <div className="bg-neutral-950 box-border caret-transparent h-full z-[3] m-px px-5 py-7 rounded-2xl md:p-8">
        <div className="box-border caret-transparent basis-[0%] grow h-8 max-w-8 w-full">
          <img
            src={props.iconUrl}
            alt=""
            className="box-border caret-transparent inline-block max-w-full"
          />
        </div>
        <div className="text-zinc-50 box-border caret-transparent gap-x-1 flex flex-col gap-y-1 mt-6">
          <h3 className="text-base font-bold box-border caret-transparent leading-[19.2px] min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-xl md:leading-6">
            {props.title}
          </h3>
          <div className="text-neutral-300 box-border caret-transparent min-h-[auto] min-w-[auto]">
            <p className="text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
