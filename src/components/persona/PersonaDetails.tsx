
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PersonaType } from './personaData';
import { Check } from "lucide-react";
import { PersonaAssessment } from "./PersonaAssessment";

interface PersonaDetailsProps {
  activePersona: PersonaType;
  onLoginClick: () => void;
}

export const PersonaDetails = ({ activePersona, onLoginClick }: PersonaDetailsProps) => {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  const handleAssessmentClick = () => {
    setIsAssessmentOpen(true);
  };

  return (
    <div className="mt-8 space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">Primary Persona: {activePersona.title}</h3>
        <p className="text-lg opacity-90">{activePersona.primaryDescription}</p>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">How Momentum Helps {activePersona.title}</h3>
        <p className="text-lg mb-6">{activePersona.benefit}</p>
        <Button 
          className="bg-[#4DA1FF] text-white hover:bg-[#4DA1FF]/90" 
          style={{ borderRadius: '0' }}
          onClick={handleAssessmentClick}
        >
          Take Sales Persona Assessment
        </Button>
      </div>

      <div className="bg-white/10 p-6" style={{ borderRadius: '0' }}>
        <h4 className="text-xl font-bold mb-4">Personalized For You</h4>
        <ul className="space-y-4">
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-[#33C3F0] mt-1" />
            <span>Customized coaching based on your persona</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-[#33C3F0] mt-1" />
            <span>Tailored strategies for your sales style</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-[#33C3F0] mt-1" />
            <span>Actionable insights to leverage your strengths</span>
          </li>
        </ul>
      </div>

      <PersonaAssessment 
        isOpen={isAssessmentOpen} 
        onClose={() => setIsAssessmentOpen(false)} 
      />
    </div>
  );
};
