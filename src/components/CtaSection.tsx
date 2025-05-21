import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const CtaSection: React.FC = () => {
  return (
    <section
      id="get-started"
      className="m-4 mt-12 md:mt-0 md:m-8 py-16 md:py-24 max-w-6xl md:mx-auto rounded-[25px] bg-gradient-to-br from-indigo-200 to-purple-700 text-white shadow-xl "
    >
      <div className="container mx-auto px-4 md:px-6 ">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center bg-white/10 rounded-full px-4 py-2">
            <Sparkles className="h-5 w-5 mr-2 text-yellow-300" />
            <span className="font-semibold">Start building faster today</span>
          </div>

          <p className="text-4xl md:text-[3rem] mb-4 md:mb-6  text-gray-200 leading-tight ">
            Supercharge{" "}
            <span className=" text-[35px] md:text-[5rem] font-bold text-transparent bg-clip-text animate-gradientMove bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 transition-all duration-1000 ease-in-out ">
              Development.
            </span>
          </p>

          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Experience the power of auraNest's precise implementation and unlock
            your full potential as a developer. No more wasting time on
            repetitive tasks or debugging issues.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 mt-8 sm:flex-row sm:gap-4">
            <a
              href="#get-started"
              className=" ease-in duration-200  bg-white text-gray-700 hover:bg-purple-50 font-semibold py-2.5 px-6 rounded-[20px] shadow-lg hover:shadow-2xl transition flex items-center justify-center active:scale-95 text-sm md:text-base"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
