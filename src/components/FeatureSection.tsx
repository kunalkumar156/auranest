"use client";
import FeatureCard from "./FeatureCard";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const features = [
  {
    title: "Website Builder",
    description:
      "AuraUI provides a comprehensive suite of tools that empower you to create stunning, high-performance, production-ready user interfaces faster than ever before. With an extensive library of prebuilt components and customization options, you can design and deploy beautiful websites without starting from scratch, significantly reducing development time and effort.",
    image: "/features/features1.jpeg",
    cardBg: "/gradients/gr-purple.png",
    overlayBg: "#f3e8ff",
    dotColor: "#E9D5FF", // light purple
  },
  {
    title: "AI Code Assistant",
    description:
      "AuraNest's cutting-edge AI engine assists you in generating code, refactoring components, and offering inline suggestions to optimize your development workflow. This intelligent assistant understands your coding needs, guiding you through best practices and suggesting improvements in real-time, error-free code faster and more intuitive than ever before.",
    image: "/features/features4.jpeg",
    cardBg: "/gradients/gr-blue.png",
    overlayBg: "#e0f2f1",
    dotColor: "#BFDBFE", // light blue
  },

  {
    title: "Cross-Language",
    description:
      "With AuraNest, you get expert assistance across a wide range of programming languages and frameworks. Whether you're working with JavaScript, Python, Java, or any other language, AuraNest's AI assistant provides guidance on best practices to ensure that your code is not only functional but also efficient and scalable across different environments.",
    image: "/features/features3.jpeg",
    cardBg: "/gradients/gr-teal.png",
    overlayBg: "#ccfbf1",
    dotColor: "#99F6E4", // light teal
  },
  {
    title: "Easy Integration",
    description:
      "AuraNest is designed to integrate seamlessly into your existing workflow, working directly within your browser with no setup required. This effortless integration allows you to start coding right away, eliminating the need for complex installations or configurations. Your development process becomes faster, more efficient, and entirely hassle-free.",
    image: "/features/features6.jpeg",
    cardBg: "/gradients/gr-yellow.png",
    overlayBg: "#fef9c3",
    dotColor: "#FEF08A", // light yellow
  },
  {
    title: "Precise Codes",
    description:
      "AuraNest delivers exactly what you ask for—no extra, no less. The AI-powered tool ensures that your code is implemented exactly as requested, maintaining the highest standards of precision and clarity. Whether it's complex logic or simple tasks, you can trust that the generated code will match your requirements perfectly, saving you time and eliminating errors.",
    image: "/features/features11.jpeg",
    cardBg: "/gradients/gr-orange.png",
    overlayBg: "#fef9e4",
    dotColor: "#FECACA", // light red
  },
];

const FeatureSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animate only once
    });
  }, []);

  return (
    <section id="features" className="bg-[#Fbfbfb] py-16 md:py-24">
      <div className="text-center mb-12 md:mb-0">
        <p
          className="text-4xl md:text-[5rem]  text-gray-200 leading-tight "
          data-aos="fade-up"
        >
          Why{" "}
          <span className=" text-[4rem] md:text-[8rem] font-bold text-transparent bg-clip-text animate-gradientMove bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500  transition-all duration-700 ease-in-out ">
            auraNest?
          </span>
        </p>
        <p
          className="mt-4 text-lg font-semibold text-gray-700 max-w-2xl mx-auto"
          data-aos="fade-up"
        >
          Experience the power of an AI assistant specifically designed for
          developers, with features that help you code faster and better.
        </p>
      </div>

      <div className="relative h-[600vh]">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="sticky top-0 h-screen flex items-center justify-center z-10"
            style={{ zIndex: features.length + idx }}
          >
            <div className="w-full max-w-6xl px-4">
              <FeatureCard {...feature} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
