
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { Link } from 'react-router-dom';

interface NavigationHeaderProps {
  variant?: 'primary' | 'light';
  currentPage?: string;
  onLoginClick: () => void;
  onSignupClick: () => void;
}

const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  variant = 'primary',
  currentPage,
  onLoginClick,
  onSignupClick
}) => {
  // Define styles based on variant
  const headerBgClass = 'bg-[#4DA1FF]';
  const headerBorderClass = variant === 'primary' ? 'border-white/10' : 'border-white/10';
  const textColorClass = variant === 'primary' ? 'text-white/90' : 'text-white/90';
  const hoverTextClass = variant === 'primary' ? 'hover:text-white' : 'hover:text-white';
  const loginButtonVariant = variant === 'primary' ? 'ghost' : 'ghost';
  const loginButtonClass = variant === 'primary' 
    ? 'text-white hover:bg-white/10' 
    : 'text-white hover:bg-white/10';
  const getStartedButtonClass = variant === 'primary'
    ? 'bg-white text-trust-blue-600 hover:bg-white/90'
    : 'bg-white text-trust-blue-600 hover:bg-white/90';

  return (
    <header className={`flex justify-between items-center px-8 py-6 border-b ${headerBorderClass} ${headerBgClass}`}>
      <div className="flex items-center gap-6">
        <Link to="/" className="flex items-center relative">
          <img
            src="/lovable-uploads/b8f574aa-1a00-4833-9122-bf4030512d4c.png"
            alt="Momentum Lab Pro Logo"
            className="h-12 md:h-16 w-auto object-contain"
            style={{ imageRendering: 'crisp-edges' }}
          />
          <span className={`ml-2 bg-white/20 text-white text-xs px-2 py-1 rounded-full`}>Beta</span>
        </Link>
        <nav className="hidden md:flex gap-6 font-medium text-sm">
          <Link to="/#features" className={`${textColorClass} ${hoverTextClass} transition`}>Features</Link>
          <Link to="/#persona" className={`${textColorClass} ${hoverTextClass} transition`}>Sales Persona</Link>
          <Link to="/#how" className={`${textColorClass} ${hoverTextClass} transition`}>How it Works</Link>
          <Link to="/#testimonials" className={`${textColorClass} ${hoverTextClass} transition`}>What Customers Say</Link>
          <Link to="/#mission" className={`${textColorClass} ${hoverTextClass} transition`}>Why Momentum</Link>
          <Link to="/#newsletter" className={`${textColorClass} ${hoverTextClass} transition`}>Newsletter</Link>
          <Link to="/pricing" className={`${textColorClass} ${hoverTextClass} transition ${currentPage === 'pricing' ? 'font-bold' : ''}`}>Pricing</Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Button 
          variant={loginButtonVariant as any} 
          className={loginButtonClass}
          size="lg"
          onClick={onLoginClick}
        >
          <LogIn className="mr-2 h-5 w-5" />
          Login
        </Button>
        <Button
          className={`hidden md:inline-flex ${getStartedButtonClass}`}
          onClick={onSignupClick}
        >
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default NavigationHeader;
