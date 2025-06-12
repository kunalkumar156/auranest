import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="relative overflow-hidden md:pb-[16rem] pb-[10rem]">
      <div className="pt-[20px] md:pt-[10px] md:pb-0  ">
        <div className="bg-white text-gray-700">
          <div className="pt-10 md:pt-20">
            <div className="flex flex-col items-center justify-center text-center px-4">
              <div className="mb-6">
                <a
                  href="https://www.auraui.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="h-6 md:h-8"
                    src="https://www.auraui.com/logo-light.png"
                    alt="Aura UI Logo"
                  />
                </a>
              </div>

              {/* Heading */}
              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
                Open source builder.
              </h1>
              <p className="md:text-lg text-md text-gray-500 md:mb-8">
                Build intuitive UIs with clarity, precision, and speed.
              </p>

              <h1
                className="md:hidden lg:block absolute bottom-[-2rem] md:bottom-[-7rem] left-1/2 transform -translate-x-1/2 text-[5rem] md:text-[16rem] font-extrabold tracking-tighter bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 text-transparent bg-clip-text z-0 pointer-events-none"
                style={{ WebkitTextFillColor: "transparent" }}
              >
                auraNest
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
