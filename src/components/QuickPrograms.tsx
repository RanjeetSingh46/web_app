import { Mic, Users, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const QuickPrograms = () => {
  const programs = [
    {
      icon: Mic,
      title: "Keynotes",
      description: "60–90 minute transformational talks on leadership, strategy, resilience, and nation-building for corporate audiences, universities, and leadership institutes.",
      topics: [
        "Command to Clarity: Leadership from the Frontline",
        "Strategic Thinking Under Pressure",
        "Ethics, Honour & Purpose-Driven Leadership",
        "Nation-Building through Leadership"
      ],
      cta: "Explore Topics",
      link: "/offerings"
    },
    {
      icon: Users,
      title: "Corporate Workshops",
      description: "Half-day or full-day intensive programs building high-performance teams, crisis leadership, and organizational transformation.",
      topics: [
        "Building High-Performance, Resilient Teams (AARs, trust)",
        "Crisis Decision-Making (wargaming, scenarios)",
        "Leading Change (narrative, alignment, momentum)",
        "Inclusive & Emotionally Intelligent Leadership"
      ],
      cta: "View Workshops",
      link: "/offerings"
    },
    {
      icon: Target,
      title: "Strategic Advisory",
      description: "Long-term partnerships for executive offsites, wargaming, and culture transformation programs with measurable business outcomes.",
      topics: [
        "Executive Offsites & Leadership Retreats",
        "Tabletop Exercises (TTX) & Risk Wargaming",
        "Culture & Ethics Programs (codes of honour)",
        "Strategy Maps & Operating Rhythms (OKRs/KPIs)"
      ],
      cta: "Learn More",
      link: "/offerings"
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-primary mb-3">
              Programs Designed for Impact
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Choose from keynotes that inspire, workshops that transform, or strategic advisory that delivers lasting organizational change.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="p-6 flex flex-col hover:shadow-elevated transition-shadow border border-border">
                <div className="w-14 h-14 bg-gradient-to-br from-navy-deep to-navy-medium rounded-full flex items-center justify-center mb-4">
                  <program.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3">
                  {program.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {program.description}
                </p>
                
                <div className="mb-5 flex-grow">
                  <p className="font-semibold text-sm text-foreground mb-2">Includes:</p>
                  <ul className="space-y-1.5">
                    {program.topics.map((topic, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-secondary font-bold">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link to={program.link}>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    {program.cta}
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickPrograms;
