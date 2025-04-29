import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section id="get-started" className="py-16 md:py-24 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6 bg-white/10 rounded-full px-4 py-2">
            <Sparkles className="h-5 w-5 mr-2 text-yellow-300" />
            <span className="font-semibold">Start building faster today</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Supercharge Your Development?
          </h2>
          
          <p className="text-lg md:text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Experience the power of Bolt's precise implementation and unlock your full potential as a developer. No more wasting time on repetitive tasks or debugging issues.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#"
              className="bg-white text-indigo-700 hover:bg-indigo-50 font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition flex items-center justify-center"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#"
              className="bg-indigo-800/40 hover:bg-indigo-800/60 border border-indigo-400 text-white font-semibold py-3 px-8 rounded-lg transition flex items-center justify-center"
            >
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;