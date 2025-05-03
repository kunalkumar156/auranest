import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="relative overflow-hidden md:pb-[16rem] pb-[10rem]">
      <div className="pt-[20px] md:pt-[50px] md:pb-0  ">
        <div className="bg-gray-50 text-gray-700 border-t border-gray-200">
          <div className="pt-10 md:pt-20">
            <div className="flex flex-col items-center justify-center text-center px-4">
              <div className="mb-6">
                <img
                  className="h-8 md:h-8"
                  src="https://www.auraui.com/logo-light.png"
                  alt="Aura UI Logo"
                />
              </div>

              {/* Heading */}
              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
                Open source builder.
              </h1>
              <p className="text-lg text-gray-500 mb-8">
                Build intuitive UIs with clarity, precision, and speed.
              </p>

              <h1
                className="md:hidden lg:block absolute bottom-[-2rem] md:bottom-[-7rem] left-1/2 transform -translate-x-1/2 text-[5.5rem] md:text-[16rem] font-extrabold tracking-tighter bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 text-transparent bg-clip-text z-0 pointer-events-none"
                style={{ WebkitTextFillColor: "transparent" }}
              >
                auraNest
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// {
//   icon: Code,
//   title: "Precise Code Implementation",
//   description:
//     "auraNest implements exactly what you ask for—nothing more, nothing less, ensuring your code is exactly as you need it.",
// },
// {
//   icon: Rocket,
//   title: "Cross-Language Expertise",
//   description:
//     "Get expert assistance across multiple programming languages, frameworks, and best practices.",
// },
// {
//   icon: BookOpen,
//   title: "Educational Insights",
//   description:
//     "Learn while building with clear explanations and context for every code solution.",
// },
// {
//   icon: Share2,
//   title: "Seamless Integration",
//   description:
//     "Works right in your browser with no setup required, making development faster and more efficient.",
// },
// {
//   icon: Zap,
//   title: "Lightning Fast",
//   description:
//     "Get immediate responses and solutions, keeping your development momentum going.",
// },
// {
//   icon: Search,
//   title: "Context Awareness",
//   description:
//     "auraNest understands your project context and makes appropriate suggestions.",
// },
// {
//   icon: Shield,
//   title: "Secure Development",
//   description:
//     "Suggests secure coding practices and helps identify potential vulnerabilities.",
// },
// {
//   icon: Palette,
//   title: "Beautiful UI Design",
//   description:
//     "Creates responsive, production-ready UI components with modern design principles.",
// },
