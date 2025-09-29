
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import CookieCustomization from './CookieCustomization';

interface CookieConsent {
  necessary: boolean;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomization, setShowCustomization] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent: CookieConsent = {
      necessary: true,
      preferences: true,
      analytics: true,
      marketing: true
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const consent: CookieConsent = {
      necessary: true,
      preferences: false,
      analytics: false,
      marketing: false
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const handleCustomize = () => {
    setShowCustomization(true);
  };

  const handleCustomizationComplete = (preferences: CookieConsent) => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowCustomization(false);
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-4 right-4 z-40 bg-white rounded-lg shadow-feature border border-gray-200 p-6 max-w-sm animate-fade-in">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="pr-6">
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            We use cookies to personalize content, run ads, and analyze traffic.
          </p>
          
          <div className="flex flex-col gap-2">
            <Button
              onClick={handleAcceptAll}
              className="bg-trust-blue-400 hover:bg-trust-blue-500 text-white text-sm py-2"
            >
              Accept all
            </Button>
            
            <div className="flex gap-2">
              <Button
                onClick={handleRejectAll}
                variant="outline"
                className="flex-1 text-sm py-2 border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Reject all
              </Button>
              
              <Button
                onClick={handleCustomize}
                variant="outline"
                className="flex-1 text-sm py-2 border-trust-blue-300 text-trust-blue-600 hover:bg-trust-blue-50"
              >
                Customize
              </Button>
            </div>
          </div>
        </div>
      </div>

      {showCustomization && (
        <CookieCustomization
          onClose={() => setShowCustomization(false)}
          onSave={handleCustomizationComplete}
        />
      )}
    </>
  );
};

export default CookieConsent;
