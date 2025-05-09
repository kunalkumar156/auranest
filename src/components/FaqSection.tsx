import React, { useState, useCallback } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
  index: number;
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
}

const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answer,
  index,
  openIndex,
  setOpenIndex,
}) => {
  const isOpen = index === openIndex;

  const toggleOpen = useCallback(() => {
    setOpenIndex(index === openIndex ? null : index);
  }, [index, setOpenIndex]);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <h3 className="text-md md:text-xl font-medium text-gray-800">
          {question}
        </h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="mt-3 text-gray-600"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "What is auraNest?",
      answer: (
        <p>
          auraNest is an expert AI assistant and exceptional senior software
          developer with vast knowledge across multiple programming languages,
          frameworks, and best practices. It's designed to help you implement
          exactly what you need in your projects.
        </p>
      ),
    },
    {
      question: "How can auraNest help me with my coding projects?",
      answer: (
        <p>
          auraNest can help you with a wide range of tasks including code
          implementation, debugging, architecture design, optimization, and
          more. Whether you need to create a component, set up a full-stack
          application, or solve a complex algorithm, auraNest can provide
          precise solutions tailored to your needs.
        </p>
      ),
    },
    {
      question: "What programming languages does auraNest support?",
      answer: (
        <p>
          auraNest supports a wide range of programming languages including
          JavaScript, TypeScript, Python, Java, C#, Go, Rust, PHP, Ruby, and
          many more. It also has expertise in various frameworks and libraries
          such as React, Vue, Angular, Node.js, Django, Spring Boot, .NET, and
          others.
        </p>
      ),
    },
    {
      question: "Can auraNest help with database design and implementation?",
      answer: (
        <p>
          Yes, auraNest has expertise in database design, schema optimization,
          and query performance. It can help with SQL and NoSQL databases,
          including PostgreSQL, MySQL, MongoDB, and others. auraNest can assist
          with everything from database schema design to writing efficient
          queries and setting up ORM configurations.
        </p>
      ),
    },
    {
      question: "Is auraNest available 24/7?",
      answer: (
        <p>
          Yes, auraNest is available 24/7 to assist you with your development
          needs. You can ask for help anytime and receive precise
          implementations and guidance regardless of your time zone.
        </p>
      ),
    },
    {
      question: "How does auraNest differ from other coding assistants?",
      answer: (
        <p>
          auraNest stands out by providing precise implementations that match
          exactly what you request—nothing more, nothing less. It understands
          both the technical details and the broader context of software
          development, allowing it to provide solutions that are not just
          functionally correct but also follow best practices and industry
          standards.
        </p>
      ),
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className=" -mt-2 md:-mt-20 -mb-[75px] md:-mb-32 text-[4rem] md:text-[13rem] font-bold text-transparent bg-clip-text animate-gradientMove bg-gray-200 transition-all duration-700 ease-in-out ">
            Questions.
          </p>
        </div>
        <div className="p-10 md:pt-28  max-w-6xl mx-auto rounded-[25px] shadow-lg bg-gray-200">
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                index={index}
                question={faq.question}
                answer={faq.answer}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
