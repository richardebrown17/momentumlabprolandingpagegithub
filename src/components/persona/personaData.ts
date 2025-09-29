export interface PersonaType {
  id: string;
  title: string;
  description: string;
  benefit: string;
  color: string;
  primaryDescription: string;
  radarData: Array<{
    subject: string;
    value: number;
  }>;
}

export const personas: PersonaType[] = [
  {
    id: "ally",
    title: "The Ally",
    description: "Relationship builders focused on long-term partnerships and collaborative solutions",
    benefit: "Momentum provides you with relationship-building tools and partnership frameworks to strengthen your client connections",
    color: "#0FA0CE",
    primaryDescription: "Your sales approach emphasizes building strong relationships and understanding client needs. You excel at creating win-win situations and maintaining long-term partnerships.",
    radarData: [
      { subject: 'Analyst', value: 60 },
      { subject: 'Actor', value: 65 },
      { subject: 'Ally', value: 90 },
      { subject: 'Aggressor', value: 55 }
    ]
  },
  {
    id: "analyst",
    title: "The Analyst",
    description: "Detail-oriented problem solvers who excel at data-driven decisions",
    benefit: "Momentum delivers rich analytics and insights to support your data-driven approach to sales",
    color: "#33C3F0",
    primaryDescription: "Your analytical approach focuses on data-driven decision making and problem-solving. You excel at understanding complex situations and providing strategic solutions.",
    radarData: [
      { subject: 'Analyst', value: 90 },
      { subject: 'Actor', value: 60 },
      { subject: 'Ally', value: 65 },
      { subject: 'Aggressor', value: 70 }
    ]
  },
  {
    id: "actor",
    title: "The Actor",
    description: "Charismatic presenters who thrive in high-stakes meetings",
    benefit: "Momentum enhances your presentation skills with story frameworks and engagement tactics",
    color: "#1EAEDB",
    primaryDescription: "Your dynamic presentation style captivates audiences in high-stakes meetings. You excel at storytelling and creating memorable client experiences.",
    radarData: [
      { subject: 'Analyst', value: 65 },
      { subject: 'Actor', value: 90 },
      { subject: 'Ally', value: 70 },
      { subject: 'Aggressor', value: 75 }
    ]
  },
  {
    id: "aggressor",
    title: "The Aggressor",
    description: "Results-driven closers who excel in competitive situations",
    benefit: "Momentum accelerates your deal velocity with proven closing techniques and competitive intelligence",
    color: "#403E43",
    primaryDescription: "Your competitive drive and results-focused approach helps you excel in high-pressure situations. You're skilled at closing deals and driving outcomes.",
    radarData: [
      { subject: 'Analyst', value: 70 },
      { subject: 'Actor', value: 75 },
      { subject: 'Ally', value: 60 },
      { subject: 'Aggressor', value: 90 }
    ]
  }
];

export const businessCategories = [
  {
    title: "Sales and Business Development",
    description: "Accelerate growth with AI-guided strategies rooted in behavioral science, narrative psychology and local market data. Momentum helps sellers prioritize high-propensity leads, develop stronger proposals and connect with audiences through value-aligned storytelling."
  },
  {
    title: "Leadership and Sales Management",
    description: "Equip managers to coach intentionally with real-time performance tracking, behavior-based insights and guided development prompts. Momentum transforms team leaders into consistent mentors who drive measurable performance and professional growth."
  },
  {
    title: "Customer Success and Support",
    description: "Strengthen retention and satisfaction with structured feedback tools, objection handling resources and conversation insight tracking. Momentum helps teams turn communication into connection by aligning support tactics with long-term revenue outcomes."
  },
  {
    title: "Success Principles and Professional Development",
    description: "Support personal and professional growth at every stage with psychology-informed training paths, reflection tools and reinforcement strategies. Momentum develops both skill and confidence by adapting to each user's role and goals."
  }
];
