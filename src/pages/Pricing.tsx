import { useState } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check, HelpCircle, User, Users, Building } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import NavigationHeader from "@/components/NavigationHeader";
import LoginDialog from "@/components/LoginDialog";

interface PricingProps {
  openLoginDialog: () => void;
}

const Pricing = ({ openLoginDialog }: PricingProps) => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [loginMode, setLoginMode] = useState<"login" | "signup">("login");

  const handleLoginClick = () => {
    setLoginMode("login");
    setShowLoginDialog(true);
  };

  const handleSignupClick = () => {
    setLoginMode("signup");
    setShowLoginDialog(true);
  };

  const pricingPlans = [
    {
      name: "Starter",
      price: billingCycle === "monthly" ? "$299" : "$2,870",
      description: "Perfect for individual media professionals getting started.",
      recommendedFor: "Solo media professionals, small creators",
      features: [
        {
          category: "Core Features",
          items: [
            { name: "Dashboard Access", tooltip: "Track your progress and performance" },
            { name: "Basic Goal Planning", tooltip: "Set and track simple goals for your media strategy" },
            { name: "Performance Metrics (Limited)", tooltip: "Access to essential performance tracking" },
            { name: "AI Coach Features", tooltip: "Basic AI assistance for your media strategy" },
          ]
        },
        {
          category: "Content Tools",
          items: [
            { name: "Narrative Development (Basic)", tooltip: "Simple storytelling templates" },
            { name: "Lead Generation Tools (Limited)", tooltip: "Basic tools to generate leads" },
            { name: "Insights Lab (Basic)", tooltip: "Access to basic data insights" },
          ]
        }
      ],
      highlighted: false,
      savings: billingCycle === "yearly" ? "Save $318" : "",
      savingsPercent: "10%",
      color: "bg-white",
      badge: "",
      icon: User,
    },
    {
      name: "Pro",
      price: billingCycle === "monthly" ? "$499" : "$4,490",
      description: "For growing media teams seeking comprehensive tools and collaboration.",
      recommendedFor: "Growing media teams, established content creators",
      features: [
        {
          category: "Everything in Starter, plus:",
          items: []
        },
        {
          category: "Advanced Features",
          items: [
            { name: "Advanced Performance Metrics", tooltip: "Deeper insights into your performance data" },
            { name: "Full Goal Planning Features", tooltip: "Comprehensive goal setting and tracking" },
            { name: "Ideation Engine", tooltip: "Generate creative ideas for your media content" },
            { name: "Prospecting Opportunities", tooltip: "Find new opportunities for growth" },
          ]
        },
        {
          category: "Production Suite",
          items: [
            { name: "StoryBuilder", tooltip: "Create compelling narratives for your media content" },
            { name: "Sales Library", tooltip: "Access to sales resources and templates" },
            { name: "Proposal Generator", tooltip: "Create professional proposals" },
            { name: "Ad Creator", tooltip: "Design effective advertisements" },
            { name: "Team Collaboration (Limited)", tooltip: "Work together with a small team" },
          ]
        }
      ],
      highlighted: true,
      savings: billingCycle === "yearly" ? "Save $598" : "",
      savingsPercent: "15%",
      color: "bg-[#4d587c] text-white",
      badge: "Most Popular",
      ribbonColor: "bg-[#e8f4be]",
      ribbonTextColor: "text-[#4d587c]",
      icon: Users,
    },
    {
      name: "Enterprise",
      price: billingCycle === "monthly" ? "$799" : "$6,870",
      description: "For enterprise media organizations with complex team needs.",
      recommendedFor: "Media agencies, publisher teams, enterprise organizations",
      features: [
        {
          category: "Everything in Pro, plus:",
          items: []
        },
        {
          category: "Enterprise Tools",
          items: [
            { name: "Admin Dashboard", tooltip: "Control user permissions and team settings" },
            { name: "Community Features", tooltip: "Access to Case Vault and Discussion Lounge" },
            { name: "Leaderboard Access", tooltip: "Compare performance with others in your industry" },
            { name: "Community Events", tooltip: "Access to exclusive events and webinars" },
            { name: "Multiple User Accounts", tooltip: "Add unlimited team members" },
          ]
        },
        {
          category: "Premium Options",
          items: [
            { name: "Advanced Security Features", tooltip: "Enhanced security for enterprise needs" },
            { name: "API Access", tooltip: "Integrate with your existing tools" },
            { name: "Custom Reporting", tooltip: "Create tailored reports for your specific needs" },
            { name: "White-Label Options", tooltip: "Customize the platform with your branding" },
            { name: "Digital Advertising 101", tooltip: "Access comprehensive advertising training" },
          ]
        }
      ],
      highlighted: false,
      savings: billingCycle === "yearly" ? "Save $1,098" : "",
      savingsPercent: "20%",
      color: "bg-[#4da1ff] text-white",
      badge: "",
      buttonStyle: "bg-white text-[#4da1ff] hover:bg-gray-100",
      icon: Building,
    },
  ];

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly");
  };

  const calculateSavings = (monthly: number, yearly: number) => {
    return Math.round(100 - (yearly / (monthly * 12)) * 100);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="bg-[#f9fafb] py-0">
          <NavigationHeader 
            variant="primary" 
            currentPage="pricing"
            onLoginClick={handleLoginClick}
            onSignupClick={handleSignupClick}
          />
          
          <div className="max-w-7xl mx-auto py-12 px-6 md:py-16 lg:py-24">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <img 
                  src="/lovable-uploads/8b5789bd-29ca-4586-823d-e97c4a080e08.png" 
                  alt="Momentum Lab Pro Logo" 
                  className="h-20 w-auto"
                />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#4d587c] mb-4">
                Choose the plan that fits your needs
              </h1>
              <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                All plans include a <span className="font-semibold text-[#4da1ff]">3-month free trial</span> so you can experience the full power of Momentum Lab Pro before committing.
              </p>
              
              <div className="flex items-center justify-center mt-8 space-x-4">
                <span className={`text-sm font-medium ${billingCycle === "monthly" ? "text-[#4d587c]" : "text-slate-500"}`}>
                  Monthly
                </span>
                <div className="relative">
                  <Switch 
                    checked={billingCycle === "yearly"}
                    onCheckedChange={toggleBillingCycle}
                    className="data-[state=checked]:bg-[#379998]"
                  />
                  {billingCycle === "yearly" && (
                    <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-full bg-[#e8f4be] text-[#4d587c] text-xs font-bold px-2 py-1 whitespace-nowrap">
                      Save up to 20%
                    </span>
                  )}
                </div>
                <span className={`text-sm font-medium ${billingCycle === "yearly" ? "text-[#4d587c]" : "text-slate-500"}`}>
                  Yearly
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {pricingPlans.map((plan, index) => (
                <Card 
                  key={plan.name}
                  className={`relative overflow-hidden border ${
                    plan.highlighted 
                      ? "border-[#33c1ba] shadow-lg" 
                      : "border-gray-200"
                  } ${plan.color} rounded-none flex flex-col min-h-[700px]`}
                >
                  {plan.badge && (
                    <div className="absolute -right-12 top-7 transform rotate-45">
                      <div className={`${plan.ribbonColor || "bg-[#4da1ff]"} ${plan.ribbonTextColor || "text-white"} text-xs font-semibold py-1 px-10`}>
                        {plan.badge}
                      </div>
                    </div>
                  )}
                  
                  <CardHeader className={`pb-6`}>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        {plan.icon && (
                          <plan.icon className={`h-6 w-6 ${
                            plan.color === "bg-white" ? "text-[#4d587c]" : "text-white"
                          }`} />
                        )}
                        <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                      </div>
                      {plan.savings && (
                        <Badge variant="outline" className="bg-[#e8f4be] border-0 text-[#4d587c] whitespace-nowrap rounded-none">
                          {plan.savings} ({plan.savingsPercent})
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-end my-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-sm ml-2 self-end mb-1 opacity-80">/{billingCycle === "monthly" ? "month" : "year"}</span>
                    </div>
                    
                    <p className="text-sm">
                      {plan.description}
                    </p>
                    
                    <div className="mt-2 text-xs font-medium">
                      <span className="flex items-center">
                        <span>Recommended for:</span>
                      </span>
                      <span className="font-semibold">{plan.recommendedFor}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-6 flex-grow">
                    <TooltipProvider>
                      {plan.features.map((category, catIndex) => (
                        <div key={catIndex} className="mb-4">
                          {category.category && (
                            <h4 className="text-sm font-semibold mb-3">
                              {category.category}
                            </h4>
                          )}
                          {category.items.length > 0 && (
                            <ul className="space-y-2">
                              {category.items.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center">
                                  <Check className={`h-4 w-4 mr-2 flex-shrink-0 ${
                                    plan.name === "Enterprise" 
                                      ? "text-white" 
                                      : plan.highlighted 
                                        ? "text-[#33c1ba]" 
                                        : "text-[#379998]"
                                  }`} />
                                  <span className="text-sm">
                                    {feature.name}
                                  </span>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <button className="ml-1 rounded-none inline-flex">
                                        <HelpCircle className={`h-3 w-3 ${
                                          plan.name === "Enterprise" 
                                            ? "text-gray-200" 
                                            : plan.highlighted 
                                              ? "text-gray-300" 
                                              : "text-gray-400"
                                        }`} />
                                      </button>
                                    </TooltipTrigger>
                                    <TooltipContent className="rounded-none border border-[#4da1ff]/20">
                                      <p className="text-xs">{feature.tooltip}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </TooltipProvider>
                  </CardContent>
                  
                  <CardFooter className="pt-2 pb-6 mt-auto">
                    <Button 
                      className={`w-full rounded-none ${
                        plan.name === "Enterprise" 
                          ? plan.buttonStyle 
                          : plan.highlighted 
                            ? "bg-[#33c1ba] hover:bg-[#379998] text-white border-[#4da1ff]/30 border-b-2" 
                            : "bg-[#379998] hover:bg-[#33c1ba] text-white border-[#4da1ff]/30 border-b-2"
                      }`}
                    >
                      {billingCycle === "yearly" ? "Get Your Annual Plan" : "Start Your 3-Month Free Trial"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-16 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold text-[#4d587c] mb-4">Common Questions</h2>
              <div className="bg-white p-6 shadow-sm border border-[#4da1ff]/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-slate-800">What happens after my free trial?</h3>
                    <p className="text-slate-600">After your 3-month trial ends, you'll be charged for your selected plan. We'll send a reminder before charging.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-slate-800">Can I change my plan later?</h3>
                    <p className="text-slate-600">Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, downgrades at the end of your billing cycle.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-slate-800">What payment methods do you accept?</h3>
                    <p className="text-slate-600">We accept all major credit cards, PayPal, and selected digital payment options.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-slate-800">Are there any long-term contracts?</h3>
                    <p className="text-slate-600">No, all our plans are subscription-based and you can cancel anytime with no cancellation fees.</p>
                  </div>
                </div>
              </div>
              
              <Separator className="my-12" />
              
              <h2 className="text-2xl font-semibold text-[#4d587c] mb-4">Need a custom solution?</h2>
              <p className="text-slate-600 mb-8">
                For larger teams or specialized requirements, our team will work with you to create a tailored solution.
              </p>
              <Button className="bg-[#4da1ff] hover:bg-opacity-90 text-white rounded-none border-[#4da1ff]/30 border-b-2">Contact Sales For Custom Pricing</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer openLoginDialog={openLoginDialog} />
      
      <LoginDialog 
        isOpen={showLoginDialog} 
        onClose={() => setShowLoginDialog(false)}
        mode={loginMode}
      />
    </div>
  );
};

export default Pricing;
