
import { BarChart, LayoutDashboard, Target } from "lucide-react";

const steps = [
  {
    title: "1. Performance Assessment",
    desc: "Our AI analyzes each seller's approach and current performance level to create personalized development paths. Get instant insights into strengths and growth opportunities.",
    icon: BarChart
  },
  {
    title: "2. Structured Development",
    desc: "Transform scattered training into clear action plans. Get step-by-step guidance, automated feedback, and measurable milestones that keep teams improving and deals closing.",
    icon: LayoutDashboard
  },
  {
    title: "3. Continuous Optimization",
    desc: "Track progress, identify patterns, and adjust strategies in real-time. Our platform helps leaders spend less time managing and more time driving meaningful growth.",
    icon: Target
  }
];

const HowItWorksSection = () => (
  <section className="section">
    <h2 className="text-3xl md:text-4xl font-bold text-slateblue mb-10 text-center">
      How it Works
    </h2>
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
      {steps.map(({ title, desc, icon: Icon }) => (
        <div key={title} className="flex flex-col items-center text-center max-w-xs px-2">
          <div className="w-28 h-28 mb-4 bg-[#1a237e]/5 rounded-full flex items-center justify-center">
            <Icon className="w-14 h-14 text-[#33c1ba]" />
          </div>
          <div className="font-semibold text-lg text-slateblue mb-2">{title}</div>
          <div className="text-graphite text-base opacity-90">{desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorksSection;
