
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const MissionSection = () => (
  <section className="section animate-section bg-[#4DA1FF]">
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Why Momentum?
      </h2>
      
      <div className="mb-6 flex flex-wrap justify-center gap-2">
        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 rounded-none">Behavioral Economics</Badge>
        <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 rounded-none">Narrative Psychology</Badge>
        <Badge className="bg-green-100 text-green-800 hover:bg-green-100 rounded-none">AI-Powered Coaching</Badge>
      </div>
      
      <p className="mt-6 text-lg text-white leading-relaxed">
        Momentum bridges the gap between potential and performance in sales. We empower sellers to become trusted advisors, not just presenters, while driving measurable revenue growth and building a sustainable sales culture. Your team will always have the right words, stories, and tools at their fingertips, giving them the confidence to perform at their best today, not someday.
      </p>
      
      <blockquote className="mt-8 text-lg leading-relaxed italic text-white">
        "The difference between good and great sales teams is not just product knowledge but the ability to navigate psychological conversation points that drive decisions. When sellers fail to communicate value effectively, valuable revenue is left on the table. Momentum Lab Pro solves this critical gap."
        <cite className="block mt-4 text-white font-medium not-italic">
          - Richard E. Brown, Founder of Momentum Lab Pro
        </cite>
      </blockquote>
      
      <div className="mt-8">
        <Button 
          className="bg-white text-[#4DA1FF] hover:bg-white/90 rounded-none"
          size="lg"
          onClick={() => window.location.href = "https://stage.momentumlabpro.io"}
        >
          Start Your Free Trial Today
        </Button>
        <p className="mt-2 text-sm text-white/80">No credit card required • 14-day free trial</p>
      </div>
    </div>
  </section>
);

export default MissionSection;

