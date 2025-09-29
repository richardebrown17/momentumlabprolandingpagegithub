
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { assessmentQuestions } from "./assessmentData";
import { personas } from "./personaData";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PersonaAssessmentProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PersonaAssessment = ({ isOpen, onClose }: PersonaAssessmentProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(assessmentQuestions.length).fill(""));
  const [showResults, setShowResults] = useState(false);
  const [primaryPersona, setPrimaryPersona] = useState("");
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const goToNextQuestion = () => {
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
      setShowResults(true);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    const scores: Record<string, number> = {
      "Analyst": 0,
      "Actor": 0,
      "Ally": 0,
      "Aggressor": 0,
    };

    answers.forEach((answer, index) => {
      const question = assessmentQuestions[index];
      const selectedOption = question.options.find((option, i) => i === parseInt(answer));
      
      if (selectedOption) {
        scores[selectedOption.persona] += question.weighting;
      }
    });

    // Find the persona with the highest score
    let maxScore = 0;
    let primaryPersona = "";
    
    for (const [persona, score] of Object.entries(scores)) {
      if (score > maxScore) {
        maxScore = score;
        primaryPersona = persona;
      }
    }
    
    setPrimaryPersona(primaryPersona);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmittedEmail(true);
      // Here you would typically send the email to your backend
      console.log("Email submitted:", email);
    }
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers(Array(assessmentQuestions.length).fill(""));
    setShowResults(false);
    setEmail("");
    setSubmittedEmail(false);
  };

  const handleClose = () => {
    resetAssessment();
    onClose();
  };

  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md md:max-w-lg lg:max-w-2xl bg-[#F1F1F1]">
        {!showResults ? (
          <div className="space-y-6">
            <div className="mb-4">
              <div className="h-2 w-full bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-[#4DA1FF] rounded-full" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-right mt-1 text-gray-500">
                Question {currentQuestion + 1} of {assessmentQuestions.length}
              </p>
            </div>

            <h2 className="text-xl font-bold text-center">
              {assessmentQuestions[currentQuestion].question}
            </h2>

            <RadioGroup 
              value={answers[currentQuestion]} 
              onValueChange={handleAnswer}
              className="space-y-4"
            >
              {assessmentQuestions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3 border p-3 rounded">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                    {option.text}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex justify-between pt-4">
              <Button 
                variant="outline" 
                onClick={goToPreviousQuestion}
                disabled={currentQuestion === 0}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              <Button 
                className="bg-[#4DA1FF] hover:bg-[#4DA1FF]/90 text-white" 
                onClick={goToNextQuestion}
                disabled={answers[currentQuestion] === ""}
              >
                {currentQuestion === assessmentQuestions.length - 1 ? "See Results" : "Next"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 text-center">
            <h2 className="text-2xl font-bold">Your Primary Sales Persona:</h2>
            <div className="py-6">
              <h3 className="text-3xl font-bold text-[#4DA1FF]">
                The {primaryPersona}
              </h3>
              <div className="mt-4 p-6 bg-gray-100 rounded relative">
                {/* Blurred content */}
                <div className="blur-sm">
                  {primaryPersona && personas.find(p => p.title.includes(primaryPersona))?.primaryDescription}
                  <div className="mt-4">
                    <h4 className="font-semibold">How Momentum Helps You:</h4>
                    <p>{primaryPersona && personas.find(p => p.title.includes(primaryPersona))?.benefit}</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded">
                  {!submittedEmail ? (
                    <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
                      <h4 className="text-lg font-bold mb-3">Get Your Full Persona Analysis</h4>
                      <p className="mb-4 text-gray-700">Enter your email to receive detailed insights about your sales persona and personalized strategies.</p>
                      <form onSubmit={handleEmailSubmit} className="space-y-4">
                        <Input 
                          type="email" 
                          placeholder="Your email address" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <Button 
                          type="submit"
                          className="w-full bg-[#4DA1FF] hover:bg-[#4DA1FF]/90 text-white"
                        >
                          Get My Full Analysis
                        </Button>
                      </form>
                    </div>
                  ) : (
                    <div className="bg-white p-6 rounded shadow-lg text-center">
                      <h4 className="text-lg font-bold mb-3">Thank You!</h4>
                      <p className="mb-4">We've sent your full persona analysis to your email.</p>
                      <p className="text-sm text-gray-500">Check your inbox in the next few minutes.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <Button 
              variant="outline" 
              onClick={resetAssessment}
              className="mt-4"
            >
              Retake Assessment
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
