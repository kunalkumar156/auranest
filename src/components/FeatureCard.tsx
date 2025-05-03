import React from "react";

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
  dotColor = "#D1D5DB",
}) => {
  return (
    <div
      className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-md"
      style={{
        backgroundImage: cardBg?.startsWith("/") ? `url(${cardBg})` : undefined,
        backgroundColor: cardBg?.startsWith("#") ? cardBg : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Image Container */}
      <div className="relative rounded-xl overflow-hidden w-full md:w-1/2 aspect-video transition-transform duration-300 ease-in-out transform hover:scale-105">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: overlayBg }}
        ></div>

        {image && (
          <div>
            <img
              src={image}
              alt={title}
              className="absolute inset-0 object-cover w-[90%] h-[90%] rounded-xl shadow-lg m-auto"
            />
          </div>
        )}

        <div className="absolute top-2 left-2 flex space-x-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: dotColor }}
            ></div>
          ))}
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center md:items-start md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center md:text-left mb-3">
          {title}
        </h2>
        <p className="text-gray-600 text-center md:text-left mb-6">
          {description}
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md px-6 py-3">
          Create Website
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
