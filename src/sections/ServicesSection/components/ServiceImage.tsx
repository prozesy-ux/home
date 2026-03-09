export type ServiceImageProps = {
  image1Src: string;
  image1Alt?: string;
  image2Src: string;
  image2Alt?: string;
  showExtraDiv?: boolean;
};

export const ServiceImage = (props: ServiceImageProps) => {
  return (
    <div className="items-start box-border caret-transparent gap-x-[22px] flex flex-col h-auto min-h-[auto] min-w-[auto] gap-y-[22px] w-full md:gap-x-8 md:flex-row md:h-[680px] md:gap-y-8 md:w-auto">
      <div className="relative bg-black box-border caret-transparent h-[270px] max-w-full min-h-[auto] min-w-[auto] w-full overflow-hidden rounded-lg md:h-[556px] md:max-w-[396px]">
        <img
          src={props.image1Src}
          alt={props.image1Alt || ""}
          className="box-border caret-transparent inline-block h-full max-w-full object-cover object-[50%_0%] w-full"
        />
      </div>
      <div className="relative bg-black box-border caret-transparent h-[270px] max-w-full min-h-[auto] min-w-[auto] w-full overflow-hidden mt-0 rounded-lg md:h-[556px] md:max-w-[396px] md:mt-[120px]">
        <img
          src={props.image2Src}
          alt={props.image2Alt || ""}
          className="box-border caret-transparent inline-block h-full max-w-full object-cover object-[50%_0%] w-full"
        />
      </div>
      {props.showExtraDiv && (
        <div className="box-border caret-transparent hidden before:accent-auto before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-outfit_variablefont_wght after:accent-auto after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-outfit_variablefont_wght"></div>
      )}
    </div>
  );
};
