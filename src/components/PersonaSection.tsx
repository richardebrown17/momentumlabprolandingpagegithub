import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BusinessCategories } from './persona/BusinessCategories';
import { PersonaChart } from './persona/PersonaChart';
import { PersonaDetails } from './persona/PersonaDetails';
import { personas } from './persona/personaData';

const PersonaSection = ({ onLoginClick }: { onLoginClick: () => void }) => {
  const [activePersona, setActivePersona] = useState(personas[0]);
  
  const handlePersonaChange = (value: string) => {
    const selected = personas.find(p => p.id === value);
    if (selected) {
      setActivePersona(selected);
    }
  };

  return (
    <section className="bg-white text-[#14303e]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-[#14303e]">Find Your Sales Persona</h2>
            <p className="text-xl text-[#14303e]/90 mb-8">
              Momentum adapts to your unique selling style to maximize your strengths across all industries
            </p>
            <BusinessCategories />
          </div>

          <div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 border-b border-[#14303e]/20 pb-4">
                <h2 className="text-3xl font-bold text-[#14303e]">Sales Persona Profile</h2>
                <Select onValueChange={handlePersonaChange} defaultValue={activePersona.id}>
                  <SelectTrigger className="w-[180px] bg-white/10 border-[#14303e]/20 text-[#14303e]">
                    <SelectValue placeholder="Select persona" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {personas.map((persona) => (
                      <SelectItem 
                        key={persona.id} 
                        value={persona.id}
                        className="cursor-pointer text-[#14303e]"
                      >
                        {persona.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <PersonaChart activePersona={activePersona} />
              <PersonaDetails activePersona={activePersona} onLoginClick={onLoginClick} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonaSection;
