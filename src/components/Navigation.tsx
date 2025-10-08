import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <img 
              src={logo} 
              alt="General's Compazz Logo" 
              className="h-12 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/about"
              className={`font-semibold transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-white hover:text-secondary'
              }`}
            >
              About the General
            </Link>
            <Link
              to="/offerings"
              className={`font-semibold transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-white hover:text-secondary'
              }`}
            >
              Offerings
            </Link>
            <Link
              to="/clients-impact"
              className={`font-semibold transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-white hover:text-secondary'
              }`}
            >
              Clients & Impact
            </Link>
            <Link
              to="/insights"
              className={`font-semibold transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-white hover:text-secondary'
              }`}
            >
              Insights
            </Link>
            <Link
              to="/media"
              className={`font-semibold transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-white hover:text-secondary'
              }`}
            >
              Media
            </Link>
            <Link to="/contact">
              <Button 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
              >
                Book a Session
              </Button>
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <Link to="/booking">
              <Button 
                size="sm"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
              >
                Book
              </Button>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={isScrolled ? 'text-foreground' : 'text-white'}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-6 mt-8">
                  <Link to="/about" className="text-lg font-semibold text-foreground hover:text-primary">
                    About the General
                  </Link>
                  <Link to="/offerings" className="text-lg font-semibold text-foreground hover:text-primary">
                    Offerings
                  </Link>
                  <Link to="/clients-impact" className="text-lg font-semibold text-foreground hover:text-primary">
                    Clients & Impact
                  </Link>
                  <Link to="/insights" className="text-lg font-semibold text-foreground hover:text-primary">
                    Insights
                  </Link>
                  <Link to="/media" className="text-lg font-semibold text-foreground hover:text-primary">
                    Media Gallery
                  </Link>
                  <Link to="/contact" className="text-lg font-semibold text-foreground hover:text-primary">
                    Contact & Booking
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
