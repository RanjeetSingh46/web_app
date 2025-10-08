import logo from "@/assets/logo.jpeg";
import { MapPin, Mail, Phone, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-deep py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={logo} 
                  alt="General's Compazz Logo" 
                  className="h-14 w-auto"
                />
              </div>
              <h3 className="text-lg font-bold text-primary-foreground mb-3">
                GENERAL'S COMPAZZ <span className="text-secondary">PVT. LTD.</span>
              </h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed mb-3">
                A leadership and motivation enterprise founded by Maj Gen (Dr) Ranjit Singh, SM, VSM (Retd). 
                Empowering individuals and organisations through military-inspired leadership excellence.
              </p>
              <p className="text-sm text-primary-foreground/60 italic">
                Guiding You to Lead, Inspire, and Excel.
              </p>
            </div>

            <div>
              <h4 className="text-base font-bold text-primary-foreground mb-3">Our Mission</h4>
              <p className="text-sm text-primary-foreground/70 leading-relaxed mb-3">
                To empower individuals and organisations through leadership, motivation, and strategy programs 
                inspired by proven military principles and professional excellence.
              </p>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                Drawing from the Indian Army's ethos of <strong className="text-secondary">discipline</strong>, 
                <strong className="text-secondary"> integrity</strong>, <strong className="text-secondary"> courage</strong>, 
                and <strong className="text-secondary"> adaptability</strong>.
              </p>
            </div>

            <div>
              <h4 className="text-base font-bold text-primary-foreground mb-3">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <p className="text-sm text-primary-foreground/70 leading-relaxed">
                    103-3F AWHO Gurjinder Vihaar, Sector Chi 1, Omega 1, Greater Noida, UP 201310
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                  <a href="mailto:ranjit@generalscompazz.net" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                    ranjit@generalscompazz.net
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                  <a href="tel:+919818520837" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                    +91-9818520837
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-secondary flex-shrink-0" />
                  <a href="https://www.generalscompazz.net" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                    www.generalscompazz.net
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-6 text-center">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} General's Compazz Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
