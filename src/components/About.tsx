import { Award, Users, Globe, Target } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Award, label: "41 Years", description: "Distinguished Military Service" },
    { icon: Users, label: "Decorated Veteran", description: "Sena Medal & Vishisht Seva Medal" },
    { icon: Globe, label: "Global Experience", description: "Military Diplomacy Across Continents" },
    { icon: Target, label: "Proven Impact", description: "Transformational Leadership Results" }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-foreground mb-3">
            About the <span className="text-primary">Speaker</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-xl shadow-card p-6 md:p-8 mb-10 border border-border">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
              Maj Gen (Dr) Ranjit Singh, SM, VSM (Retd)
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
              A decorated Indian Army veteran whose <strong>41-year career</strong> spanned frontline leadership, strategic planning, and international defence diplomacy. He commanded large, diverse teams in high-stakes environments—from high-altitude brigades in Drass/Kargil to counter-insurgency formations in India's Northeast—and led an international military training mission in Uganda.
            </p>
            <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
              His leadership blends <strong>military precision with emotional intelligence</strong> and a people-first ethos, inspiring organisations to perform with discipline, honour, and purpose.
            </p>
            
            <div className="bg-accent p-4 rounded-lg mb-4">
              <h4 className="text-base font-bold text-primary mb-2">Key Appointments</h4>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span><strong>Inspector General Assam Rifles (East)</strong> - Led 20,000+ troops in counter-insurgency operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span><strong>Brigade Commander, Drass/Kargil</strong> - High-altitude command in critical border sector</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span><strong>Major General (Staff Duties), HQ Central Command</strong> - Strategic planning and operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span><strong>Additional Director General Recruiting (Punjab & J&K)</strong> - Talent acquisition and development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span><strong>International Training Mission, Uganda</strong> - Military diplomacy and capacity building</span>
                </li>
              </ul>
            </div>

            <div className="bg-accent p-4 rounded-lg">
              <h4 className="text-base font-bold text-primary mb-2">Academic Credentials</h4>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span><strong>PhD in Defence & Strategic Studies</strong> (Indo-China border issues)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span><strong>Master's in Defence Studies</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span><strong>Master's in Management Sciences</strong></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg p-5 text-center shadow-card hover:shadow-elevated transition-all hover:-translate-y-1 border border-border"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-base font-bold text-foreground mb-2">{item.label}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
            <h4 className="text-lg font-bold text-primary mb-3">Leadership Philosophy</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              <div className="text-center">
                <p className="font-bold text-primary text-sm">Discipline</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-primary text-sm">Integrity</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-primary text-sm">Service Before Self</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-primary text-sm">Courage</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-primary text-sm">People-First Leadership</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
