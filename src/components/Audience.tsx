import { GraduationCap, Briefcase, Building2, Shield, TrendingUp } from "lucide-react";

const Audience = () => {
  const audiences = [
    { icon: GraduationCap, label: "Business Schools & Universities" },
    { icon: TrendingUp, label: "Youth & Aspiring Professionals/Civil Servants" },
    { icon: Briefcase, label: "Corporate Leaders & CXOs" },
    { icon: Building2, label: "Government & PSU Executives" },
    { icon: Shield, label: "Defence & Police Training Academies" }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-foreground mb-3">
            Who Should <span className="text-primary">Attend</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Tailored leadership insights for diverse professional audiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-5 text-center shadow-card hover:shadow-elevated transition-all hover:-translate-y-1 border-b-4 border-primary"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full mb-3">
                <audience.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-semibold text-foreground leading-snug">{audience.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
