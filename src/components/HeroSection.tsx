import React from "react";
import { ArrowRight } from "lucide-react";
import PromptBox from "./PromptBox";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[url('/bg-image.png')] bg-no-repeat bg-cover bg-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="mb-10 md:mb-0">
            <p className="text-4xl md:text-[5rem] text-gray-200 leading-tight">
              Describe and{" "}
              <span className="text-[4rem] md:text-[10rem] font-bold text-transparent bg-clip-text animate-gradientMove bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-700 ease-in-out hover:drop-shadow-[0_0_3px_rgba(168,85,247,0.6)]">
                Deploy.
              </span>
            </p>
            <p className="mt-4 md:mt-2 text-lg md:text-xl text-gray-700 font-semibold max-w-xl mx-auto">
              From Idea to Implementation, Beautifully Fast. auraNest.
            </p>

            <div className="mt-8 md:mt-10">
              <PromptBox />
            </div>

            <div className="flex flex-col items-center justify-center gap-3 mt-8 sm:flex-row sm:gap-4">
              <a
                href="#get-started"
                className="ease-in duration-200 bg-white text-gray-700 hover:bg-purple-50 font-semibold py-2.5 px-6 rounded-[20px] shadow-lg hover:shadow-2xl transition flex items-center justify-center active:scale-95 text-sm md:text-base"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
