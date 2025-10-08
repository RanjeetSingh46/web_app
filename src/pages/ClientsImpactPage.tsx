import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TrendingUp, Users, Award, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const ClientsImpactPage = () => {
  const caseStudies = [
    {
      title: "From Silos to Synergy",
      organization: "Leading Manufacturing Company",
      challenge: "Cross-functional teams working in silos, missing deadlines, and poor coordination.",
      solution: "Implemented After-Action Review (AAR) protocols and mission clarity workshops.",
      results: [
        "+18% improvement in on-time delivery",
        "35% reduction in rework cycles",
        "Improved cross-team collaboration scores by 40%"
      ],
      icon: TrendingUp,
    },
    {
      title: "Crisis Simulation Success",
      organization: "Financial Services Firm",
      challenge: "Slow incident response times and unclear escalation protocols during market volatility.",
      solution: "Conducted crisis leadership labs with wargaming scenarios and rapid coordination drills.",
      results: [
        "35% faster incident response time",
        "Reduced escalation confusion by 50%",
        "Enhanced decision-making confidence under pressure"
      ],
      icon: Users,
    },
    {
      title: "Values-Driven Culture Transformation",
      organization: "Technology Startup (200+ employees)",
      challenge: "High turnover rate and unclear company values as the organization scaled.",
      solution: "Developed and implemented Values-to-Behaviours program with accountability rhythms.",
      results: [
        "9% improvement in employee retention",
        "28% increase in employee engagement scores",
        "Established clear code of honour and leadership standards"
      ],
      icon: Award,
    },
  ];

  const testimonials = [
    {
      quote: "General Singh's keynote was transformational. His battlefield experiences translated perfectly to our boardroom challenges. Our leadership team left energized and equipped with practical tools.",
      author: "Rajesh Kumar",
      position: "CEO, Manufacturing Conglomerate",
    },
    {
      quote: "The workshop on crisis decision-making was unlike anything we've experienced. The wargaming exercises exposed our blind spots and gave us frameworks we now use daily.",
      author: "Dr. Priya Sharma",
      position: "Head of Learning & Development, PSU",
    },
    {
      quote: "What sets General Singh apart is his ability to blend military discipline with emotional intelligence. His insights on people-first leadership have reshaped how our managers lead.",
      author: "Vikram Mehta",
      position: "CHRO, Technology Company",
    },
    {
      quote: "The tabletop exercises revealed gaps in our crisis response we didn't know existed. The General's strategic advisory has made us far more resilient as an organization.",
      author: "Anika Desai",
      position: "Risk Management Director, Financial Services",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Clients & Impact - Case Studies & Testimonials | General's Compazz</title>
        <meta name="description" content="See the measurable impact of our leadership programs through case studies, testimonials, and success stories from corporates and institutions." />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-navy-deep to-navy-medium">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Clients & Impact
              </h1>
              <p className="text-xl text-white/90">
                Measurable Results. Transformed Organizations. Inspired Leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Case Studies
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Real challenges. Real solutions. Real results. See how we've helped organizations transform their leadership and performance.
                </p>
              </div>
              
              <div className="space-y-8">
                {caseStudies.map((study, index) => (
                  <Card key={index} className="p-8 hover:shadow-gold transition-shadow">
                    <div className="grid md:grid-cols-12 gap-6">
                      <div className="md:col-span-1 flex items-start">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <study.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      
                      <div className="md:col-span-11">
                        <h3 className="text-2xl font-bold text-primary mb-2">
                          {study.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">{study.organization}</p>
                        
                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                          <div>
                            <h4 className="font-bold text-foreground mb-2">Challenge</h4>
                            <p className="text-muted-foreground text-sm">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground mb-2">Solution</h4>
                            <p className="text-muted-foreground text-sm">{study.solution}</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground mb-2">Results</h4>
                            <ul className="space-y-1">
                              {study.results.map((result, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="text-secondary font-bold">•</span>
                                  <span>{result}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  What Leaders Say
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Hear from CXOs, HR leaders, and decision-makers who have experienced the transformational impact of our programs.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="p-8 relative">
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-secondary/20" />
                    <p className="text-foreground mb-6 italic relative z-10">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-primary">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Media Coverage Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Media Coverage
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Featured in leading publications and media outlets for thought leadership on military-grade corporate leadership.
              </p>
              
              <Card className="p-8">
                <p className="text-muted-foreground">
                  Check our <a href="/media" className="text-primary font-semibold hover:underline">Media Gallery</a> for recent speaking engagements, press coverage, and event highlights.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the organizations that have transformed their leadership and achieved measurable results.
            </p>
            <a href="/booking" className="inline-flex items-center justify-center px-8 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-lg shadow-gold transition-all hover:scale-105">
              Start Your Transformation
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ClientsImpactPage;
