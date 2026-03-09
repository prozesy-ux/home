export const Navbar = () => {
  return (
    <div className="fixed box-border caret-transparent max-w-none z-[99999] mx-auto pb-6 bottom-[0%] inset-x-[0%] md:max-w-[713px]">
      {/* Email Input - Mobile Only */}
      <div className="absolute left-[5%] top-[-3.5rem] md:hidden">
        <div className="relative flex items-center bg-white rounded-full px-4 py-2.5 shadow-lg min-w-[200px]">
          <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <input
            type="email"
            placeholder="Your email here"
            className="flex-1 outline-none text-sm text-gray-600 placeholder-gray-400 bg-transparent"
          />
        </div>
      </div>

      {/* Top Button - Mobile Only */}
      <div className="absolute right-[5%] top-[-3rem] md:hidden">
        <button className="flex items-center gap-2 bg-black text-white rounded-full px-5 py-2.5 shadow-lg">
          <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
            <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-sm font-medium">Top</span>
        </button>
      </div>

      <nav className="relative box-border caret-transparent grid grid-cols-[1fr_1fr_92px_1fr_1fr] z-[2] pt-4 pb-[22px] px-0 rounded-2xl md:grid-cols-[1fr_1fr_auto_1fr_1fr] md:p-2">
        <img
          src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-1.svg"
          alt="Icon"
          className="absolute box-border caret-transparent block h-[92px] pointer-events-none translate-x-[-50.0%] align-baseline w-screen left-2/4 top-[0%] md:hidden md:transform-none md:w-[375px]"
        />
        <a
          href="https://www.designmonks.co/projects"
          className="relative text-zinc-50 text-[12.8px] items-center box-border caret-transparent gap-x-2 flex flex-col justify-center tracking-[0.256px] leading-[19.2px] max-w-full min-h-[auto] min-w-[auto] gap-y-2 w-full p-[5px] md:text-base md:tracking-[0.32px] md:leading-6"
        >
          <img
            src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-2.svg"
            alt="Icon"
            className="text-2xl box-border caret-transparent block shrink-0 h-6 tracking-[0.256px] leading-9 align-baseline w-6 md:hidden md:tracking-[0.32px]"
          />
          <span className="text-[12.8px] box-border caret-transparent block tracking-[0.256px] leading-[19.2px] min-h-[auto] min-w-[auto] md:text-base md:tracking-[0.32px] md:leading-6">
            Projects
          </span>
        </a>
        <a
          href="https://www.designmonks.co/services"
          className="relative text-zinc-50 text-[12.8px] items-center box-border caret-transparent gap-x-2 flex flex-col justify-center tracking-[0.256px] leading-[19.2px] max-w-full min-h-[auto] min-w-[auto] gap-y-2 w-full p-[5px] md:text-base md:hidden md:tracking-[0.32px] md:leading-6 md:min-h-0 md:min-w-0"
        >
          <img
            src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-3.svg"
            alt="Icon"
            className="text-2xl box-border caret-transparent block shrink-0 h-6 tracking-[0.256px] leading-9 align-baseline w-6 md:hidden md:tracking-[0.32px]"
          />
          <span className="text-[12.8px] box-border caret-transparent block tracking-[0.256px] leading-[19.2px] min-h-[auto] min-w-[auto] md:text-base md:inline md:tracking-[0.32px] md:leading-6 md:min-h-0 md:min-w-0">
            Services
          </span>
        </a>
        <div className="relative items-center box-border caret-transparent hidden justify-center text-left mx-auto md:contents">
          <div
            role="button"
            className="relative text-neutral-800 box-border caret-transparent contents text-nowrap align-top mx-auto pl-5 pr-10 py-5"
          >
            <a
              href="https://www.designmonks.co/services"
              className="relative text-zinc-50 text-[12.8px] items-center box-border caret-transparent gap-x-2 flex flex-col justify-center tracking-[0.256px] leading-[19.2px] max-w-full min-h-0 min-w-0 gap-y-2 text-nowrap w-full my-0 p-[5px] md:text-base md:tracking-[0.32px] md:leading-6 md:min-h-[auto] md:min-w-[auto] md:-my-2"
            >
              <img
                src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-3.svg"
                alt="Icon"
                className="text-2xl box-border caret-transparent block shrink-0 h-6 tracking-[0.256px] leading-9 text-nowrap align-baseline w-6 md:hidden md:tracking-[0.32px]"
              />
              <div className="text-[12.8px] box-border caret-transparent tracking-[0.256px] leading-[19.2px] min-h-0 min-w-0 text-nowrap md:text-base md:tracking-[0.32px] md:leading-6 md:min-h-[auto] md:min-w-[auto]">
                Services
              </div>
            </a>
          </div>
        </div>
        <a
          href="https://www.designmonks.co/contact"
          className="relative text-zinc-50 text-base font-bold items-center bg-violet-600 box-border caret-transparent flex h-16 justify-center justify-self-center tracking-[0.32px] leading-6 max-w-full min-h-[auto] min-w-[auto] translate-y-[-60.0%] w-16 rounded-[18px] md:h-auto md:justify-self-auto md:transform-none md:w-auto md:rounded-lg"
        >
          <div className="absolute bg-violet-600 bg-[conic-gradient(at_8.04%_51.79%,rgb(251,250,246)_0deg,rgba(251,250,246,0)_360deg),none] bg-size-[auto,auto] box-border caret-transparent pointer-events-none bg-[position:0%,0%_0%,0%] inset-[0%]"></div>
          <div className="relative items-center bg-neutral-950 box-border caret-transparent gap-x-2 flex h-full justify-center min-h-[auto] min-w-[auto] gap-y-2 w-full z-0 p-[5px] md:px-8 md:py-4">
            <img
              src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-5.svg"
              alt="Icon"
              className="text-[32px] box-border caret-transparent shrink-0 h-8 leading-[48px] align-baseline w-8 md:text-2xl md:h-6 md:leading-9 md:w-6"
            />
            <span className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
              Start a Project
            </span>
            <img
              src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-6.svg"
              alt="Icon"
              className="absolute text-white/50 box-border caret-transparent blur-[2.5px] h-16 pointer-events-none translate-x-[50.0%] translate-y-[-50.0%] align-baseline w-16 right-[0%] top-[0%]"
            />
          </div>
        </a>
        <a
          href="https://www.designmonks.co/pricing"
          className="relative text-zinc-50 text-[12.8px] items-center box-border caret-transparent gap-x-2 flex flex-col justify-center tracking-[0.256px] leading-[19.2px] max-w-full min-h-[auto] min-w-[auto] gap-y-2 w-full p-[5px] md:text-base md:tracking-[0.32px] md:leading-6"
        >
          <img
            src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-7.svg"
            alt="Icon"
            className="text-2xl box-border caret-transparent block shrink-0 h-6 tracking-[0.256px] leading-9 align-baseline w-6 md:hidden md:tracking-[0.32px]"
          />
          <span className="text-[12.8px] box-border caret-transparent block tracking-[0.256px] leading-[19.2px] min-h-[auto] min-w-[auto] md:text-base md:tracking-[0.32px] md:leading-6">
            Pricing
          </span>
        </a>
        <div className="relative items-center box-border caret-transparent contents justify-center text-left mx-auto">
          <div
            role="button"
            className="relative text-zinc-50 text-[12.8px] items-center box-border caret-transparent gap-x-2 flex flex-col justify-center tracking-[0.256px] leading-[19.2px] min-h-[auto] min-w-[auto] gap-y-2 text-nowrap align-top w-full mx-auto my-0 p-[5px] md:text-base md:tracking-[0.32px] md:leading-6 md:-my-2"
          >
            <img
              src="https://c.animaapp.com/mmczzcvjDbxkkG/assets/icon-8.svg"
              alt="Icon"
              className="text-2xl box-border caret-transparent block shrink-0 h-6 tracking-[0.256px] leading-9 text-nowrap align-baseline w-6 md:hidden md:tracking-[0.32px]"
            />
            <div className="text-[12.8px] box-border caret-transparent tracking-[0.256px] leading-[19.2px] min-h-[auto] min-w-[auto] text-nowrap md:text-base md:tracking-[0.32px] md:leading-6">
              More
            </div>
          </div>
        </div>
        <div className="absolute bg-neutral-950 shadow-[rgba(48,255,151,0.4)_0px_3px_4px_0px_inset] box-border caret-transparent pointer-events-none z-[-1] rounded-2xl inset-[0%] hidden md:block"></div>
        <div className="absolute bg-neutral-950 shadow-[rgba(48,255,151,0.4)_0px_3px_4px_0px_inset] box-border caret-transparent pointer-events-none z-[-1] rounded-2xl inset-[0%] md:hidden"></div>
      </nav>
    </div>
  );
};
