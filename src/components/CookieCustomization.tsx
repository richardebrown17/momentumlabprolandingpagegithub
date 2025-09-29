
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { X } from "lucide-react";

interface CookieConsent {
  necessary: boolean;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieCustomizationProps {
  onClose: () => void;
  onSave: (preferences: CookieConsent) => void;
}

const CookieCustomization: React.FC<CookieCustomizationProps> = ({ onClose, onSave }) => {
  const [preferences, setPreferences] = useState<CookieConsent>({
    necessary: true,
    preferences: false,
    analytics: false,
    marketing: false
  });

  const handleToggle = (key: keyof CookieConsent) => {
    if (key === 'necessary') return; // Necessary cookies cannot be disabled
    
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSave = () => {
    onSave(preferences);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Cookie Settings</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better experience. By clicking accept, you agree to this, as outlined in our Cookie Policy.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex-1 pr-4">
                <h3 className="font-medium text-gray-900 mb-1">Necessary</h3>
                <p className="text-sm text-gray-600">
                  These cookies are essential for the website to function and cannot be switched off.
                </p>
              </div>
              <Switch
                checked={preferences.necessary}
                disabled={true}
                className="opacity-50"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex-1 pr-4">
                <h3 className="font-medium text-gray-900 mb-1">Preferences</h3>
                <p className="text-sm text-gray-600">
                  These cookies allow us to remember choices you make and provide enhanced features.
                </p>
              </div>
              <Switch
                checked={preferences.preferences}
                onCheckedChange={() => handleToggle('preferences')}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex-1 pr-4">
                <h3 className="font-medium text-gray-900 mb-1">Analytics</h3>
                <p className="text-sm text-gray-600">
                  These cookies help us understand how visitors interact with our website.
                </p>
              </div>
              <Switch
                checked={preferences.analytics}
                onCheckedChange={() => handleToggle('analytics')}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex-1 pr-4">
                <h3 className="font-medium text-gray-900 mb-1">Marketing</h3>
                <p className="text-sm text-gray-600">
                  These cookies are used to deliver personalized advertisements.
                </p>
              </div>
              <Switch
                checked={preferences.marketing}
                onCheckedChange={() => handleToggle('marketing')}
              />
            </div>
          </div>
        </div>
        
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6">
          <Button
            onClick={handleSave}
            className="w-full bg-trust-blue-400 hover:bg-trust-blue-500 text-white"
          >
            Save Preferences
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieCustomization;
