
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface NotFoundProps {
  openLoginDialog: () => void;
}

const NotFound = ({ openLoginDialog }: NotFoundProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="container flex flex-col items-center justify-center h-full py-24 text-center">
          <h1 className="text-6xl font-bold text-slateblue mb-6">404</h1>
          <h2 className="text-3xl font-semibold text-graphite mb-8">Page Not Found</h2>
          <p className="text-lg text-slate-600 max-w-md mb-10">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex gap-4">
            <Button asChild className="bg-slateblue hover:bg-slateblue/90">
              <Link to="/">Return Home</Link>
            </Button>
            <Button variant="outline" onClick={openLoginDialog}>
              Sign In
            </Button>
          </div>
        </div>
      </main>
      <Footer openLoginDialog={openLoginDialog} />
    </div>
  );
};

export default NotFound;
