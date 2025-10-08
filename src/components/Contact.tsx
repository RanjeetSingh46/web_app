import { Mail, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "ranjit@generalscompazz.net",
      href: "mailto:ranjit@generalscompazz.net",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9818520837",
      href: "tel:+919818520837",
      color: "text-primary"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@generals_compazz",
      href: "https://instagram.com/generals_compazz",
      color: "text-primary"
    }
  ];

  const address = "103-3F AWHO Gurjinder Vihaar, Sector Chi 1, Omega 1, Greater Noida, UP 201310";

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-primary to-navy-deep">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-5">
          </div>
          <h2 className="text-primary-foreground mb-3">
            Book a <span className="text-secondary">Session</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-4"></div>
          <p className="text-primary-foreground/80 max-w-3xl mx-auto">
            Transform your organization with proven leadership principles. Get in touch to discuss your requirements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-card rounded-lg p-5 text-center hover:shadow-elevated transition-all hover:-translate-y-1 group border border-border"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3 group-hover:bg-secondary/10 transition-colors">
                  <method.icon className={`w-6 h-6 ${method.color} group-hover:text-secondary transition-colors`} />
                </div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">{method.label}</p>
                <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{method.value}</p>
              </a>
            ))}
          </div>

          <div className="bg-secondary/10 backdrop-blur-sm rounded-xl p-6 md:p-8 text-center border border-secondary/20 mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-3">
              Ready to Transform Your Leadership?
            </h3>
            <p className="text-sm md:text-base text-primary-foreground/80 mb-6 max-w-2xl mx-auto leading-relaxed">
              Whether you're planning a keynote address, workshop, or strategic retreat, 
              reach out today to discuss how we can create an impactful session for your audience.
            </p>
            <Button 
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 shadow-gold"
              onClick={() => window.location.href = 'mailto:ranjit@generalscompazz.net'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us Now
            </Button>
          </div>

          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-5 text-center">
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              <strong className="text-primary-foreground">Office Address:</strong><br />
              {address}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
