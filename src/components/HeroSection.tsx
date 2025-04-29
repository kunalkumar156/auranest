import React from 'react';
import { ArrowRight, Terminal, Code, Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Expert AI Coding Assistant
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-700 max-w-xl">
              Bolt helps you build faster with precise code implementation and expert guidance across multiple programming languages.
            </p>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
              <a 
                href="#get-started" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition shadow-md hover:shadow-lg flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#examples" 
                className="border border-gray-300 hover:border-indigo-600 text-gray-900 hover:text-indigo-600 font-medium py-3 px-8 rounded-lg transition flex items-center justify-center"
              >
                See Examples
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-white rounded-xl shadow-xl p-6 max-w-md mx-auto transform transition hover:-translate-y-1 hover:shadow-2xl duration-300">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-sm font-medium text-gray-600">
                  <Terminal className="h-4 w-4 inline mr-1" />
                  bolt-terminal
                </div>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <p className="text-green-400">$ Ask Bolt to implement a feature</p>
                <p className="text-purple-400 mt-2">
                  <span className="text-blue-400">Bolt:</span> I'll create that React component for you.
                </p>
                <div className="mt-2 text-gray-300">
                  <span className="text-yellow-400">const</span> FeatureCard = &#123; title, description, icon: Icon &#125; =&gt; &#123;
                </div>
                <div className="ml-4 text-gray-300">
                  <span className="text-yellow-400">return</span> (
                </div>
                <div className="ml-8 text-blue-300">&lt;div className="..."&gt;</div>
                <div className="ml-12 text-blue-300">&lt;Icon className="..." /&gt;</div>
                <div className="ml-12 text-blue-300">&lt;h3&gt;&#123;title&#125;&lt;/h3&gt;</div>
                <div className="ml-12 text-blue-300">&lt;p&gt;&#123;description&#125;&lt;/p&gt;</div>
                <div className="ml-8 text-blue-300">&lt;/div&gt;</div>
                <div className="ml-4 text-gray-300">);</div>
                <div className="text-gray-300">&#125;</div>
                <p className="text-green-400 mt-2 flex items-center">
                  <Sparkles className="h-4 w-4 mr-2" />
                  <span>Component created successfully!</span>
                </p>
              </div>
            </div>
            <div className="absolute -top-5 -right-5 w-20 h-20 bg-purple-100 rounded-full z-[-1]"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-indigo-100 rounded-full z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;