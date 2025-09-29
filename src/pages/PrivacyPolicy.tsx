import { useState } from "react";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import NavigationHeader from "@/components/NavigationHeader";
import LoginDialog from "@/components/LoginDialog";

interface PrivacyPolicyProps {
  openLoginDialog: () => void;
}

const PrivacyPolicy = ({ openLoginDialog }: PrivacyPolicyProps) => {
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
        currentPage="privacy"
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
      />
      
      <main className="flex-1">
        <div className="bg-cloudwhite py-12 px-6 md:py-16 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-slateblue mb-6">Privacy Policy</h1>
            <div className="text-sm text-graphite mb-6">
              <p>Effective Date: May 2, 2025</p>
              <p>Last Updated: May 2, 2025</p>
            </div>
            
            <div className="prose prose-slate max-w-none">
              <p className="mb-6">
                Momentum ("we," "our," or "us") is committed to safeguarding your privacy and complying with applicable data protection laws, including the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA/CPRA), Canada's PIPEDA, and other global frameworks. This policy outlines how we collect, process, share, and protect your information. It applies to all users of Momentum's services and platform, including users accessing through an employer or third-party integration. This policy is incorporated into our Terms of Use and is subject to updates. If any material changes are made, you will be asked to explicitly re-accept them before continuing to use the platform.
              </p>

              <h2 className="text-2xl font-semibold text-slateblue mt-8 mb-4">Data Collection</h2>
              <p className="mb-6">
                Momentum collects personal data to deliver services and enhance user experience. This includes identity and contact information such as your name, email address, company name, title, and optional phone number or role. We also collect behavioral data including interaction patterns, AI feedback history, and engagement scores based on your usage within the platform. Your device and system information—such as IP address, browser type, time zone, and device ID—is also recorded to ensure platform functionality and security. In cases where you authorize CRM or sales tool integrations, we may access relevant business data from tools like Salesforce, HubSpot, or Apollo.io. Additionally, any communication you have with our support team, including tickets and survey responses, may be recorded for training and service improvements.
              </p>

              <h2 className="text-2xl font-semibold text-slateblue mt-8 mb-4">Legal Bases for Processing</h2>
              <p className="mb-6">
                Momentum processes data on several legal bases. These include the performance of a contract to deliver our services; legitimate interest in improving our platform and preventing fraud; consent, which is required for profiling and behavioral nudging features; and legal obligations we may be required to fulfill. If we rely on your consent for processing, you can withdraw it at any time without affecting previously lawful data use.
              </p>

              <h2 className="text-2xl font-semibold text-slateblue mt-8 mb-4">How We Use Your Data</h2>
              <p className="mb-6">
                The data we collect is used to personalize your coaching experience, deliver insights, support CRM integrations, and improve our platform. Our AI tools analyze engagement to provide sales coaching and feedback, but all recommendations are meant as suggestions. They are not to be treated as legal, medical, employment, or financial advice. No fully automated decisions are made that significantly affect users without their knowledge or control. You remain responsible for how insights are interpreted and applied. Momentum disclaims liability for any employment or disciplinary actions resulting from exclusive reliance on AI outputs.
              </p>

              <h2 className="text-2xl font-semibold text-slateblue mt-8 mb-4">International Data Transfers</h2>
              <p className="mb-6">
                If you are located outside the United States, your data may be transferred and processed in the U.S. or other jurisdictions. We implement appropriate safeguards for these transfers, including Standard Contractual Clauses approved by the European Commission or equivalent legal mechanisms. You may request a copy of these safeguards by contacting privacy@momentumsec.io.
              </p>

              <h2 className="text-2xl font-semibold text-slateblue mt-8 mb-4">Your Rights</h2>
              <p className="mb-6">
                Depending on your jurisdiction, you may have specific rights under applicable law. These may include the right to access, correct, delete, or restrict the processing of your personal data, the right to withdraw consent, and the right to receive your data in a structured and portable format. To exercise these rights, please email privacy@momentumsec.io. We verify each request and respond within 30 days unless additional time is permitted by law.
              </p>

              <h2 className="text-2xl font-semibold text-slateblue mt-8 mb-4">Third-Party Processing</h2>
              <p className="mb-6">
                Momentum works with carefully selected third-party subprocessors and vendors, which may include AWS for cloud infrastructure, OpenAI for AI services, and Mixpanel for analytics. A current list of subprocessors is maintained and accessible at momentumsec.io/subprocessors. All partners operate under binding data processing agreements that require minimum security standards and timely breach reporting.
              </p>

              <h2 className="text-2xl font-semibold text-slateblue mt-8 mb-4">Changes to This Policy</h2>
              <p className="mb-6">
                Any material change to this policy or the way your data is used will be communicated clearly via email or in-platform alert. Your continued use will not constitute implied consent. Instead, you will be asked to explicitly re-accept the new terms.
              </p>

              <h2 className="text-2xl font-semibold text-slateblue mt-8 mb-4">Security and Retention</h2>
              <p className="mb-6">
                We take data security seriously. Momentum implements encryption at rest and in transit, multi-factor authentication, permission-based access controls, routine audits, and a 72-hour breach notification protocol. Personal data is retained as long as your account is active or for a period required to fulfill our obligations. Data from inactive accounts is deleted after 90 days unless otherwise required by law or contract. The Momentum platform is not intended for users under the age of 18, and we do not knowingly collect information from minors.
              </p>

              <p className="mt-8 text-graphite">
                For questions, contact privacy@momentumsec.io.
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

export default PrivacyPolicy;
