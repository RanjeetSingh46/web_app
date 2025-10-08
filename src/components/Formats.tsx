import { Mic, Users, Mountain, MessageSquare, Clock, MapPin } from "lucide-react";
import leadershipImage from "@/assets/award.jpeg";

const Formats = () => {
  const formats = [
    { icon: Mic, label: "Keynote Addresses" },
    { icon: Users, label: "Leadership Workshops" },
    { icon: Mountain, label: "Strategic Offsites & Retreats" },
    { icon: MessageSquare, label: "Panel Discussions" }
  ];

  const details = [
    { icon: Clock, label: "Duration", value: "30, 60, or 90 minutes" },
    { icon: MapPin, label: "Mode", value: "In-person or Virtual" }
  ];

  return (
    <section id="formats" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-foreground mb-3">
            Formats & <span className="text-primary">Delivery</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-4"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-5">Available Formats</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {formats.map((format, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 bg-accent rounded-lg p-3 hover:bg-accent/80 transition-colors border border-border"
                  >
                    <div className="flex-shrink-0 w-9 h-9 bg-primary rounded-full flex items-center justify-center">
                      <format.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">{format.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                {details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 bg-secondary/10 rounded-full flex items-center justify-center mt-1">
                      <detail.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">{detail.label}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src={leadershipImage} 
                alt="Leadership Strategy" 
                className="rounded-xl shadow-card w-full border border-border"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent rounded-xl"></div>
            </div>
          </div>

          <div className="bg-accent rounded-xl p-6 border-l-4 border-secondary">
            <h4 className="text-lg font-bold text-foreground mb-3">Fees & Booking Information</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>Fees:</strong> To be discussed based on session duration and format</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>Booking:</strong> 50% advance payment required for confirmation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>Travel & Accommodation:</strong> To be arranged and borne by the hosting organisation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span><strong>Customization:</strong> All programs can be tailored to your organization's specific needs and objectives</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formats;
