import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Momentum Lab Pro gives me the visibility I need as a sales leader. It doesn't just coach reps—it equips managers with real insight into team performance and provides structured tools to scale that support across diverse markets. It's solving one of the biggest challenges in sales today: how to onboard, train, and retain strong performers.",
    author: "Casey Morgan",
    role: "Vice President of Sales",
    company: "TechFlow Solutions",
    logo: "/lovable-uploads/126d3854-81df-46ec-9f1d-5a6defd32789.png"
  },
  {
    quote: "We're dealing with rising costs, tighter labor markets, and complex onboarding needs across our distributed offices. Momentum Lab Pro bridges that gap. It delivers elite-level training that's digestible and repeatable for all our teams—no matter where they're located. It's like having a world-class coach in every office.",
    author: "Jordan Ellis",
    role: "President",
    company: "Regional Healthcare Network",
    logo: "/lovable-uploads/1cf744e3-df23-4adc-a05f-ea885f5c8286.png"
  },
  {
    quote: "Most sales professionals are left to figure things out on their own. Momentum Lab Pro fills that void. It keeps my team aligned, focused, and confident with coaching that feels like it was built just for them. We're seeing better engagement, better follow-up, and real movement toward our revenue goals.",
    author: "Taylor Reed",
    role: "Chief Revenue Officer",
    company: "Enterprise Technology Group",
    logo: "/lovable-uploads/0d25162c-f81b-4eba-9fa4-38cbdb4bdc80.png"
  },
  {
    quote: "We used to lose deals because our follow-ups lacked clarity and our proposals didn't speak the client's language. Momentum Lab Pro changed that. It gives us plug-and-play resources to guide reps through every step of the process, while still sounding authentic. It's more than just automation—it's strategic sales infrastructure.",
    author: "Devon Banks",
    role: "CEO",
    company: "Manufacturing Solutions Alliance",
    logo: "/lovable-uploads/4880c815-fb66-48fc-b0c0-ffe37c368c17.png"
  }
];

const TestimonialsCarousel = () => {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slateblue mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from sales professionals who are transforming their results with Momentum
          </p>
        </div>
        
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <div className="bg-white p-8 rounded-xl shadow-md text-center">
                  <div className="flex flex-col items-center justify-center mb-6">
                    <img 
                      src={testimonial.logo}
                      alt={`${testimonial.company} logo`}
                      className="h-10 w-auto object-contain mb-4"
                    />
                    <div className="flex text-[#FFC107]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-xl italic text-gray-700 mb-6 text-center">"{testimonial.quote}"</blockquote>
                  
                  <div className="flex flex-col items-center">
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
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
};

export default TestimonialsCarousel;