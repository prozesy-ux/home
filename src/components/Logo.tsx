export const Logo = () => {
  return (
    <div className="absolute items-center box-border caret-transparent flex justify-center z-[99] py-7 top-[0%] inset-x-[0%]">
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
        <a
          href="https://www.designmonks.co/"
          className="text-violet-600 box-border caret-transparent inline-block max-w-full"
        >
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/679a08604def1d26213e6133_designmonks (1).svg"
            alt=""
            className="box-border caret-transparent inline-block max-w-full"
          />
        </a>
      </div>
    </div>
  );
};
