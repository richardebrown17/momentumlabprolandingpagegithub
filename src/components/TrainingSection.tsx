
import { BarChart, Target, UserCog, MessageSquare, DollarSign, Users } from "lucide-react";

const trainingItems = [
  {
    icon: MessageSquare,
    title: "Connection with Modern Buyers",
    description: "A buyer-focused methodology to create more engaging experiences for both buyers and sellers across all industries."
  },
  {
    icon: BarChart,
    title: "AI-Powered Learning Paths",
    description: "Personalized training paths adapted to individual strengths and goals, powered by behavioral AI."
  },
  {
    icon: UserCog,
    title: "Interactive Coaching",
    description: "Modernized delivery with a blend of AI insights, real-time feedback, and structured development plans."
  },
  {
    icon: Target,
    title: "Continuous Development",
    description: "Ongoing guidance and reinforcement for all career stages in sales."
  },
  {
    icon: DollarSign,
    title: "Tech-Enhanced Solutions",
    description: "Cutting-edge tools and techniques integrated with modern sales technologies."
  },
  {
    icon: Users,
    title: "Performance Transformation",
    description: "Lasting behavioral change to succeed in both sales performance and career growth."
  }
];

const TrainingSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white text-center">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slateblue">
            Sales Training for Revenue Generating Professionals
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our expertise is in integrating AI-powered training and behavioral insights into sales enablement technologies, weaving it throughout the revenue operations systems within your organization.
          </p>
          <h3 className="text-xl font-semibold text-slateblue">
            Elevate your performance with:
          </h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {trainingItems.map((item) => (
            <div key={item.title} className="bg-[#F8FAFC] p-6 text-center">
              <div className="mb-4 flex justify-center">
                <item.icon size={32} className="text-[#4da1ff]" />
              </div>
              <h4 className="text-lg font-semibold text-slateblue mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
