
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface FooterProps {
  openLoginDialog: () => void;
}

const Footer = ({ openLoginDialog }: FooterProps) => {
  const currentYear = 2025;
  
  const footerSections = [
    {
      title: "Platform",
      links: [
        { label: "Platform Overview", href: "#features" },
        { label: "Features", href: "#feature-flythrough" },
        { label: "Use Cases", href: "#challenges" },
        { label: "Pricing", href: "/pricing" },
        { label: "Demo", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#", requiresLogin: true },
        { label: "Help Center", href: "#", requiresLogin: true },
        { label: "Case Studies", href: "#", requiresLogin: true },
        { label: "Sales Toolkit", href: "#", requiresLogin: true }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about-us" },
        { label: "Careers", href: "#" },
        { label: "Contact Us", href: "#" },
        { label: "Partners", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, requiresLogin: boolean) => {
    if (requiresLogin) {
      e.preventDefault();
      openLoginDialog();
    }
  };

  return (
    <footer className="bg-[#2C2C2C] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-8 md:mb-0 relative">
            <img 
              src="/lovable-uploads/4e15fa72-85fa-4289-b2fd-a9327077befe.png" 
              alt="Momentum Lab Pro Logo" 
              className="h-16 w-[180px] mb-4"
              style={{ width: "180px", height: "64px" }}
            />
            <p className="text-white/80 max-w-xs">
              Your personal sales strategist — combining coaching, automation, and storytelling into one powerful platform for sales teams.
            </p>
            <div className="mt-6">
              <Button className="bg-[#379998] hover:bg-[#2f8988] text-white">
                Request Demo to Join Beta Testing
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-bold text-lg mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith('/') ? (
                        <Link 
                          to={link.href}
                          className="text-white/80 hover:text-white transition-colors"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a 
                          href={link.href}
                          className="text-white/80 hover:text-white transition-colors"
                          onClick={(e) => handleLinkClick(e, !!link.requiresLogin)}
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-white/80 hover:text-white transition-colors p-2 bg-white/10 rounded-full"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <Separator className="bg-white/20 my-8" />

        <div className="text-sm text-white/60 flex flex-col md:flex-row md:justify-between items-center">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} momentumlabpro.io &middot; All Rights Reserved
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/trust-center" className="hover:text-white transition-colors">Trust Center</Link>
            <Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link to="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link to="#" className="hover:text-white transition-colors">DMCA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
