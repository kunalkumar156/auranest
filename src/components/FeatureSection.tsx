import React from "react";
import {
  Code,
  Rocket,
  BookOpen,
  Share2,
  Zap,
  Search,
  Shield,
  Palette,
} from "lucide-react";
import FeatureCard from "./FeatureCard";

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: "Precise Code Implementation",
      description:
        "auraNest implements exactly what you ask for—nothing more, nothing less, ensuring your code is exactly as you need it.",
    },
    {
      icon: Rocket,
      title: "Cross-Language Expertise",
      description:
        "Get expert assistance across multiple programming languages, frameworks, and best practices.",
    },
    {
      icon: BookOpen,
      title: "Educational Insights",
      description:
        "Learn while building with clear explanations and context for every code solution.",
    },
    {
      icon: Share2,
      title: "Seamless Integration",
      description:
        "Works right in your browser with no setup required, making development faster and more efficient.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Get immediate responses and solutions, keeping your development momentum going.",
    },
    {
      icon: Search,
      title: "Context Awareness",
      description:
        "auraNest understands your project context and makes appropriate suggestions.",
    },
    {
      icon: Shield,
      title: "Secure Development",
      description:
        "Suggests secure coding practices and helps identify potential vulnerabilities.",
    },
    {
      icon: Palette,
      title: "Beautiful UI Design",
      description:
        "Creates responsive, production-ready UI components with modern design principles.",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What auraNest Can Do For You
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Experience the power of an AI assistant specifically designed for
            developers, with features that help you code faster and better.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
