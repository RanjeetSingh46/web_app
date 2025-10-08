import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mic, Users, Target, Lightbulb, Shield, MessageSquare, TrendingUp, Heart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const OfferingsPage = () => {
  const keynotes = [
    {
      title: "Command to Clarity: Leadership Lessons from the Frontline",
      description: "Battlefield-tested principles for corporate decision-making and execution. Leaders learn to communicate intent, set non-negotiable standards, and align teams to mission-critical outcomes.",
      icon: Target,
    },
    {
      title: "Strategic Thinking Under Pressure",
      description: "A practical toolkit for ambiguity: rapid OODA loops, red teaming, and scenario planning that turn uncertainty into advantage.",
      icon: Lightbulb,
    },
    {
      title: "Resilience & Change Leadership",
      description: "Mindset, routines, and coaching protocols to help teams thrive through transformation and volatility.",
      icon: TrendingUp,
    },
    {
      title: "Ethics, Honour & Purpose-Driven Leadership",
      description: "Values that outlast volatility—integrity, accountability, and service-before-self as catalysts for sustainable performance.",
      icon: Shield,
    },
    {
      title: "Nation-Building through Leadership",
      description: "A call to build institutions that serve society—linking corporate excellence with national progress.",
      icon: Heart,
    },
    {
      title: "Effective Communication & Team Coordination",
      description: "Clarity before speed: concise briefs, common operating pictures, and feedback loops for seamless collaboration across functions.",
      icon: MessageSquare,
    },
  ];

  const workshops = [
    {
      title: "Building High-Performance, Resilient Teams",
      description: "Military team-building drills adapted for corporate environments—high trust, shared rituals, and after-action reviews that hardwire continuous improvement.",
      duration: "Half/Full Day",
    },
    {
      title: "Crisis Decision-Making & Rapid Coordination",
      description: "Wargaming and rapid coordination exercises to help teams make better decisions under pressure and respond faster to challenges.",
      duration: "Full Day",
    },
    {
      title: "Leading Change: Narrative, Alignment & Momentum",
      description: "Practical frameworks for managing organizational change—from crafting the narrative to building alignment and maintaining momentum.",
      duration: "Half/Full Day",
    },
    {
      title: "Inclusive & Emotionally Intelligent Leadership (Leadership 5.0)",
      description: "People-centric leadership that fosters empathy, inclusion, and psychological safety without compromising standards.",
      duration: "Full Day",
    },
  ];

  const advisory = [
    {
      title: "Executive Offsites & Leadership Retreats",
      description: "Custom-designed leadership retreats focused on intent-based leadership, strategy maps, and building high-performance cultures.",
    },
    {
      title: "Tabletop Exercises (TTX) & Risk Wargaming",
      description: "Simulation-based exercises to stress-test your organization's readiness, decision-making processes, and crisis response capabilities.",
    },
    {
      title: "Culture & Ethics Programs",
      description: "Comprehensive programs to build codes of honour, accountability rhythms, and values-driven organizational cultures.",
    },
    {
      title: "Strategy Maps & Operating Rhythms",
      description: "Develop clear strategy maps, OKRs, and operating rhythms that align your organization from top to bottom.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Offerings - Leadership Programs & Strategic Advisory | General's Compazz</title>
        <meta name="description" content="Keynotes, corporate workshops, and strategic advisory services. Military-tested leadership frameworks for organizational excellence." />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-navy-deep to-navy-medium">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our Offerings
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Military-Grade Leadership for Corporate Performance
              </p>
              <p className="text-lg text-white/80">
                Transform your organization with combat-tested leadership frameworks—from keynotes that inspire to workshops that transform to strategic advisory that delivers results.
              </p>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="keynotes" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-12">
                <TabsTrigger value="keynotes">Keynotes</TabsTrigger>
                <TabsTrigger value="workshops">Corporate Workshops</TabsTrigger>
                <TabsTrigger value="advisory">Strategic Advisory</TabsTrigger>
              </TabsList>
              
              {/* Keynotes Tab */}
              <TabsContent value="keynotes" className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    Keynote Addresses
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    60–90 minute transformational talks that blend military precision, emotional intelligence, and visionary leadership.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {keynotes.map((keynote, index) => (
                    <Card key={index} className="p-6 hover:shadow-gold transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <keynote.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-primary mb-2">
                            {keynote.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {keynote.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              {/* Workshops Tab */}
              <TabsContent value="workshops" className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    Corporate Workshops
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Intensive half-day or full-day programs that deliver practical, actionable leadership skills for immediate application.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {workshops.map((workshop, index) => (
                    <Card key={index} className="p-8 hover:shadow-gold transition-shadow">
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary text-sm font-semibold rounded-full">
                          {workshop.duration}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-3">
                        {workshop.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {workshop.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              {/* Advisory Tab */}
              <TabsContent value="advisory" className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    Strategic Advisory
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Long-term partnerships to transform your organization's leadership culture, decision-making processes, and strategic capabilities.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {advisory.map((service, index) => (
                    <Card key={index} className="p-8 hover:shadow-gold transition-shadow">
                      <h3 className="text-xl font-bold text-primary mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us to discuss how we can customize our programs to meet your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/booking" className="inline-flex items-center justify-center px-8 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-lg shadow-gold transition-all hover:scale-105">
                Book a Session
              </a>
              <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-card hover:bg-muted text-foreground font-semibold rounded-lg shadow-elevated transition-all">
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default OfferingsPage;
