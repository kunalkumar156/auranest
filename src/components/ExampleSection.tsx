"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ExampleSection: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["200%", "-300%"]);

  return (
    <section
      id="examples"
      ref={ref}
      className="relative py-14 md:py-20 bg-gray-50"
    >
      <div className="sticky top-1/2 text-center">
        <p className="text-4xl md:text-[7rem] text-gray-300 leading-tight font-medium flex items-center justify-center gap-6">
          <span className="inline-block">Build</span>
          <motion.span
            style={{ y }}
            className="block text-[4rem] md:text-[12rem] font-bold text-transparent bg-clip-text animate-gradientMove bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500"
          >
            faster
          </motion.span>
        </p>
      </div>
    </section>
  );
};

export default ExampleSection;
