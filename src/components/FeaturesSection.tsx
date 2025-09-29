
import { BookText, Target, Cog, MessageSquare, Search, Bell } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const features = [
  {
    icon: BookText,
    title: "AI-Guided Sales Enablement",
    text: "Transform scattered training into structured success paths. Our platform provides personalized coaching that adapts to each seller's approach, helping new and experienced team members consistently improve performance and close more deals.",
    accentColor: "bg-teal/80",
  },
  {
    icon: Target,
    title: "Behavioral Coaching at Scale",
    text: "Stop losing ground when teams struggle. Our AI-powered behavioral models calibrate coaching to each seller's style, providing actionable feedback and measurable improvement paths that reduce missed targets and limit turnover.",
    accentColor: "bg-slateblue/90",
  },
  {
    icon: Cog,
    title: "Streamlined Revenue Operations",
    text: "Replace scattered workflows with a unified system. From onboarding to ongoing development, our platform provides structured, measurable paths to results while automating repetitive tasks and creating clear visibility into performance.",
    accentColor: "bg-softlime/60",
  },
  {
    icon: MessageSquare,
    title: "Daily Coaching Feed",
    text: "Personalized sales insights and recommendations delivered daily based on your activity and goals, ensuring continuous improvement and engagement with your sales objectives.",
    accentColor: "bg-teal/80",
  },
  {
    icon: Search,
    title: "Storytelling Builder",
    text: "Create compelling sales narratives that resonate with your prospects and drive conversions. Our AI-powered tool helps craft messages that connect and convince.",
    accentColor: "bg-slateblue/90",
  },
  {
    icon: Bell,
    title: "Next Best Move Generator",
    text: "AI-powered recommendations for your next action to move deals forward efficiently. Get intelligent suggestions on timing, approach, and content to maximize your success rate.",
    accentColor: "bg-softlime/60",
  },
];

const FeaturesSection = () => (
  <section className="section relative bg-[linear-gradient(90deg,#F7F9FB_60%,#E1F4F4_100%)]">
    <h2 className="text-3xl md:text-4xl font-bold text-slateblue mb-10 text-center">
      Platform Features
    </h2>
    <div className="max-w-6xl mx-auto px-4">
      <Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent className="-ml-2 md:-ml-4">
          {features.map((feature, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
              <div className="p-7 group hover:shadow-lg transition-all duration-200 border border-cloudwhite/50 bg-white h-full">
                <div className={`w-14 h-14 flex items-center justify-center mb-6 ${feature.accentColor}`}>
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slateblue mb-3">{feature.title}</h3>
                <p className="text-graphite text-base leading-relaxed">{feature.text}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-8">
          <CarouselPrevious className="relative static translate-y-0" />
          <CarouselNext className="relative static translate-y-0" />
        </div>
      </Carousel>
    </div>
  </section>
);

export default FeaturesSection;
