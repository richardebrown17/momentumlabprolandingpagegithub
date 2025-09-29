import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Facebook, LogIn } from "lucide-react";

interface LoginDialogProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: "login" | "signup";
}

const LoginDialog = ({ isOpen, onClose, mode = "login" }: LoginDialogProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = () => {
    if (mode === "login") {
      window.location.href = "https://momentumlabprov3.lovable.app/";
    } else {
      console.log("Implement signup");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white border border-gray-200 shadow-lg">
        <DialogHeader className="text-center">
          <img 
            src="/lovable-uploads/426a3438-e57d-4b99-9c44-79322c754820.png"
            alt="Momentum Lab Pro Logo"
            className="h-16 w-auto mx-auto mb-4"
          />
          <DialogTitle className="text-2xl font-bold text-gray-800">
            {mode === "login" ? "Welcome Back!" : "Get Started"}
          </DialogTitle>
          <p className="text-gray-600 mt-2">
            {mode === "login" 
              ? "Enter your details to sign in to your account"
              : "Create your account to start your journey"
            }
          </p>
        </DialogHeader>

        <div className="flex flex-col gap-4 py-4">
          <Input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12"
          />
          {mode === "login" && (
            <a 
              href="#" 
              className="text-sm text-blue-600 hover:text-blue-800 text-right"
            >
              Forgot password?
            </a>
          )}
          
          <Button 
            className="w-full h-12 bg-[#4DA1FF] hover:bg-[#4DA1FF]/90 text-white"
            onClick={handleAuth}
          >
            <LogIn className="w-4 h-4 mr-2" />
            {mode === "login" ? "Sign In" : "Create Account"}
          </Button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-12">
              <img 
                src="https://www.google.com/favicon.ico" 
                alt="Google" 
                className="w-5 h-5 mr-2"
              />
              Google
            </Button>
            <Button variant="outline" className="h-12">
              <Facebook className="w-5 h-5 mr-2 text-blue-600" />
              Facebook
            </Button>
          </div>

          <p className="text-center text-sm text-gray-600 mt-4">
            {mode === "login" ? (
              <>
                Don't have an account?{" "}
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                  Sign up
                </a>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                  Sign in
                </a>
              </>
            )}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
