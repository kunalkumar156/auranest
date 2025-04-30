import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg md:text-xl font-medium text-gray-900">
          {question}
        </h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && <div className="mt-3 text-gray-600">{answer}</div>}
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

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Get answers to common questions about auraNest and how it can help
            you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
