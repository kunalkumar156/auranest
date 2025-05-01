import {
  Figma,
  Paperclip,
  Upload,
  LayoutDashboard,
  Image,
  User,
} from "lucide-react";
import React, { useEffect, useState, useRef } from "react";

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
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [textAreaHeight, setTextAreaHeight] = useState("auto");

  useEffect(() => {
    if (customPrompt) {
      setAnimatedPart(""); // Immediately clear animated text if user starts typing
      return;
    }

    if (isFocused) {
      return;
    }

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
  }, [charIndex, isDeleting, sentenceIndex, customPrompt, isFocused]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!customPrompt) {
      // Restart animation only if the user hasn't typed anything
      setCharIndex(0);
      setIsDeleting(false);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setCustomPrompt(value);
    textareaRef.current!.style.height = "auto";
    textareaRef.current!.style.height = `${
      textareaRef.current!.scrollHeight
    }px`;
    setTextAreaHeight(textareaRef.current!.style.height);
  };

  const displayedText =
    customPrompt || (isFocused ? "" : `Ask auraNest to create${animatedPart}`);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white text-gray-900 border border-gray-200 px-5 py-4 rounded-[20px] shadow-md transition text-sm font-medium flex flex-col gap-3">
        {/* Text Area */}
        <div className="relative">
          <textarea
            ref={textareaRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={displayedText}
            onChange={handleTextChange}
            placeholder={
              !isFocused && !animatedPart ? "Ask auraNest to create..." : ""
            }
            className={`w-full outline-none text-[15px] leading-tight bg-transparent resize-none overflow-y-auto max-h-[calc(6*1.5rem)] ${
              customPrompt
                ? "text-gray-700"
                : isFocused
                ? "text-gray-700"
                : "text-gray-300"
            } ${
              animatedPart && !isFocused && !customPrompt
                ? "animate-pulse-cursor"
                : ""
            }`}
            style={{ height: textAreaHeight }}
          />
          {textAreaHeight > "calc(6*1.5rem)" && (
            <div className="absolute inset-y-0 right-0 w-2 bg-gradient-to-l from-transparent to-gray-200 rounded-r-[20px]">
              <div className="absolute top-0 right-0 h-full w-0.5 bg-gray-300 rounded-r" />
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2 text-xs text-gray-500">
            <button className="flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-200 ease-in text-gray-700">
              <Paperclip size={12} />
              Attach
            </button>
            <button className="flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-200 ease-in text-gray-700">
              <Figma size={12} />
              Figma
            </button>
          </div>
          <button className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition duration-200 ease-in">
            <Upload size={14} />
          </button>
        </div>
      </div>

      {/* Prompt Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {prompts.map((prompt, index) => (
          <button
            key={index}
            onClick={() =>
              setCustomPrompt(
                prompt.text.replace("Ask auraNest to create ", ""),
              )
            }
            className="flex items-center gap-1 bg-gray-50 text-gray-700 border border-gray-200 px-3 py-1.5 rounded-[20px] shadow-md hover:bg-gray-200 duration-200 ease-in transition text-sm"
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
