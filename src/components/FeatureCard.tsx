import { ArrowRight } from "lucide-react";
import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  cardBg?: string;
  overlayBg?: string; // e.g. "#fef9e4"
  dotColor?: string; // e.g. "#D1D5DB"
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  image,
  cardBg,
  overlayBg = "#fef9e4",
  dotColor = "#00000000",
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animate only once
    });
  }, []);
  return (
    <div
      className="rounded-[25px] p-8 md:p-14 flex flex-col md:flex-row items-center gap-8 md:gap-20 shadow-md"
      style={{
        backgroundImage: cardBg?.startsWith("/") ? `url(${cardBg})` : undefined,
        backgroundColor: cardBg?.startsWith("#") ? cardBg : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Image Container */}
      <div className="relative rounded-[25px] overflow-hidden w-80 aspect-[5/4] transition duration-500 ease-in-out transform hover:shadow-lg">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: overlayBg }}
        ></div>

        {image && (
          <div>
            <img
              src={image}
              alt={title}
              className="absolute inset-0 object-cover w-[90%] h-[87%] mt-6 rounded-[10px] shadow-lg m-auto"
            />
          </div>
        )}

        <div className="absolute top-2 left-2 flex space-x-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 ml-3 mt-1 rounded-full"
              style={{ backgroundColor: dotColor }}
            ></div>
          ))}
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center md:items-start md:w-[60%]">
        <h2
          className="text-3xl md:text-7xl font-bold text-white text-center md:text-left mb-3"
          data-aos="fade-up"
        >
          {title}
        </h2>
        <p
          className="text-gray-700 text-center md:text-left"
          data-aos="fade-up"
        >
          {description}
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
  );
};

export default FeatureCard;
