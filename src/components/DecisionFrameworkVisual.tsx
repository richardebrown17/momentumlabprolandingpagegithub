
import React from 'react';
import { Brain, Book, LineChart } from 'lucide-react';

const DecisionFrameworkVisual = () => {
  return (
    <div className="relative mt-8 mb-12 px-4">
      {/* Decision Process Cards - Simplified for better readability */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
        {/* Emotional Decision Stage */}
        <div className="bg-[#4da1ff]/10 p-6 rounded-none transition-all hover:shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <Brain className="w-8 h-8 text-[#4da1ff]" />
          </div>
          <h4 className="text-xl font-semibold text-[#4da1ff] mb-2 text-center">Emotional</h4>
          <div className="text-3xl font-bold text-[#4da1ff] text-center mb-2">70%</div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center justify-center">
              <span>Challenge status quo</span>
            </li>
            <li className="flex items-center justify-center">
              <span>Trust building</span>
            </li>
            <li className="flex items-center justify-center">
              <span>Intuitive connection</span>
            </li>
          </ul>
        </div>

        {/* Rational Decision Stage */}
        <div className="bg-[#33c1ba]/10 p-6 rounded-none transition-all hover:shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <Book className="w-8 h-8 text-[#33c1ba]" />
          </div>
          <h4 className="text-xl font-semibold text-[#33c1ba] mb-2 text-center">Rational</h4>
          <div className="text-3xl font-bold text-[#33c1ba] text-center mb-2">20%</div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center justify-center">
              <span>Data analysis</span>
            </li>
            <li className="flex items-center justify-center">
              <span>Clear solutions</span>
            </li>
            <li className="flex items-center justify-center">
              <span>Risk assessment</span>
            </li>
          </ul>
        </div>

        {/* Justifiable Decision Stage */}
        <div className="bg-[#4d587c]/10 p-6 rounded-none transition-all hover:shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <LineChart className="w-8 h-8 text-[#4d587c]" />
          </div>
          <h4 className="text-xl font-semibold text-[#4d587c] mb-2 text-center">Justifiable</h4>
          <div className="text-3xl font-bold text-[#4d587c] text-center mb-2">10%</div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center justify-center">
              <span>Social proof</span>
            </li>
            <li className="flex items-center justify-center">
              <span>Validation</span>
            </li>
            <li className="flex items-center justify-center">
              <span>Testimonials</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-5xl mx-auto">
        <div className="flex overflow-hidden rounded-full">
          <div className="bg-[#4da1ff] h-2 w-[70%]"></div>
          <div className="bg-[#33c1ba] h-2 w-[20%]"></div>
          <div className="bg-[#4d587c] h-2 w-[10%]"></div>
        </div>
      </div>
    </div>
  );
};

export default DecisionFrameworkVisual;
