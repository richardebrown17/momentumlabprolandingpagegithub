
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CircleCheck } from "lucide-react";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

interface TrustCenterProps {
  openLoginDialog: (mode?: "login" | "signup") => void;
}

const TrustCenter = ({ openLoginDialog }: TrustCenterProps) => {
  const handleLoginClick = () => openLoginDialog("login");
  const handleSignupClick = () => openLoginDialog("signup");

  // Security controls with checkmarks
  const securityControls = {
    infrastructure: [
      "Unique production database authentication enforced",
      "Access control procedures established",
      "Production OS and network access restricted",
      "MFA enforced for remote admin",
      "Intrusion detection and log management in place",
      "Network segmentation and encryption protocols established"
    ],
    organizational: [
      "MDM system in place for endpoint protection",
      "Employee background checks performed",
      "Code of Conduct and confidentiality agreements enforced",
      "Security training and role-based access controls implemented"
    ],
    product: [
      "Vulnerability scanning and annual penetration testing",
      "Secure SDLC and version control through GitHub",
      "Audit logging for behavioral coaching insights"
    ],
    internal: [
      "Disaster Recovery and Business Continuity plans documented and tested",
      "Incident response policy and escalation plan defined",
      "Board-level security reviews annually",
      "Risk assessments conducted with fraud vectors included"
    ],
    data: [
      "Data classification policy in place",
      "Data deletion protocols enforced at termination",
      "Customer data encrypted in transit and at rest",
      "Employee data minimally collected, never sold or shared",
      "AI inputs anonymized and never reused"
    ]
  };

  // Resources documents
  const resources = [
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Terms of Use", link: "/terms-of-use" },
    { name: "Data Processing Agreement (DPA)", link: "#" },
    { name: "SOC 2 Summary", link: "#", note: "SOC 2 Type II in progress" },
    { name: "Acceptable Use Policy", link: "#" },
    { name: "Cookie Policy", link: "#" },
    { name: "GDPR and CCPA Summary", link: "#" },
    { name: "AI Usage Statement", link: "#" }
  ];

  // Subprocessors
  const subprocessors = [
    { 
      name: "Amazon Web Services (AWS)", 
      description: "Cloud hosting and infrastructure", 
      icon: "fa-aws" 
    },
    { 
      name: "OpenAI", 
      description: "Natural language and insight generation", 
      icon: "fa-openai" 
    },
    { 
      name: "Zapier", 
      description: "Workflow automation", 
      icon: "fa-zapier" 
    },
    { 
      name: "Google Workspace", 
      description: "Internal communications and cloud file storage", 
      icon: "fa-google" 
    },
    { 
      name: "Jira / GitHub", 
      description: "Development, issue tracking, and source control", 
      icon: "fa-github" 
    },
    { 
      name: "Datadog", 
      description: "System monitoring", 
      icon: "fa-datadog" 
    },
    { 
      name: "Intercom (planned)", 
      description: "Customer success and messaging (Q4 2025)", 
      icon: "fa-intercom",
      planned: true 
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavigationHeader 
        variant="primary" 
        currentPage="trust"
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
      />

      <main className="flex-1 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Trust Center</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to security, privacy, and compliance that powers your sales transformation
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="controls">Controls</TabsTrigger>
              <TabsTrigger value="subprocessors">Subprocessors</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#4DA1FF]">Our Approach to Trust</CardTitle>
                  <CardDescription>
                    Building secure, emotionally intelligent, and behaviorally grounded workflows
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <h3 className="text-xl font-semibold mb-4">Mission-Driven Data Integrity</h3>
                    <p className="mb-6">
                      At Momentum Lab Pro, we believe that sales transformation should never come at the cost of compromising 
                      trust, security, or privacy. Our platform is built from the ground up with a mission-driven focus on 
                      data integrity, transparency, and user trust. We understand that sales professionals and organizations
                      depend on secure, emotionally intelligent, and behaviorally grounded workflows to drive their success.
                    </p>
                    
                    <h3 className="text-xl font-semibold mb-4">Our Security Model</h3>
                    <p className="mb-6">
                      Momentum Lab Pro employs a comprehensive security model that protects your data at every level. From 
                      infrastructure security to organizational processes and product development, we've implemented controls
                      that ensure your information remains protected while still allowing your team to leverage the power of 
                      our AI-driven sales coaching platform.
                    </p>
                    
                    <h3 className="text-xl font-semibold mb-4">Privacy-by-Design</h3>
                    <p className="mb-6">
                      Our platform incorporates privacy-by-design principles at every stage of development. We collect only 
                      the data necessary to deliver our services, store it securely, and provide you with full control over
                      your information. All AI inputs are anonymized and never reused, ensuring that your sales strategies
                      and customer interactions remain confidential and proprietary.
                    </p>
                    
                    <h3 className="text-xl font-semibold mb-4">Compliance Strategy</h3>
                    <p className="mb-6">
                      We are actively working towards industry-standard compliance certifications, including SOC 2 Type II.
                      Our policies and procedures are designed to align with global privacy regulations like GDPR and CCPA,
                      and we regularly review and update them to reflect changes in the regulatory landscape.
                    </p>
                    
                    <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
                    <p>
                      Momentum Lab Pro is committed to protecting customer and organizational data while providing 
                      innovative tools that transform sales performance. We believe that trust is earned through 
                      transparency, consistent security practices, and unwavering respect for privacy. Our Trust Center
                      provides you with information about our security controls, privacy practices, and the steps 
                      we take to ensure that your data remains secure and private.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#4DA1FF]">Documentation & Resources</CardTitle>
                  <CardDescription>
                    Access our policies, agreements, and compliance information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resources.map((resource) => (
                      <div key={resource.name} className="border rounded-lg p-6 shadow-sm transition-all hover:shadow-md">
                        <h3 className="font-semibold text-lg mb-3">{resource.name}</h3>
                        {resource.note && (
                          <p className="text-sm text-amber-600 mb-4">{resource.note}</p>
                        )}
                        <div className="mt-2">
                          {resource.link.startsWith("/") ? (
                            <Link
                              to={resource.link}
                              className="text-[#4DA1FF] hover:text-[#2980d9] font-medium"
                            >
                              View Document
                            </Link>
                          ) : (
                            <a
                              href={resource.link}
                              className="text-[#4DA1FF] hover:text-[#2980d9] font-medium"
                            >
                              View Document
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Controls Tab */}
            <TabsContent value="controls">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#4DA1FF]">Security & Privacy Controls</CardTitle>
                  <CardDescription>
                    Our comprehensive security and privacy controls framework
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {/* Infrastructure Security */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-[#333]">Infrastructure Security</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {securityControls.infrastructure.map((control, idx) => (
                          <div key={idx} className="flex gap-3 items-start">
                            <CircleCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{control}</span>
                          </div>
                        ))}
                      </div>
                      <Separator className="my-6" />
                    </div>

                    {/* Organizational Security */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-[#333]">Organizational Security</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {securityControls.organizational.map((control, idx) => (
                          <div key={idx} className="flex gap-3 items-start">
                            <CircleCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{control}</span>
                          </div>
                        ))}
                      </div>
                      <Separator className="my-6" />
                    </div>

                    {/* Product Security */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-[#333]">Product Security</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {securityControls.product.map((control, idx) => (
                          <div key={idx} className="flex gap-3 items-start">
                            <CircleCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{control}</span>
                          </div>
                        ))}
                      </div>
                      <Separator className="my-6" />
                    </div>

                    {/* Internal Security Procedures */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-[#333]">Internal Security Procedures</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {securityControls.internal.map((control, idx) => (
                          <div key={idx} className="flex gap-3 items-start">
                            <CircleCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{control}</span>
                          </div>
                        ))}
                      </div>
                      <Separator className="my-6" />
                    </div>

                    {/* Data and Privacy */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-[#333]">Data and Privacy</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {securityControls.data.map((control, idx) => (
                          <div key={idx} className="flex gap-3 items-start">
                            <CircleCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{control}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Subprocessors Tab */}
            <TabsContent value="subprocessors">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#4DA1FF]">Subprocessors</CardTitle>
                  <CardDescription>
                    Third-party services that help us deliver our platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-6">
                    Momentum Lab Pro uses the following subprocessors to provide our services. 
                    We carefully select and monitor these partners to ensure they meet our security and privacy standards.
                  </p>
                  
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">Service</TableHead>
                        <TableHead className="w-[250px]">Purpose</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {subprocessors.map((processor) => (
                        <TableRow key={processor.name}>
                          <TableCell className="font-medium">{processor.name}</TableCell>
                          <TableCell>{processor.description}</TableCell>
                          <TableCell>
                            {processor.planned ? (
                              <span className="text-amber-600 font-medium">Planned</span>
                            ) : (
                              <span className="text-green-600 font-medium">Active</span>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  
                  <div className="mt-6 text-sm text-gray-500">
                    <p>
                      We regularly review and update our list of subprocessors. If you have questions about 
                      our data processing activities or subprocessors, please contact our Privacy Team at 
                      privacy@momentumlabpro.io
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer openLoginDialog={openLoginDialog} />
    </div>
  );
};

export default TrustCenter;
