import { Figma, Paperclip } from "lucide-react";
import React, { useEffect, useState } from "react";

const sentences = [
  "Ask auraNest to create a landing page for my startup...",
  "Ask auraNest to create a login form with validations...",
  "Ask auraNest to create a portfolio layout with animations...",
  "Ask auraNest to create a dashboard with charts and analytics...",
  "Ask auraNest to create a responsive blog template...",
];

const prompts = [
  "Build a markdown editor using React and Tailwind CSS.",
  "Create an expense tracker with local storage support.",
  "Design an e-commerce product card with hover animations.",
  "Develop a kanban board with draggable tasks using React DnD.",
];

const TypingBox: React.FC = () => {
  const [currentSentence, setCurrentSentence] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = sentences[sentenceIndex];
    const delay = isDeleting ? 30 : 70;

    const timeout = setTimeout(() => {
      setCurrentSentence(current.slice(0, charIndex) + "...");
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
          setSentenceIndex((prev) => (prev + 1) % sentences.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, sentenceIndex]);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white text-gray-900  border-gray-200 px-4 py-2 border rounded-[25px] shadow-md  transition text-sm font-medium">
        <p className="text-lg md:text-xl font-medium min-h-[3rem]">
          {currentSentence}
        </p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1 cursor-pointer hover:text-white transition">
              <Paperclip />
              Attach
            </span>
            <span className="flex items-center gap-1 cursor-pointer hover:text-white transition">
              <Figma />
              Import Figma
            </span>
          </div>
          <div className="w-10 h-6 bg-gray-700 rounded-full flex justify-end p-1">
            <div className="bg-white w-4 h-4 rounded-full" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {prompts.map((prompt, index) => (
          <button
            key={index}
            className="bg-white text-gray-900 border border-gray-200 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition text-sm font-medium"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TypingBox;
