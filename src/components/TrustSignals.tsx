import { Award, Shield, Star, Users } from "lucide-react";

const TrustSignals = () => {
  const signals = [
    {
      icon: Award,
      label: "Sena Medal (SM)",
      description: "For gallantry and bravery",
    },
    {
      icon: Award,
      label: "Vishisht Seva Medal (VSM)",
      description: "For distinguished service",
    },
    {
      icon: Shield,
      label: "41+ Years Service",
      description: "Indian Army veteran",
    },
    {
      icon: Star,
      label: "Key Leadership Roles",
      description: "IGAR East, Brigade Commander, ADG Recruiting",
    },
  ];

  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-primary mb-3">
              Decorated Leadership. Proven Results.
            </h2>
            <p className="text-muted-foreground">
              Four decades of distinguished service at the highest levels of military leadership.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {signals.map((signal, index) => (
              <div key={index} className="bg-card p-5 rounded-lg shadow-card text-center border border-border">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <signal.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-bold text-primary mb-2 text-base">
                  {signal.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {signal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
