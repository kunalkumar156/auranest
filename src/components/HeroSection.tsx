import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-white via-purple-200 to-pink-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <div className="mb-10 md:mb-0">
            <p className="text-4xl md:text-[5rem]  text-gray-400 leading-tight ">
              Describe and{" "}
              <span className=" text-[4rem] md:text-[10rem] font-bold text-transparent bg-clip-text animate-gradientMove bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-700 ease-in-out hover:drop-shadow-[0_0_3px_rgba(168,85,247,0.6)]">
                Deploy.
              </span>
            </p>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-700 max-w-xl mx-auto">
              auraNest helps you build faster with precise code implementation
              and expert guidance across multiple programming languages.
            </p>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#get-started"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition shadow-md hover:shadow-lg flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#examples"
                className="border border-gray-300 hover:border-indigo-600 text-gray-900 hover:text-indigo-600 font-medium py-3 px-8 rounded-lg transition flex items-center justify-center"
              >
                See Examples
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
