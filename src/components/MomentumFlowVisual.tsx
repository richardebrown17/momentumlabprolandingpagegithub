
import React from 'react';
import { Brain, Zap, Users, TrendingUp } from 'lucide-react';

const MomentumFlowVisual = () => {
  return (
    <div className="relative mt-8 mb-12 px-4">
      {/* Circular Flow Diagram */}
      <div className="relative max-w-5xl mx-auto">
        {/* Central Branding */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-white rounded-full p-4 md:p-6 shadow-lg border-2 border-gray-200">
            <div className="text-center">
              <h3 className="text-sm md:text-lg font-bold text-[#4DA1FF] mb-1">Momentum Lab Pro</h3>
              <p className="text-xs md:text-sm text-gray-600">Intelligence-Action-Learning Loop</p>
            </div>
          </div>
        </div>
        
        {/* Circular Flow Items */}
        <div className="relative w-full h-[600px] md:h-[650px] lg:h-[700px]">
          {/* Strategic Intelligence - Top Left */}
          <div className="absolute top-0 left-0 w-44 md:w-52 lg:w-60">
            <div className="bg-[#4da1ff]/10 p-3 md:p-4 lg:p-6 rounded-lg transition-all hover:shadow-lg border border-[#4da1ff]/20">
              <div className="flex items-center justify-center mb-2 md:mb-3">
                <Brain className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-[#4da1ff]" />
              </div>
              <h4 className="text-sm md:text-lg lg:text-xl font-semibold text-[#4da1ff] mb-1 md:mb-2 text-center">Strategic Intelligence</h4>
              <p className="text-xs md:text-sm text-gray-700 text-center leading-relaxed">
                AI-powered insights that identify optimal next steps
              </p>
            </div>
          </div>

          {/* Seamless Execution - Top Right */}
          <div className="absolute top-0 right-0 w-44 md:w-52 lg:w-60">
            <div className="bg-[#33c1ba]/10 p-3 md:p-4 lg:p-6 rounded-lg transition-all hover:shadow-lg border border-[#33c1ba]/20">
              <div className="flex items-center justify-center mb-2 md:mb-3">
                <Zap className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-[#33c1ba]" />
              </div>
              <h4 className="text-sm md:text-lg lg:text-xl font-semibold text-[#33c1ba] mb-1 md:mb-2 text-center">Seamless Execution</h4>
              <p className="text-xs md:text-sm text-gray-700 text-center leading-relaxed">
                One-click implementation without hesitation or confusion
              </p>
            </div>
          </div>

          {/* Intelligent Coaching - Bottom Left */}
          <div className="absolute bottom-0 left-0 w-44 md:w-52 lg:w-60">
            <div className="bg-[#4da1ff]/10 p-3 md:p-4 lg:p-6 rounded-lg transition-all hover:shadow-lg border border-[#4da1ff]/20">
              <div className="flex items-center justify-center mb-2 md:mb-3">
                <Users className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-[#4da1ff]" />
              </div>
              <h4 className="text-sm md:text-lg lg:text-xl font-semibold text-[#4da1ff] mb-1 md:mb-2 text-center">Intelligent Coaching</h4>
              <p className="text-xs md:text-sm text-gray-700 text-center leading-relaxed">
                Real-time guidance explaining why actions drive results
              </p>
            </div>
          </div>

          {/* Continuous Momentum - Bottom Right */}
          <div className="absolute bottom-0 right-0 w-44 md:w-52 lg:w-60">
            <div className="bg-green-100 p-3 md:p-4 lg:p-6 rounded-lg transition-all hover:shadow-lg border border-green-200">
              <div className="flex items-center justify-center mb-2 md:mb-3">
                <TrendingUp className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-green-600" />
              </div>
              <h4 className="text-sm md:text-lg lg:text-xl font-semibold text-green-600 mb-1 md:mb-2 text-center">Continuous Momentum</h4>
              <p className="text-xs md:text-sm text-gray-700 text-center leading-relaxed">
                Accelerated learning that compounds with every interaction
              </p>
            </div>
          </div>

          {/* Connecting Arrows - Adjusted for better spacing */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid meet">
            {/* Top arc */}
            <path
              d="M 120 100 Q 200 40 280 100"
              fill="none"
              stroke="#4DA1FF"
              strokeWidth="2"
              strokeDasharray="5,5"
              opacity="0.6"
            />
            <polygon
              points="275,95 285,100 275,105"
              fill="#4DA1FF"
              opacity="0.6"
            />
            
            {/* Right arc */}
            <path
              d="M 320 140 Q 380 250 320 360"
              fill="none"
              stroke="#33C1BA"
              strokeWidth="2"
              strokeDasharray="5,5"
              opacity="0.6"
            />
            <polygon
              points="315,355 320,365 325,355"
              fill="#33C1BA"
              opacity="0.6"
            />
            
            {/* Bottom arc */}
            <path
              d="M 280 400 Q 200 460 120 400"
              fill="none"
              stroke="#4DA1FF"
              strokeWidth="2"
              strokeDasharray="5,5"
              opacity="0.6"
            />
            <polygon
              points="125,405 115,400 125,395"
              fill="#4DA1FF"
              opacity="0.6"
            />
            
            {/* Left arc */}
            <path
              d="M 80 360 Q 20 250 80 140"
              fill="none"
              stroke="#16A34A"
              strokeWidth="2"
              strokeDasharray="5,5"
              opacity="0.6"
            />
            <polygon
              points="85,145 80,135 75,145"
              fill="#16A34A"
              opacity="0.6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MomentumFlowVisual;
