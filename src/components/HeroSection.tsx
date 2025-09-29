
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Play, Download, ArrowRight } from "lucide-react";
import LoginDialog from "./LoginDialog";
import NavigationHeader from "./NavigationHeader";

const userTypes = ["For Sales Teams", "For Nonprofits", "For New Sellers"];

const HeroSection = () => {
  const [currentUserType, setCurrentUserType] = useState(0);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [loginMode, setLoginMode] = useState<"login" | "signup">("login");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUserType((prev) => (prev + 1) % userTypes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLoginClick = () => {
    setLoginMode("login");
    setShowLoginDialog(true);
  };

  const handleSignupClick = () => {
    setLoginMode("signup");
    setShowLoginDialog(true);
  };

  return (
    <>
      <section className="min-h-[650px] bg-[#4DA1FF] mb-12 animate-section">
        <NavigationHeader 
          variant="primary" 
          currentPage="home"
          onLoginClick={handleLoginClick}
          onSignupClick={handleSignupClick}
        />

        <div className="flex flex-col md:flex-row items-center justify-between px-8 py-12 md:py-16">
          <div className="flex-1 flex flex-col gap-6 z-10 pl-20">
            <div className="text-xl text-white/70 font-medium animate-fade-in">
              {userTypes[currentUserType]}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Transforming sales coaching through 
              <br />
              <span className="text-3xl md:text-4xl text-white/80">AI-enabled behavioral innovation</span>
            </h1>
            <p className="mt-2 text-lg text-white/80 max-w-lg">
              Momentum is your personal sales accelerator, combining coaching, automation and storytelling into one powerful platform for sales teams across industries.
            </p>
            <div className="flex gap-4 mt-4">
              <Button 
                size="lg" 
                className="bg-secondary-white text-secondary-blue-dark hover:bg-secondary-white/90 transition font-semibold"
                onClick={handleSignupClick}
              >
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-secondary-white border-secondary-white/30 hover:bg-secondary-white/10 transition font-semibold"
                onClick={handleSignupClick}
              >
                Request Demo
              </Button>
            </div>
          </div>
          <div className="hidden md:flex flex-1 justify-end z-0">
            <div className="relative">
              <img 
                src="/lovable-uploads/e2cef465-cc50-4312-b631-211c63dd5cb7.png"
                alt="Momentum Platform dashboard screenshot"
                className="w-[500px] max-w-full shadow-xl object-cover object-top-center"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <button className="bg-white/90 hover:bg-white w-16 h-16 rounded-full flex items-center justify-center transition-all">
                  <Play className="h-6 w-6 text-trust-blue-600 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LoginDialog 
        isOpen={showLoginDialog} 
        onClose={() => setShowLoginDialog(false)}
        mode={loginMode}
      />
    </>
  );
};

export default HeroSection;
