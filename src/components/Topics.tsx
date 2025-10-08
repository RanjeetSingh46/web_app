import { Compass, Brain, Shield, Building, Heart } from "lucide-react";

const Topics = () => {
  const topics = [
    {
      icon: Compass,
      title: "Command to Clarity",
      subtitle: "Leadership Lessons from the Frontline",
      description: "Battlefield-tested principles for corporate decision-making and execution. Learn to communicate intent, set non-negotiable standards, and align teams to mission-critical outcomes."
    },
    {
      icon: Brain,
      title: "Strategic Thinking Under Pressure",
      subtitle: "Decision-Making When It Counts",
      description: "A practical toolkit for ambiguity: rapid OODA loops, red teaming, and scenario planning that turn uncertainty into advantage."
    },
    {
      icon: Shield,
      title: "Building High-Performance Teams",
      subtitle: "Military Drills for Corporate Excellence",
      description: "Team-building drills adapted for corporate environments—high trust, shared rituals, and after-action reviews that hardwire continuous improvement."
    },
    {
      icon: Heart,
      title: "Resilience & Change Management",
      subtitle: "Thriving Through Transformation",
      description: "Mindset, routines, and coaching protocols to help teams thrive through transformation and volatility."
    },
    {
      icon: Building,
      title: "Effective Communication & Team Coordination",
      subtitle: "Clarity Before Speed",
      description: "Concise briefs, common operating pictures, and feedback loops for seamless collaboration across functions."
    },
    {
      icon: Heart,
      title: "Ethics, Honour & Purpose-Driven Leadership",
      subtitle: "Values That Outlast Volatility",
      description: "Integrity, accountability, and service-before-self as catalysts for sustainable performance and a successful life."
    },
    {
      icon: Building,
      title: "Nation-Building through Leadership",
      subtitle: "Inspiring Meaningful Contribution",
      description: "Build institutions that serve society—linking corporate excellence with national progress and social responsibility."
    },
    {
      icon: Heart,
      title: "Emotional Intelligence & Inclusive Leadership",
      subtitle: "Leadership 5.0",
      description: "People-centric leadership that fosters empathy, inclusion, and psychological safety without compromising standards."
    }
  ];

  return (
    <section id="topics" className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-primary-foreground mb-3">
            Signature <span className="text-secondary">Speaking Topics</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-4"></div>
          <p className="text-primary-foreground/80 max-w-3xl mx-auto">
            Transformational insights that bridge military excellence and professional success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {topics.map((topic, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-6 shadow-card hover:shadow-elevated transition-all hover:-translate-y-1 border-t-4 border-secondary"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-4">
                <topic.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{topic.title}</h3>
              <p className="text-sm font-semibold text-primary mb-2">{topic.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;
