
export interface AssessmentQuestion {
  question: string;
  options: {
    text: string;
    persona: "Analyst" | "Actor" | "Ally" | "Aggressor";
  }[];
  weighting: number;
}

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    question: "When you first approach a new sales prospect, which approach sounds most like you?",
    options: [
      { text: "Contact immediately with a direct pitch", persona: "Aggressor" },
      { text: "Research thoroughly before contacting", persona: "Analyst" },
      { text: "Engage with a story to grab attention", persona: "Actor" },
      { text: "Build rapport and ask about their challenges", persona: "Ally" }
    ],
    weighting: 1
  },
  {
    question: "Before an important sales presentation or client meeting, you usually:",
    options: [
      { text: "Gather and organize all relevant data", persona: "Analyst" },
      { text: "Practice an engaging, lively delivery", persona: "Actor" },
      { text: "Think from the client's perspective", persona: "Ally" },
      { text: "Focus on key points to drive a close", persona: "Aggressor" }
    ],
    weighting: 1
  },
  {
    question: "How do you typically uncover a client's needs during a sales conversation?",
    options: [
      { text: "Keep conversation light and engaging", persona: "Actor" },
      { text: "Listen carefully before offering solutions", persona: "Ally" },
      { text: "Ask direct questions to pinpoint needs", persona: "Aggressor" },
      { text: "Follow a structured questioning process", persona: "Analyst" }
    ],
    weighting: 1.2
  },
  {
    question: "If a client raises a major objection or concern during your pitch, what is your immediate reaction?",
    options: [
      { text: "Work with them to find a resolution", persona: "Ally" },
      { text: "Tackle it head-on with confidence", persona: "Aggressor" },
      { text: "Provide data and logical proof", persona: "Analyst" },
      { text: "Acknowledge it and share a relatable example", persona: "Actor" }
    ],
    weighting: 1
  },
  {
    question: "During a tough price or contract negotiation, you are most likely to:",
    options: [
      { text: "Hold ground and stress high value", persona: "Aggressor" },
      { text: "Lay out logical case with calculations", persona: "Analyst" },
      { text: "Use charm and creativity to find middle ground", persona: "Actor" },
      { text: "Work with client to find a win-win compromise", persona: "Ally" }
    ],
    weighting: 1
  },
  {
    question: "When it's time to close the deal and ask for the client's commitment, you generally:",
    options: [
      { text: "Recap and confirm all key points", persona: "Analyst" },
      { text: "Paint an exciting picture of the future", persona: "Actor" },
      { text: "Guide calmly toward a decision", persona: "Ally" },
      { text: "Go straight for the close with urgency", persona: "Aggressor" }
    ],
    weighting: 1
  },
  {
    question: "After you've successfully closed a sale, how do you handle the client relationship?",
    options: [
      { text: "Stay in touch casually and check-in", persona: "Actor" },
      { text: "Maintain strong follow-ups and support", persona: "Ally" },
      { text: "Move on quickly, reconnect later if needed", persona: "Aggressor" },
      { text: "Verify solution success with scheduled meetings", persona: "Analyst" }
    ],
    weighting: 1
  },
  {
    question: "When planning your daily or weekly sales activities, you:",
    options: [
      { text: "Balance relationship-building and new leads", persona: "Ally" },
      { text: "Prioritize quick wins with urgency", persona: "Aggressor" },
      { text: "Follow structured data-driven approach", persona: "Analyst" },
      { text: "Keep flexible, adjusting based on opportunities", persona: "Actor" }
    ],
    weighting: 1
  },
  {
    question: "In a team sales meeting or brainstorming session, your natural tendency is to:",
    options: [
      { text: "Take charge and drive ambitious targets", persona: "Aggressor" },
      { text: "Provide detailed, analytical insights", persona: "Analyst" },
      { text: "Keep morale high with energy", persona: "Actor" },
      { text: "Encourage collaboration and consensus", persona: "Ally" }
    ],
    weighting: 1
  },
  {
    question: "When you fall short of a sales target or lose a deal, how do you respond?",
    options: [
      { text: "Analyze the loss and adjust approach", persona: "Analyst" },
      { text: "Move on quickly, staying optimistic", persona: "Actor" },
      { text: "Learn from feedback and apply insights", persona: "Ally" },
      { text: "Use loss as motivation to push harder", persona: "Aggressor" }
    ],
    weighting: 1.2
  },
  {
    question: "How do you usually learn new sales techniques or improve your skills?",
    options: [
      { text: "Role-play and interactive learning", persona: "Actor" },
      { text: "Seek mentorship and feedback", persona: "Ally" },
      { text: "Learn through trial and error", persona: "Aggressor" },
      { text: "Study books and research new techniques", persona: "Analyst" }
    ],
    weighting: 1
  },
  {
    question: "What primarily motivates you in a sales role?",
    options: [
      { text: "Helping customers succeed long-term", persona: "Ally" },
      { text: "Thrill of hitting sales targets", persona: "Aggressor" },
      { text: "Achieving goals through strategy", persona: "Analyst" },
      { text: "Excitement of pitching and engagement", persona: "Actor" }
    ],
    weighting: 1.2
  },
  {
    question: "Which statement best describes your communication style with clients?",
    options: [
      { text: "Direct, business-focused communication", persona: "Aggressor" },
      { text: "Detailed and structured communication", persona: "Analyst" },
      { text: "Expressive and engaging conversations", persona: "Actor" },
      { text: "Conversational and empathetic approach", persona: "Ally" }
    ],
    weighting: 1
  },
  {
    question: "If you sense that your sales approach isn't working mid-meeting, what do you do?",
    options: [
      { text: "Pause, assess, and adjust strategy", persona: "Analyst" },
      { text: "Switch tactics creatively to re-engage", persona: "Actor" },
      { text: "Invite client's input and adapt", persona: "Ally" },
      { text: "Double down on the strongest selling point", persona: "Aggressor" }
    ],
    weighting: 1.2
  },
  {
    question: "Which part of the sales process do you find most enjoyable or fulfilling?",
    options: [
      { text: "Love delivering the pitch", persona: "Actor" },
      { text: "Enjoy relationship-building", persona: "Ally" },
      { text: "Live for the close", persona: "Aggressor" },
      { text: "Like planning and strategizing", persona: "Analyst" }
    ],
    weighting: 1
  }
];
