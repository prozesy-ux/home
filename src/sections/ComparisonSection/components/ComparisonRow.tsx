export type ComparisonRowProps = {
  variant: string;
  iconUrl: string;
  title: string;
  description: string;
  feature1IconUrl: string;
  feature1HasWrapper: boolean;
  feature2IconUrl: string;
  feature2HasWrapper: boolean;
  feature3IconUrl: string;
  feature3HasWrapper: boolean;
  feature4IconUrl: string;
  feature4HasWrapper: boolean;
  feature5IconUrl: string;
  feature5HasWrapper: boolean;
  showDecorationImages?: boolean;
  decorationImage1Url?: string;
  decorationImage2Url?: string;
  iconWrapperVariant: string;
};

export const ComparisonRow = (props: ComparisonRowProps) => {
  return (
    <div
      className={`box-border caret-transparent min-h-[auto] min-w-[884px] w-full ${props.variant}`}
    >
      <div className="items-center box-border caret-transparent bg-neutral-950 bg-[linear-gradient(202deg,rgba(87,27,210,0.2),rgba(10,10,10,0.2))] shadow-[rgba(23,11,38,0.1)_0px_16px_24px_0px,rgba(255,255,255,0.09)_0px_8px_24px_0px_inset] gap-x-0 grid auto-cols-[1fr] grid-cols-[1.75fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[auto] min-w-[884px] gap-y-0 w-full px-10 py-[30px] rounded-[32px] md:grid-cols-[3.5fr_1fr_1fr_1fr_1fr_1fr] md:min-w-[1249px] md:py-6">
        <div className="items-center box-border caret-transparent gap-x-6 flex col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] justify-start min-h-[auto] min-w-[auto] md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto">
          <div
            className={`items-center box-border caret-transparent ${props.iconWrapperVariant}`}
          >
            <img
              src={props.iconUrl}
              alt="Icon"
              className="text-white box-border caret-transparent inline align-baseline w-8 md:block"
            />
          </div>
          <div className="box-border caret-transparent flex min-h-[auto] min-w-[auto] text-zinc-50 flex-col gap-y-2">
            <h3 className="text-xl font-bold box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] font-redhatdisplay_variablefont_wght md:text-2xl md:leading-[28.8px]">
              {props.title}
            </h3>
            <div className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
              <div className="box-border caret-transparent text-neutral-300">
                <div className="text-base box-border caret-transparent tracking-[0.36px] leading-6 md:text-lg md:leading-[27px]">
                  {props.description}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
          {props.feature1HasWrapper ? (
            <div className="text-zinc-50 box-border caret-transparent flex min-h-[auto] min-w-[auto] w-6 md:w-10">
              <img
                src={props.feature1IconUrl}
                alt="Icon"
                className="box-border caret-transparent align-baseline w-full"
              />
            </div>
          ) : (
            <img
              src={props.feature1IconUrl}
              alt="Icon"
              className="text-red-500 box-border caret-transparent align-baseline w-6 md:w-10"
            />
          )}
        </div>
        <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
          {props.feature2HasWrapper ? (
            <div className="text-zinc-50 box-border caret-transparent flex min-h-[auto] min-w-[auto] w-6 md:w-10">
              <img
                src={props.feature2IconUrl}
                alt="Icon"
                className="box-border caret-transparent align-baseline w-full"
              />
            </div>
          ) : (
            <img
              src={props.feature2IconUrl}
              alt="Icon"
              className="text-red-500 box-border caret-transparent align-baseline w-6 md:w-10"
            />
          )}
        </div>
        <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
          {props.feature3HasWrapper ? (
            <div className="text-zinc-50 box-border caret-transparent flex min-h-[auto] min-w-[auto] w-6 md:w-10">
              <img
                src={props.feature3IconUrl}
                alt="Icon"
                className="box-border caret-transparent align-baseline w-full"
              />
            </div>
          ) : (
            <img
              src={props.feature3IconUrl}
              alt="Icon"
              className="text-red-500 box-border caret-transparent align-baseline w-6 md:w-10"
            />
          )}
        </div>
        <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
          {props.feature4HasWrapper ? (
            <div className="text-zinc-50 box-border caret-transparent flex min-h-[auto] min-w-[auto] w-6 md:w-10">
              <img
                src={props.feature4IconUrl}
                alt="Icon"
                className="box-border caret-transparent align-baseline w-full"
              />
            </div>
          ) : (
            <img
              src={props.feature4IconUrl}
              alt="Icon"
              className="text-red-500 box-border caret-transparent align-baseline w-6 md:w-10"
            />
          )}
        </div>
        <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto]">
          {props.feature5HasWrapper ? (
            <div className="text-zinc-50 box-border caret-transparent flex min-h-[auto] min-w-[auto] w-6 md:w-10">
              <img
                src={props.feature5IconUrl}
                alt="Icon"
                className="box-border caret-transparent align-baseline w-full"
              />
            </div>
          ) : (
            <img
              src={props.feature5IconUrl}
              alt="Icon"
              className="text-red-500 box-border caret-transparent align-baseline w-6 md:w-10"
            />
          )}
        </div>
      </div>
      {props.showDecorationImages && (
        <>
          <img
            src={props.decorationImage1Url}
            alt=""
            className="absolute box-border caret-transparent max-w-full right-[0%] top-[0%]"
          />
          <img
            src={props.decorationImage2Url}
            alt=""
            className="absolute box-border caret-transparent max-w-full left-[0%] bottom-[0%]"
          />
        </>
      )}
    </div>
  );
};
