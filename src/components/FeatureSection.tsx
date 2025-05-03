import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Website Builder",
    description:
      "AuraUI provides a comprehensive suite of tools that empower you to create stunning, high-performance, production-ready user interfaces faster than ever before. With an extensive library of prebuilt components and customization options, you can design and deploy beautiful websites without starting from scratch, significantly reducing development time and effort.",
    image: "/features/feature1.webp",
    cardBg: "/gradients/gr-purple.png",
    overlayBg: "#f3e8ff",
    dotColor: "#E9D5FF", // light purple
  },
  {
    title: "AI Code Assistant",
    description:
      "AuraNest's cutting-edge AI engine assists you in generating code, refactoring components, and offering inline suggestions to optimize your development workflow. This intelligent assistant understands your coding needs, guiding you through best practices and suggesting improvements in real-time, error-free code faster and more intuitive than ever before.",
    image: "/editor-preview-2.png",
    cardBg: "/gradients/gr-blue.png",
    overlayBg: "#e0f2f1",
    dotColor: "#BFDBFE", // light blue
  },
  {
    title: "Precise Codes",
    description:
      "AuraNest delivers exactly what you ask for—no extra, no less. The AI-powered tool ensures that your code is implemented exactly as requested, maintaining the highest standards of precision and clarity. Whether it's complex logic or simple tasks, you can trust that the generated code will match your requirements perfectly, saving you time and eliminating errors.",
    image: "/editor-preview-1.png",
    cardBg: "/gradients/gr-orange.png",
    overlayBg: "#fef9e4",
    dotColor: "#FECACA", // light red
  },
  {
    title: "Cross-Language",
    description:
      "With AuraNest, you get expert assistance across a wide range of programming languages and frameworks. Whether you're working with JavaScript, Python, Java, or any other language, AuraNest's AI assistant provides guidance on best practices to ensure that your code is not only functional but also efficient and scalable across different environments.",
    image: "/editor-preview-4.png",
    cardBg: "/gradients/gr-teal.png",
    overlayBg: "#ccfbf1",
    dotColor: "#99F6E4", // light teal
  },
  {
    title: "Educational Insights",
    description:
      "AuraNest makes learning part of the development process. As you build, you'll receive clear explanations and contextual insights for every code solution it generates. This ensures that you understand the 'why' behind every suggestion and refactor, helping you not only complete your projects but also grow your coding knowledge and skills with each step.",
    image: "/editor-preview-5.png",
    cardBg: "/gradients/gr-pink.png",
    overlayBg: "#ffe4e6",
    dotColor: "#FBCFE8", // light pink
  },
  {
    title: "Easy Integration",
    description:
      "AuraNest is designed to integrate seamlessly into your existing workflow, working directly within your browser with no setup required. This effortless integration allows you to start coding right away, eliminating the need for complex installations or configurations. Your development process becomes faster, more efficient, and entirely hassle-free.",
    image: "/editor-preview-6.png",
    cardBg: "/gradients/gr-yellow.png",
    overlayBg: "#fef9c3",
    dotColor: "#FEF08A", // light yellow
  },
  {
    title: "Lightning Fast",
    description:
      "AuraNest is optimized to deliver instant responses, keeping your development momentum uninterrupted. Whether you're generating code or troubleshooting issues, the assistant's lightning-fast suggestions and solutions ensure that you never lose focus, making the coding process more productive and enjoyable.",
    image: "/editor-preview-7.png",
    cardBg: "/gradients/gr-red.png",
    overlayBg: "#fcdcdc",
    dotColor: "#FCA5A5", // light red
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
