
import { useState } from "react";
import { Button } from "@/components/ui/button";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import PersonaSection from "../components/PersonaSection";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import BehavioralInsightsSection from "../components/BehavioralInsightsSection";
import MissionSection from "../components/MissionSection";
import StayConnectedSection from "../components/StayConnectedSection";
import Footer from "../components/Footer";
import LeadMagnetSection from "../components/LeadMagnetSection";
import LoginDialog from "../components/LoginDialog";
import TrainingSection from "../components/TrainingSection";
import CookieConsent from "../components/CookieConsent";

interface IndexProps {
  openLoginDialog: () => void;
}

const Index = ({ openLoginDialog }: IndexProps) => {
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [loginMode, setLoginMode] = useState<"login" | "signup">("login");

  const handleLoginClick = () => {
    setLoginMode("login");
    setShowLoginDialog(true);
  };

  return (
    <div className="bg-cloudwhite min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection />
        <LeadMagnetSection onLoginClick={handleLoginClick} />
        <section id="mission">
          <MissionSection />
        </section>
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="persona">
          <PersonaSection onLoginClick={handleLoginClick} />
        </section>
        <section id="how">
          <HowItWorksSection />
        </section>
        <TrainingSection />
        <section id="testimonials">
          <TestimonialsCarousel />
        </section>
        <BehavioralInsightsSection onLoginClick={handleLoginClick} />
        <section id="newsletter">
          <StayConnectedSection onLoginClick={handleLoginClick} />
        </section>
      </main>
      <Footer openLoginDialog={openLoginDialog} />
      <LoginDialog 
        isOpen={showLoginDialog} 
        onClose={() => setShowLoginDialog(false)}
        mode={loginMode}
      />
      <CookieConsent />
    </div>
  );
};

export default Index;
