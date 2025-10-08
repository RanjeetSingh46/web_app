import { Shield, Target, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const ValuePropositions = () => {
  const values = [
    {
      icon: Target,
      title: "Military-Grade Leadership",
      description: "Proven leadership frameworks from 41 years of military service, adapted for corporate excellence. Transform battlefield principles into boardroom success.",
    },
    {
      icon: Shield,
      title: "Ethics & Mission-First Culture",
      description: "Build values-driven organizations rooted in integrity, accountability, and purpose. Create cultures of honour that outlast volatility and drive sustainable performance.",
    },
    {
      icon: Users,
      title: "Resilient, Adaptive Teams",
      description: "Transform teams through trust-building, after-action reviews, and disciplined execution frameworks. Military-tested methods for high-performance collaboration.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-3">
              From Battlefield Command to Boardroom Impact
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              General's Compazz delivers military-grade leadership that builds resilient teams, ethical cultures, and decisive execution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-elevated transition-shadow border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;
