import Link from "next/link";
import { FadeContainer, FadeDiv, FadeSpan } from "./Fade";

export function Hero() {
  return (
    <section aria-label="hero">
      <FadeContainer className="relative flex flex-col items-center justify-center">
        <h1 className="mt-8 text-center text-5xl font-semibold tracking-tighter text-gray-900 dark:text-gray-100 sm:text-8xl sm:leading-22">
          <FadeSpan>Filecoin</FadeSpan> <FadeSpan>Pay</FadeSpan>
          <br />
          <FadeSpan>Analytics</FadeSpan> <FadeSpan>Layer</FadeSpan>
        </h1>
        <p className="mt-5 max-w-xl text-center text-base text-balance text-gray-700 dark:text-gray-300 sm:mt-8 sm:text-xl">
          <FadeSpan>Monitor rail health,</FadeSpan>{" "}
          <FadeSpan>forecast funding depletion,</FadeSpan>{" "}
          <FadeSpan>
            and integrate payment analytics to scale with confidence, not risk.
          </FadeSpan>
        </p>
        <FadeDiv>
          <Link
            className="mt-6 inline-flex cursor-pointer flex-row items-center justify-center gap-1 rounded-md border-b-[1.5px] border-[#0090ff] bg-linear-to-b from-[#0090ff] to-[#0090ff] px-5 py-3 leading-4 font-medium tracking-wide whitespace-nowrap text-white shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_14px_0_rgba(255,255,255,0.19)] transition-all duration-200 ease-in-out hover:shadow-[#0090ff]"
            href="/"
          >
            Start Monitoring Now
          </Link>
        </FadeDiv>
      </FadeContainer>
    </section>
  );
}
