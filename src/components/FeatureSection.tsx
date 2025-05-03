import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Website Builder for Developers",
    description:
      "AuraUI helps you create stunning, production-ready UIs faster with prebuilt components and customization.",
    image: "/editor-preview-1.png",
    cardBg: "#fff1c1",
    overlayBg: "#fef9e4",
    dotColor: "#F87171", // red-ish
  },
  {
    title: "AI Code Assistant",
    description:
      "Generate code, refactor components, and get inline suggestions powered by AuraNest's AI engine.",
    image: "/editor-preview-2.png",
    cardBg: "#e0f2f1",
    overlayBg: "#b2dfdb",
    dotColor: "#60A5FA", // blue
  },
  // Add more...
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
