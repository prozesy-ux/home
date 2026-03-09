export type HeroImagesProps = {
  containerVariant: string;
  mainImageUrl: string;
  mainImageAlt: string;
  mainImageVariant: string;
  secondaryImageUrl: string;
  secondaryImageAlt: string;
  secondaryImageVariant: string;
  tertiaryImageUrl: string;
  tertiaryImageAlt: string;
  tertiaryImageVariant: string;
};

export const HeroImages = (props: HeroImagesProps) => {
  return (
    <div
      className={`absolute box-border caret-transparent hidden flex-col md:flex ${props.containerVariant}`}
    >
      <img
        src={props.mainImageUrl}
        alt={props.mainImageAlt}
        className={`relative box-border caret-transparent inline-block h-full max-w-full min-h-0 min-w-0 transform-none z-[1] md:block md:h-auto md:min-h-[auto] md:min-w-[auto] ${props.mainImageVariant}`}
      />
      <img
        src={props.secondaryImageUrl}
        alt={props.secondaryImageAlt}
        className={`absolute box-border caret-transparent max-w-full ${props.secondaryImageVariant}`}
      />
      <img
        src={props.tertiaryImageUrl}
        alt={props.tertiaryImageAlt}
        className={`absolute box-border caret-transparent max-w-full ${props.tertiaryImageVariant}`}
      />
    </div>
  );
};
