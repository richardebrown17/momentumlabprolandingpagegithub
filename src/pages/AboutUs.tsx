import React from 'react';
import NavigationHeader from '../components/NavigationHeader';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';

interface AboutUsProps {
  openLoginDialog: (mode?: "login" | "signup") => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ openLoginDialog }) => {
  const handleLoginClick = () => openLoginDialog("login");
  const handleSignupClick = () => openLoginDialog("signup");

  const leadership = [
    {
      name: "Richard E. Brown",
      title: "Chief Executive Officer and Founder",
      image: "/lovable-uploads/c5ae940b-9861-47b4-8865-34e6a5e76719.png",
      bio: "Richard E. Brown is the founder of Momentum Lab Pro and serves as chief growth and innovation officer at Wisconsin Watch. As owner of RE Media Holdings LLC and a News Media Alliance Rising Star Award recipient, Brown brings national experience across for-profit and nonprofit news organizations. His previous leadership roles at LPi and other media companies have given him insight into the challenges facing modern media organizations and the technology solutions needed to drive sustainable growth."
    },
    {
      name: "Penda Howell",
      title: "Chief Revenue Officer and Co-Founder",
      image: "/lovable-uploads/974b3e32-a33f-4f08-82ca-8ce9e9c7f49d.png",
      bio: "Penda Howell is co-founder of Momentum Lab Pro and brings more than 29 years of strategic leadership and revenue generation experience. As co-founder, CEO and publisher of New Jersey Urban News and former chief revenue officer at the New York Amsterdam News and WFAE, an NPR affiliate station, Howell has a proven track record of building sustainable revenue streams. She leads PCH Media S and will oversee sales and revenue operations support as Momentum grows."
    },
    {
      name: "Petra Vincent",
      title: "Chief Technology Officer",
      image: "/lovable-uploads/8e2adf14-8fbf-4fc1-9465-944e13cbdb05.png",
      bio: "Petra Vincent is a digital strategist and technology leader with more than 20 years of experience driving innovation across technology, media, health care, sports, publishing and enterprise sectors. As former head of DevOps at McKinsey & Co., she led audience development and innovation initiatives that transformed how organizations engage with their communities. At Momentum, she oversees the development team and serves as operations and onboarding manager, ensuring the platform delivers cutting-edge solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <NavigationHeader
        variant="primary"
        currentPage="about-us"
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
      />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-[#4DA1FF]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Leadership Team
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            The leadership team combines decades of experience in sales technology, revenue optimization 
            and strategic innovation to deliver the future of sales automation.
          </p>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {leadership.map((leader, index) => (
              <Card key={index} className="border border-gray-200 shadow-sm">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0 text-center md:text-left">
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-40 h-40 rounded-full object-cover mx-auto md:mx-0 border-4 border-gray-100"
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {leader.name}
                      </h2>
                      <p className="text-lg font-medium text-[#4DA1FF] mb-4">
                        {leader.title}
                      </p>
                      <p className="text-gray-700 leading-relaxed text-base">
                        {leader.bio}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Background Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Company Background
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Momentum Lab Pro was founded on the observation that while sales technology has advanced rapidly, 
              most platforms treat all prospects and customers the same. The founders recognized that the future of sales 
              lies in understanding the unique behavioral patterns and decision-making processes that influence each 
              buyer's journey.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By combining automation technology with proven sales expertise, the company has created 
              a platform that adapts to each client's unique profile, helping sales teams build momentum in every interaction 
              and drive sustainable revenue growth.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-[#2C2C2C] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Request Demo Access
          </h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Join the beta program and experience the future of sales automation with Momentum Lab Pro.
          </p>
          <button 
            onClick={handleSignupClick}
            className="bg-[#4DA1FF] hover:bg-[#3d8fef] text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
          >
            Request Demo Access
          </button>
        </div>
      </section>

      <Footer openLoginDialog={() => openLoginDialog("login")} />
    </div>
  );
};

export default AboutUs;
