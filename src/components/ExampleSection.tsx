import React, { useState } from "react";
import { Code, Check, RefreshCw, FileCode } from "lucide-react";

const ExampleSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("web");

  const examples = {
    web: {
      prompt: "Create a responsive navbar with a logo, links, and mobile menu",
      response: `import React, { useState } from 'react';
import { Menu, X, Home } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Home className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold">Brand</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="px-3 py-2 text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#" className="px-3 py-2 text-gray-700 hover:text-indigo-600">Features</a>
            <a href="#" className="px-3 py-2 text-gray-700 hover:text-indigo-600">About</a>
            <a href="#" className="px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Features</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">About</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;`,
    },
    backend: {
      prompt: "Create an Express.js API endpoint that fetches user data",
      response: `// users.controller.js
import { db } from '../services/database.js';

export const getUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    const users = await db.collection('users')
      .find({})
      .skip(skip)
      .limit(limit)
      .toArray();
      
    const total = await db.collection('users').countDocuments();
    
    res.status(200).json({
      users,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Failed to fetch users' });
  }
};

// routes/users.routes.js
import express from 'express';
import { getUsers } from '../controllers/users.controller.js';

const router = express.Router();

router.get('/', getUsers);

export default router;`,
    },
    algorithm: {
      prompt: "Write a function to find the longest palindrome substring",
      response: `/**
 * Find the longest palindrome substring in a string
 * @param {string} s - The input string
 * @return {string} - The longest palindrome substring
 */
function longestPalindrome(s) {
  if (!s || s.length < 1) return "";
  
  let start = 0;
  let maxLength = 1;
  
  // Helper function to expand around center
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currLength = right - left + 1;
      if (currLength > maxLength) {
        maxLength = currLength;
        start = left;
      }
      left--;
      right++;
    }
  }
  
  // Check each position as potential center
  for (let i = 0; i < s.length; i++) {
    // For odd length palindromes
    expandAroundCenter(i, i);
    
    // For even length palindromes
    expandAroundCenter(i, i + 1);
  }
  
  return s.substring(start, start + maxLength);
}

// Example usage
console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(longestPalindrome("cbbd"));  // "bb"
console.log(longestPalindrome("a"));     // "a"
console.log(longestPalindrome("ac"));    // "a"`,
    },
  };

  return (
    <section id="examples" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            See AuraNest in Action
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            From UI components to algorithms, AuraNest helps you implement
            solutions quickly and accurately.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-gray-100 p-4 border-b border-gray-200">
            <div className="flex space-x-2 overflow-x-auto sm:justify-center">
              <button
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  activeTab === "web"
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("web")}
              >
                <span className="flex items-center">
                  <Code className="h-4 w-4 mr-2" />
                  Web UI
                </span>
              </button>
              <button
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  activeTab === "backend"
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("backend")}
              >
                <span className="flex items-center">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Backend
                </span>
              </button>
              <button
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  activeTab === "algorithm"
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("algorithm")}
              >
                <span className="flex items-center">
                  <FileCode className="h-4 w-4 mr-2" />
                  Algorithms
                </span>
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Prompt:
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-gray-700">
                  {examples[activeTab as keyof typeof examples].prompt}
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  AuraNest's Response:
                </h3>
                <span className="ml-2 text-sm text-green-600 flex items-center">
                  <Check className="h-4 w-4 mr-1" />
                  Precise Implementation
                </span>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <pre className="text-gray-300 font-mono text-sm">
                  <code>
                    {examples[activeTab as keyof typeof examples].response}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExampleSection;
