import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Website Builder for Developers",
    description:
      "AuraUI helps you create stunning, production-ready UIs faster with prebuilt components and customization.",

    image: "/editor-preview-3.png",
    cardBg: "/gr-purple.png",
    overlayBg: "#f3e8ff",
    dotColor: "#A855F7", // purple
  },
  {
    title: "AI Code Assistant",
    description:
      "Generate code, refactor components, and get inline suggestions powered by AuraNest's AI engine.",
    image: "/editor-preview-2.png",
    cardBg: "/gr-blue.png",
    overlayBg: "#b2dfdb",
    dotColor: "#60A5FA", // blue
  },
  {
    title: "Precise Code Implementation",
    description:
      "auraNest implements exactly what you ask for—nothing more, nothing less, ensuring your code is exactly as you need it.",
    image: "/editor-preview-1.png",
    cardBg: "/gr-orange.png",
    overlayBg: "#fef9e4",
    dotColor: "#F87171", // red-ish
  },

  {
    title: "Cross-Language Expertise",
    description:
      "Get expert assistance across multiple programming languages, frameworks, and best practices.",
    image: "/editor-preview-4.png",
    cardBg: "/gr-teal.png",
    overlayBg: "#ccfbf1",
    dotColor: "#14B8A6", // teal
  },
  {
    title: "Educational Insights",
    description:
      "Learn while building with clear explanations and context for every code solution.",
    image: "/editor-preview-5.png",
    cardBg: "/gr-pink.png",
    overlayBg: "#ffe4e6",
    dotColor: "#EC4899", // pink
  },
  {
    title: "Seamless Integration",
    description:
      "Works right in your browser with no setup required, making development faster and more efficient.",
    image: "/editor-preview-6.png",
    cardBg: "/gr-yellow.png",
    overlayBg: "#fef9c3",
    dotColor: "#EAB308", // yellow
  },
  {
    title: "Lightning Fast",
    description:
      "Get immediate responses and solutions, keeping your development momentum going.",
    image: "/editor-preview-7.png",
    cardBg: "/gr-red.png",
    overlayBg: "#fee2e2",
    dotColor: "#EF4444", // red
  },
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 space-y-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What auraNest Can Do For You
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Experience the power of an AI assistant specifically designed for
            developers, with features that help you code faster and better.
          </p>
        </div>

        {features.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
