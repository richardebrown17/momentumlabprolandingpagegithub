
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Pricing from "./pages/Pricing";
import TrustCenter from "./pages/TrustCenter";
import LoginDialog from "./components/LoginDialog";

const App = () => {
  // Create the QueryClient inside the component to avoid React hook errors
  const queryClient = new QueryClient();
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [loginMode, setLoginMode] = useState<"login" | "signup">("login");
  
  const openLoginDialog = (mode: "login" | "signup" = "login") => {
    setLoginMode(mode);
    setLoginDialogOpen(true);
  };
  
  const closeLoginDialog = () => setLoginDialogOpen(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LoginDialog isOpen={loginDialogOpen} onClose={closeLoginDialog} mode={loginMode} />
          <Routes>
            <Route path="/" element={<Index openLoginDialog={openLoginDialog} />} />
            <Route path="/about-us" element={<AboutUs openLoginDialog={openLoginDialog} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy openLoginDialog={openLoginDialog} />} />
            <Route path="/terms-of-use" element={<TermsOfUse openLoginDialog={openLoginDialog} />} />
            <Route path="/pricing" element={<Pricing openLoginDialog={openLoginDialog} />} />
            <Route path="/trust-center" element={<TrustCenter openLoginDialog={openLoginDialog} />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound openLoginDialog={openLoginDialog} />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
