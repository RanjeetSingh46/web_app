import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero_image.jpeg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Leadership Speaker" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30">
            <p className="text-secondary font-semibold text-sm tracking-wide">
              SM, VSM | 41+ YEARS OF DISTINGUISHED SERVICE
            </p>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
      Maj. Gen. (Dr) Ranjit Singh
      <br />
      <span className="text-secondary">SM, VSM (Retd)</span>
    </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-6 leading-relaxed font-semibold">
            Leadership & Motivational Speaker | Strategic Thinker | Nation Builder
          </p>
          
          <p className="text-base md:text-lg text-primary-foreground/90 mb-6 leading-relaxed">
            From battlefield command to boardroom impact — General's Compazz delivers military-grade leadership that builds resilient teams, ethical cultures, and decisive execution.
          </p>
          
          <div className="mb-8 space-y-2">
            <p className="text-sm md:text-base text-primary-foreground/80 flex items-start gap-2">
              <span className="text-secondary">✓</span>
              <span>41+ years of distinguished service in the Indian Army</span>
            </p>
            <p className="text-sm md:text-base text-primary-foreground/80 flex items-start gap-2">
              <span className="text-secondary">✓</span>
              <span>Decorations: Sena Medal (SM), Vishisht Seva Medal (VSM), multiple Commendation Cards</span>
            </p>
            <p className="text-sm md:text-base text-primary-foreground/80 flex items-start gap-2">
              <span className="text-secondary">✓</span>
              <span>Leadership across continents: Uganda, Drass/Kargil, Northeast India (IGAR East)</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 shadow-gold transition-all hover:scale-105"
            >
              Invite to Speak
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 transition-all"
              onClick={() => window.location.href = '/offerings'}
            >
              Book a Workshop
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
