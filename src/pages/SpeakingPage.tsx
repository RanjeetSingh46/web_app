import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Brain, 
  Award, 
  Users, 
  Clock,
  Building2,
  GraduationCap,
  Briefcase,
  Shield
} from "lucide-react";

const SpeakingPage = () => {
  return (
    <>
      <Helmet>
        <title>Speaking Topics & Services - General's Compazz</title>
        <meta name="description" content="Explore leadership talks, workshops and strategic retreats by Maj Gen Ranjit Singh. Topics include frontline leadership, strategic thinking, resilience and nation-building." />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-navy-deep to-navy-medium">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Speaking Topics & Services
              </h1>
              <p className="text-xl text-white/90">
                Transformational Leadership Programs for Modern Challenges
              </p>
            </div>
          </div>
        </section>

        {/* Keynote Topics */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
                Keynote Speaking Topics
              </h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">60–90 minute transformational sessions</p>
              
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg shadow-elevated border-l-4 border-secondary">
                  <div className="flex items-start gap-4">
                    <Target className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        Command to Clarity: Leadership Lessons from the Frontline
                      </h3>
                      <p className="text-muted-foreground">
                        Battlefield-tested principles for corporate decision-making and execution. Leaders learn to communicate intent, set non-negotiable standards, and align teams to mission-critical outcomes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-elevated border-l-4 border-secondary">
                  <div className="flex items-start gap-4">
                    <Brain className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        Strategic Thinking Under Pressure
                      </h3>
                      <p className="text-muted-foreground">
                        A practical toolkit for ambiguity: rapid OODA loops, red teaming, and scenario planning that turn uncertainty into advantage.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-elevated border-l-4 border-secondary">
                  <div className="flex items-start gap-4">
                    <Award className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        Resilience & Change Leadership
                      </h3>
                      <p className="text-muted-foreground">
                        Mindset, routines, and coaching protocols to help teams thrive through transformation and volatility.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-elevated border-l-4 border-secondary">
                  <div className="flex items-start gap-4">
                    <Shield className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        Ethics, Honour & Purpose-Driven Leadership
                      </h3>
                      <p className="text-muted-foreground">
                        Values that outlast volatility—integrity, accountability, and service-before-self as catalysts for sustainable performance.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-elevated border-l-4 border-secondary">
                  <div className="flex items-start gap-4">
                    <Users className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        Nation-Building through Leadership
                      </h3>
                      <p className="text-muted-foreground">
                        A call to build institutions that serve society—linking corporate excellence with national progress.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-elevated border-l-4 border-secondary">
                  <div className="flex items-start gap-4">
                    <Users className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        Effective Communication & Team Coordination
                      </h3>
                      <p className="text-muted-foreground">
                        Clarity before speed: concise briefs, common operating pictures, and feedback loops for seamless collaboration across functions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-elevated border-l-4 border-secondary">
                  <div className="flex items-start gap-4">
                    <Users className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        Emotional Intelligence & Inclusive Leadership (Leadership 5.0)
                      </h3>
                      <p className="text-muted-foreground">
                        People-centric leadership that fosters empathy, inclusion, and psychological safety without compromising standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Workshops */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
                Corporate Workshops
              </h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">Half-day or full-day interactive sessions</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-elevated">
                  <Users className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Building High-Performance, Resilient Teams
                  </h3>
                  <p className="text-muted-foreground">
                    Military team-building drills adapted for corporate environments—high trust, shared rituals, after-action reviews, and mission clarity.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-elevated">
                  <Brain className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Crisis Decision-Making
                  </h3>
                  <p className="text-muted-foreground">
                    Wargaming, scenarios, and rapid coordination exercises to prepare teams for high-pressure situations.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-elevated">
                  <Target className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Leading Change
                  </h3>
                  <p className="text-muted-foreground">
                    Narrative, alignment, and momentum—practical frameworks for organizational transformation.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-elevated">
                  <Users className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Inclusive & Emotionally Intelligent Leadership
                  </h3>
                  <p className="text-muted-foreground">
                    Coaching, feedback, and empathy-in-action for Leadership 5.0.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Advisory */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Strategic Advisory Services
              </h2>
              
              <div className="space-y-6">
                <div className="bg-accent p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Executive Offsites & Leadership Retreats
                  </h3>
                  <p className="text-muted-foreground">
                    Intent-based leadership workshops and strategy mapping sessions for senior executives.
                  </p>
                </div>

                <div className="bg-accent p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Tabletop Exercises (TTX) & Wargaming
                  </h3>
                  <p className="text-muted-foreground">
                    Risk and readiness simulations to stress-test organizational response capabilities.
                  </p>
                </div>

                <div className="bg-accent p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Culture & Ethics Programs
                  </h3>
                  <p className="text-muted-foreground">
                    Code of honour development, accountability rhythms, and values-to-behaviours transformation.
                  </p>
                </div>

                <div className="bg-accent p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Strategy Maps & Operating Rhythms
                  </h3>
                  <p className="text-muted-foreground">
                    OKRs, KPIs, and performance management systems inspired by military operational planning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Attend */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Who Should Attend
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-elevated">
                  <GraduationCap className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Business Schools & Universities
                  </h3>
                  <p className="text-muted-foreground">
                    Empowering the next generation of leaders
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-elevated">
                  <Users className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Youth & Aspiring Professionals
                  </h3>
                  <p className="text-muted-foreground">
                    Future civil servants and changemakers
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-elevated">
                  <Briefcase className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Corporate Leaders & CXOs
                  </h3>
                  <p className="text-muted-foreground">
                    Strategic insights for business excellence
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-elevated">
                  <Building2 className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Government & PSU Executives
                  </h3>
                  <p className="text-muted-foreground">
                    Public sector leadership transformation
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-elevated">
                  <Shield className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Defence Training Academies
                  </h3>
                  <p className="text-muted-foreground">
                    Military leadership enhancement
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-elevated">
                  <Award className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Police Training Academies
                  </h3>
                  <p className="text-muted-foreground">
                    Law enforcement leadership development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formats & Delivery */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Formats & Delivery
              </h2>
              
              <div className="bg-card p-8 rounded-lg shadow-elevated mb-8">
                <p className="text-lg text-card-foreground mb-6">
                  Available for keynote addresses, leadership workshops, strategic retreats, and panel discussions. Sessions can be tailored to your specific needs.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary mb-2">Duration Options</h4>
                      <p className="text-muted-foreground">30, 60, or 90 minutes sessions</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary mb-2">Delivery Format</h4>
                      <p className="text-muted-foreground">In-person or virtual sessions</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fees */}
              <div className="bg-accent p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-primary mb-4">Fees & Booking</h3>
                <p className="text-lg text-foreground mb-4">
                  Fees are customized based on duration and format. 50% booking fee required to confirm. Travel and accommodation arrangements to be borne by the booking agency.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                    Book a Session
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SpeakingPage;
