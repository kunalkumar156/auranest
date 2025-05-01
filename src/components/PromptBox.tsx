import {
  Figma,
  Paperclip,
  Upload,
  LayoutDashboard,
  Image,
  User,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const endings = [
  " a landing page for my startup...",
  " a login form with validations...",
  " a portfolio layout with animations...",
  " a dashboard with charts and analytics...",
  " a responsive blog template...",
];

const prompts = [
  {
    icon: <User size={14} />,
    label: "Personal Website",
    text: "Ask auraNest to create a personal website with sections for about, projects, and contact...",
  },
  {
    icon: <Image size={14} />,
    label: "Gallery",
    text: "Ask auraNest to create an image gallery with filters and responsive layout...",
  },
  {
    icon: <LayoutDashboard size={14} />,
    label: "Dashboard",
    text: "Ask auraNest to create a dashboard with charts and user activity...",
  },
  {
    icon: <Figma size={14} />,
    label: "Workshop",
    text: "Ask auraNest to create a design workshop interface with real-time preview...",
  },
];

const TypingBox: React.FC = () => {
  const [animatedPart, setAnimatedPart] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [customPrompt, setCustomPrompt] = useState("");

  useEffect(() => {
    if (customPrompt) return;

    const current = endings[sentenceIndex];
    const delay = isDeleting ? 30 : 70;

    const timeout = setTimeout(() => {
      setAnimatedPart(current.slice(0, charIndex));
      if (!isDeleting) {
        if (charIndex < current.length) {
          setCharIndex((prev) => prev + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setSentenceIndex((prev) => (prev + 1) % endings.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, sentenceIndex, customPrompt]);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white text-gray-900 border border-gray-200 px-5 py-3 rounded-[20px] shadow-md transition text-sm font-medium flex flex-col gap-3">
        {/* Text Area */}
        <p className="text-left text-[15px] leading-tight">
          <span className="text-gray-800 font-medium">
            Ask auraNest to create
          </span>
          <span className="text-gray-600">
            {customPrompt ? ` ${customPrompt}` : animatedPart}
          </span>
        </p>

        {/* Actions */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2 text-xs text-gray-500">
            <button className="flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition text-gray-600">
              <Paperclip size={12} />
              Attach
            </button>
            <button className="flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition text-gray-600">
              <Figma size={12} />
              Figma
            </button>
          </div>
          <button className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition duration-300 ease-in">
            <Upload size={14} />
          </button>
        </div>
      </div>

      {/* Prompt Buttons */}
      <div className="flex flex-wrap justify-start gap-2 mt-4">
        {prompts.map((prompt, index) => (
          <button
            key={index}
            onClick={() =>
              setCustomPrompt(prompt.text.replace("Ask auraNest to ", ""))
            }
            className="flex items-center gap-1 bg-white text-gray-700 border border-gray-200 px-3 py-1.5 rounded-full shadow-sm hover:bg-gray-100 transition text-xs"
          >
            {prompt.icon}
            {prompt.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TypingBox;
