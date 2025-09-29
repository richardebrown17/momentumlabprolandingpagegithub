import { Badge } from "@/components/ui/badge";
import { Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LeadMagnetSectionProps {
  onLoginClick: () => void;
}

const LeadMagnetSection = ({ onLoginClick }: LeadMagnetSectionProps) => {
  const stats = [
    {
      value: "63%",
      label: "of buyers say salespeople are not trustworthy",
      source: "linkedin.com"
    },
    {
      value: "33%",
      label: "of a sales rep's time is spent actively selling - the rest on admin or prospecting",
      source: "spotio.com"
    },
    {
      value: "84%",
      label: "of sales training content is forgotten within 3 months without reinforcement",
      source: "spotio.com"
    },
    {
      value: "42%",
      label: "of salespeople rank prospecting as the hardest part of their job",
      source: "spotio.com"
    },
    {
      value: "50%",
      label: "boost in net sales per employee with continuous training",
      source: "spotio.com"
    },
    {
      value: "84%",
      label: "of salespeople using AI say it improved and accelerated customer interactions",
      source: "spotio.com"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-4 bg-amber-100 text-amber-800 border-amber-300 px-3 py-1 rounded-none">
            <Clock className="w-4 h-4 mr-1" /> Limited Time Opportunity
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slateblue">
            Sales Teams Are Leaving Revenue on the Table
          </h2>
          
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            The problem is not your product but how your team communicates value. Undercoached and underequipped sales teams miss critical psychological conversation points that drive decisions. Most sellers are one great conversation away from a breakthrough. The challenge is they never receive the training, coaching, or structure to build it. Momentum closes that gap.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 border border-gray-100">
                <div className="text-4xl md:text-5xl font-bold text-[#379998] mb-3">{stat.value}</div>
                <p className="text-gray-700 text-sm md:text-base">{stat.label}</p>
                <div className="text-xs text-gray-500 mt-2">Source: {stat.source}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center bg-gray-50 p-6 border border-gray-200 mx-auto max-w-xl">
            <h3 className="text-xl font-semibold mb-4 text-slateblue">Risks of Inaction:</h3>
            <ul className="space-y-3 text-left inline-block">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-1" />
                <span>Lost opportunities due to ineffective value communication</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-1" />
                <span>Decreased win rates from misaligned messaging</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-1" />
                <span>Extended sales cycles from poor narrative structure</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-1" />
                <span>Revenue targets missed due to inadequate coaching</span>
              </li>
            </ul>
          </div>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed">
            Stop losing revenue. Start building momentum. Schedule your demo today.
          </p>
          
          <Button 
            className="mt-6 bg-[#379998] hover:bg-[#2f8988] text-white rounded-none"
            size="lg"
            onClick={onLoginClick}
          >
            Request Demo to Join Beta Testing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
