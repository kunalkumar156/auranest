import React, { useState, useEffect } from "react";
import { Github, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed md:top-0 md:left-0 w-full z-50">
      <div
        className={`shadow-md border rounded-[25px] w-[91%] m-4 max-w-5xl mx-auto transition-all duration-300 ${
          isScrolled
            ? "bg-transparent backdrop-blur-3xl shadow-lg py-3"
            : "bg-gray-50 backdrop-blur-3xl py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img className="h-8 w-8" src="/nest-logo.png" alt="/nest-logo" />
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-gray-900 font-medium transition"
            >
              Features
            </a>

            <a
              href="#faq"
              className="text-gray-700 hover:text-gray-900 font-medium transition"
            >
              FAQ
            </a>
          </nav>

          <div className="hidden md:flex">
            <div className="flex space-x-2">
              <a href="https://www.auraui.com" target="_blank" className=" ">
                <div className="flex items-center p-2 border border-gray-200 text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-100 justify-center rounded-xl shadow-sm transition duration-300 ease-in">
                  <img
                    src="/auraui-logo.png"
                    alt="auraui-logo"
                    className="h-[20px] w-[20px] rounded-full"
                  />
                </div>
              </a>
              <a
                href="https://github.com/kunalkumar156/auraNest"
                target="_blank"
                className=" "
              >
                <div className="flex items-center p-2 border border-gray-200 text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-100 justify-center rounded-xl shadow-sm transition duration-300 ease-in">
                  <Github size={20} />
                </div>
              </a>
            </div>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-16 left-0 right-0 shadow-md py-4 px-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray-700 hover:text-indigo-600 font-medium py-2 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#examples"
                className="text-gray-700 hover:text-indigo-600 font-medium py-2 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Examples
              </a>
              <a
                href="#faq"
                className="text-gray-700 hover:text-indigo-600 font-medium py-2 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#get-started"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md text-center transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
