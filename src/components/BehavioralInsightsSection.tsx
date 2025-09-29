
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertTriangle, MessageSquare, Lightbulb, BarChart } from "lucide-react";
import DecisionFrameworkVisual from "./DecisionFrameworkVisual";
import MomentumFlowVisual from "./MomentumFlowVisual";

interface BehavioralInsightsSectionProps {
  onLoginClick?: () => void;
}

const BehavioralInsightsSection = ({ onLoginClick }: BehavioralInsightsSectionProps) => {
  const [activeTab, setActiveTab] = useState<'framework' | 'strategy'>('framework');
  
  return (
    <section className="py-20 px-6 bg-[#4DA1FF] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            The Psychology Behind Momentum Lab Pro
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Built on behavioral psychology and narrative science to align with how people naturally make decisions.
          </p>
        </div>
        
        <div className="w-full">
          <div className="bg-white p-6 rounded-none shadow-md h-full">
            <div className="flex gap-4 mb-6 border-b justify-center">
              <button 
                className={`pb-3 px-4 font-semibold text-center ${activeTab === 'framework' ? 'border-b-2 border-trust-blue-600 text-trust-blue-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('framework')}
              >
                Decision Framework
              </button>
              <button 
                className={`pb-3 px-4 font-semibold text-center ${activeTab === 'strategy' ? 'border-b-2 border-trust-blue-600 text-trust-blue-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('strategy')}
              >
                Information Flow
              </button>
            </div>
            
            {activeTab === 'framework' ? (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold mb-6 text-[#4d587c] text-center">From Insight to Impact<br/>Strategy Curve</h3>
                <DecisionFrameworkVisual />
                <div className="mt-8 text-center">
                  <Button 
                    className="w-full max-w-md bg-slateblue hover:bg-slateblue/90 text-lg text-white rounded-none"
                    onClick={onLoginClick}
                  >
                    Request Demo to Join Beta Testing
                  </Button>
                  <p className="text-center text-sm text-gray-500 mt-2">No credit card required</p>
                </div>
              </div>
            ) : (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold mb-4 text-center text-[#4d587c]">Momentum Lab Pro's Intelligence-Action-Learning Loop</h3>
                <p className="text-lg text-center text-gray-600 mb-6 max-w-4xl mx-auto">
                  The first sales automation platform that thinks, acts, and teaches — all at once. 
                  Instant intelligence tied directly to your next step, without hesitation, without confusion.
                </p>
                
                <MomentumFlowVisual />
                
                <div className="mt-12 max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-lg text-[#4DA1FF] mb-3">Built for Confidence</h4>
                      <p className="text-gray-700">
                        Whether you're a seasoned professional or new to sales, our platform shows you why it matters, 
                        and makes you better with every move. Built for people who want to sell with confidence.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-lg text-[#33C1BA] mb-3">Continuous Improvement</h4>
                      <p className="text-gray-700">
                        Every interaction becomes a learning opportunity. The platform doesn't just recommend — 
                        it does the work with you, building your expertise while delivering results.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Button 
                    className="w-full max-w-md bg-slateblue hover:bg-slateblue/90 text-lg text-white rounded-none"
                    onClick={onLoginClick}
                  >
                    Request Demo to Join Beta Testing
                  </Button>
                  <p className="text-center text-sm text-gray-500 mt-2">No credit card required</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehavioralInsightsSection;
