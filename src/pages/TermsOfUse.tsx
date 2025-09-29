import { useState } from "react";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import NavigationHeader from "@/components/NavigationHeader";
import LoginDialog from "@/components/LoginDialog";

interface TermsOfUseProps {
  openLoginDialog: () => void;
}

const TermsOfUse = ({ openLoginDialog }: TermsOfUseProps) => {
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

  return (
    <div className="flex flex-col min-h-screen">
      <NavigationHeader 
        variant="primary" 
        currentPage="terms"
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
      />
      
      <main className="flex-1">
        <div className="bg-cloudwhite py-12 px-6 md:py-16 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-slateblue mb-6">Terms of Use</h1>
            <div className="text-sm text-graphite mb-6">
              <p>Effective Date: May 2, 2025</p>
              <p>Last Updated: May 2, 2025</p>
            </div>
            
            <div className="prose prose-slate max-w-none">
              <p className="mb-6">
                These Terms of Use form a binding agreement between you and Momentum regarding your access to and use of the platform and services. By creating an account or using the platform, you agree to be bound by these terms. If you do not agree, you should not access or use the service.
              </p>

              <h2 className="text-2xl font-semibold text-slateblue mt-8 mb-4">Eligibility and Account Security</h2>
              <p className="mb-6">
                You must be 18 years or older and authorized to use the platform on behalf of your organization or employer. You are responsible for all activity under your account and for maintaining the confidentiality of your login credentials. Unauthorized sharing of credentials or unauthorized access to the platform is prohibited.
              </p>

              <h2 className="text-2xl font-semibold text-slateblue mt-8 mb-4">Acceptable Use</h2>
              <p className="mb-6">
                By using Momentum, you agree to use the platform for lawful purposes and in compliance with all applicable regulations. You agree not to misuse the platform, reverse engineer its functionality, attempt unauthorized access to system data, or use it to make employment or disciplinary decisions solely based on AI-generated outputs. You may not scrape content, resell AI feedback, or use the coaching features to evaluate individuals outside your organization without their knowledge or consent.
              </p>

              <h2 className="text-2xl font-semibold text-slateblue mt-8 mb-4">AI-Generated Content Disclaimer</h2>
              <p className="mb-6">
                Momentum provides AI-powered coaching designed to support—not replace—human decision-making. The platform generates sales feedback, nudges, and narrative guidance based on behavioral signals. These insights are meant to enhance user awareness and development but should not be treated as definitive conclusions. You understand that AI-generated recommendations are suggestive in nature and are not a substitute for professional judgment. Momentum disclaims all liability for any HR, legal, or commercial decisions made based on automated feedback or coaching results. All enterprise clients are responsible for the lawful use of the platform within their own internal policies.
              </p>

              <h2 className="text-2xl font-semibold text-slateblue mt-8 mb-4">Intellectual Property</h2>
              <p className="mb-6">
                All intellectual property associated with the platform—including software code, models, content, and coaching frameworks—is owned by Momentum. You may not copy, redistribute, modify, or derive works from any platform material without our written consent.
              </p>

              <h2 className="text-2xl font-semibold text-slateblue mt-8 mb-4">Termination</h2>
              <p className="mb-6">
                We reserve the right to suspend or terminate your access to the platform if you violate these terms. In most cases, you will receive written notice and a seven-day opportunity to resolve the issue. However, in cases of malicious activity, security threats, or intentional misuse, we reserve the right to revoke access immediately without prior notice.
              </p>

              <h2 className="text-2xl font-semibold text-slateblue mt-8 mb-4">Governing Law and Dispute Resolution</h2>
              <p className="mb-6">
                These Terms of Use are governed by the laws of the State of New York. Any legal disputes will be resolved by binding arbitration in New York County under the rules of the American Arbitration Association. However, if you are an EU or EEA resident, you may bring claims under your local data protection authority and laws as required by GDPR.
              </p>

              <h2 className="text-2xl font-semibold text-slateblue mt-8 mb-4">Disclaimers and Limitation of Liability</h2>
              <p className="mb-6">
                Momentum is provided "as is" without warranties of fitness for a particular purpose or uninterrupted access. To the fullest extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of the platform. In any event, our total liability to you is limited to the amount paid in the twelve months preceding a claim.
              </p>

              <h2 className="text-2xl font-semibold text-slateblue mt-8 mb-4">Indemnification</h2>
              <p className="mb-6">
                You agree to indemnify and hold harmless Momentum, its officers, employees, and partners from any losses, claims, or damages resulting from your misuse of the platform, your violation of these terms, or your improper reliance on AI-generated feedback.
              </p>

              <h2 className="text-2xl font-semibold text-slateblue mt-8 mb-4">Updates to Terms</h2>
              <p className="mb-6">
                We may update these Terms of Use periodically. When we do, you will be asked to review and re-accept the updated version through an in-platform prompt or via official communication. Your access will be suspended if you do not agree to the revised terms.
              </p>

              <p className="mt-8 text-graphite">
                For legal inquiries or dispute notifications, contact legal@momentumsec.io.
              </p>
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

export default TermsOfUse;
