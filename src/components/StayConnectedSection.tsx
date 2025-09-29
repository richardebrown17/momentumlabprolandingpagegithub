
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Lock } from "lucide-react";

interface StayConnectedSectionProps {
  onLoginClick: () => void;
}

const StayConnectedSection = ({ onLoginClick }: StayConnectedSectionProps) => {
  const [email, setEmail] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [agreed, setAgreed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginClick();
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-white text-secondary-blue-dark">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Stay Inspired</h2>
        <p className="mb-8 opacity-90 text-center">
          Tactics, strategies, articles, tools and more information about our events and solutions for sales professionals and leaders.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email*</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-white border border-gray-300 text-secondary-blue-dark focus:ring-2 focus:ring-trust-blue-400 focus:border-trust-blue-400"
              required
            />
          </div>
          
          <div>
            <label htmlFor="postalCode" className="block text-sm font-medium mb-2">Postal Code*</label>
            <input
              type="text"
              id="postalCode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="w-full p-3 rounded bg-white border border-gray-300 text-secondary-blue-dark focus:ring-2 focus:ring-trust-blue-400 focus:border-trust-blue-400"
              required
            />
          </div>
          
          <div className="flex items-start gap-3">
            <Checkbox 
              id="terms" 
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked as boolean)}
              className="mt-1"
            />
            <label htmlFor="terms" className="text-sm opacity-90">
              I acknowledge and agree to Momentum's Privacy Policy and Terms of Use referenced below and I agree to be connected to and contacted by Momentum Lab Pro.*
            </label>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-[#4DA1FF] hover:bg-[#4DA1FF]/90 text-white"
            onClick={(e) => {
              e.preventDefault();
              onLoginClick();
            }}
          >
            <Lock className="mr-2 h-4 w-4" />
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default StayConnectedSection;
