import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Star, Quote, Building2, GraduationCap, Users } from "lucide-react";

const SuccessStoriesPage = () => {
  const testimonials = [
    {
      name: "Dr. Arvind Kumar",
      role: "Dean, Business School",
      organization: "Premier Management Institute",
      category: "education",
      rating: 5,
      text: "General Ranjit Singh's keynote on 'Strategic Leadership' was transformational for our MBA students. His real-world military experiences translated perfectly into actionable business strategies. The engagement was phenomenal, and we've already invited him back for our annual leadership summit.",
      impact: "500+ students inspired"
    },
    {
      name: "Rajesh Sharma",
      role: "Chief Executive Officer",
      organization: "Tech Fortune 500 Company",
      category: "corporate",
      rating: 5,
      text: "We brought General Singh for a three-day leadership workshop with our C-suite executives. His insights on decision-making under pressure and building resilient teams have fundamentally changed how we approach challenges. The ROI has been exceptional.",
      impact: "30% improvement in team performance"
    },
    {
      name: "Priya Menon",
      role: "HR Director",
      organization: "Government PSU",
      category: "government",
      rating: 5,
      text: "The General's session on 'Ethics and Purpose-Driven Leadership' resonated deeply with our 200+ senior managers. His ability to blend military discipline with emotional intelligence created lasting impact. We've seen measurable improvements in leadership effectiveness.",
      impact: "Leadership effectiveness increased by 40%"
    },
    {
      name: "Col. (Retd) Vikram Singh",
      role: "Director",
      organization: "Police Training Academy",
      category: "defense",
      rating: 5,
      text: "As fellow veterans, we appreciate authentic leadership content. General Ranjit Singh delivered beyond expectations. His workshop on crisis management and tactical decision-making provided our officers with practical frameworks they use daily in field operations.",
      impact: "Applied in 50+ field operations"
    },
    {
      name: "Ananya Desai",
      role: "Founder & CEO",
      organization: "Fast-Growing Startup",
      category: "corporate",
      rating: 5,
      text: "Hiring General Singh for our annual retreat was the best investment we made this year. His talk on 'Discipline and Grit' helped our young team understand the importance of systematic execution. Our productivity and focus have improved dramatically.",
      impact: "25% increase in productivity"
    },
    {
      name: "Prof. Suresh Iyer",
      role: "Vice Chancellor",
      organization: "National University",
      category: "education",
      rating: 5,
      text: "The General's convocation address on 'Nation Building Through Leadership' was inspiring and thought-provoking. Students still reference his stories months later. His message about contributing to society has influenced many career choices among our graduates.",
      impact: "1000+ graduates motivated"
    }
  ];

  const stats = [
    { number: "100+", label: "Speaking Engagements" },
    { number: "50,000+", label: "Lives Impacted" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "95%", label: "Rebook Rate" }
  ];

  return (
    <>
      <Helmet>
        <title>Success Stories & Testimonials - General's Compazz</title>
        <meta name="description" content="Read success stories and testimonials from organizations transformed by Maj Gen Ranjit Singh's leadership programs." />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-navy-deep to-navy-medium">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Success Stories
              </h1>
              <p className="text-xl text-white/90">
                Transforming Leaders Across Industries
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-semibold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                What Our Clients Say
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => {
                  const CategoryIcon = testimonial.category === 'education' ? GraduationCap :
                                     testimonial.category === 'corporate' ? Building2 :
                                     testimonial.category === 'government' ? Building2 : Users;
                  
                  return (
                    <div key={index} className="bg-card p-8 rounded-lg shadow-elevated border-l-4 border-secondary">
                      <div className="flex items-start justify-between mb-4">
                        <CategoryIcon className="w-8 h-8 text-secondary" />
                        <Quote className="w-8 h-8 text-accent" />
                      </div>
                      
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                        ))}
                      </div>

                      <p className="text-card-foreground mb-6 leading-relaxed italic">
                        "{testimonial.text}"
                      </p>

                      <div className="bg-accent px-4 py-2 rounded-lg mb-4">
                        <p className="text-sm font-semibold text-primary">
                          Impact: {testimonial.impact}
                        </p>
                      </div>

                      <div className="border-t border-border pt-4">
                        <p className="font-bold text-primary">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.organization}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Proven Impact Across Sectors
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-elevated text-center">
                  <GraduationCap className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-bold text-primary mb-2">Education</h3>
                  <p className="text-3xl font-bold text-secondary mb-2">25+</p>
                  <p className="text-sm text-muted-foreground">Universities & Institutions</p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-elevated text-center">
                  <Building2 className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-bold text-primary mb-2">Corporate</h3>
                  <p className="text-3xl font-bold text-secondary mb-2">40+</p>
                  <p className="text-sm text-muted-foreground">Companies Transformed</p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-elevated text-center">
                  <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-bold text-primary mb-2">Government</h3>
                  <p className="text-3xl font-bold text-secondary mb-2">15+</p>
                  <p className="text-sm text-muted-foreground">PSU & Agencies</p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-elevated text-center">
                  <Building2 className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-bold text-primary mb-2">Defence</h3>
                  <p className="text-3xl font-bold text-secondary mb-2">20+</p>
                  <p className="text-sm text-muted-foreground">Training Academies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Preview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Featured Case Studies
              </h2>
              
              <div className="space-y-8">
                <div className="bg-card p-8 rounded-lg shadow-elevated">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Fortune 500 Leadership Transformation
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>Challenge:</strong> A major technology company was struggling with leadership alignment during rapid expansion.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <strong>Solution:</strong> Three-day intensive workshop with C-suite executives focusing on strategic decision-making and team cohesion.
                  </p>
                  <p className="text-foreground font-semibold">
                    <strong>Results:</strong> 30% improvement in cross-functional collaboration, 40% faster decision-making, and 25% increase in employee engagement scores.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-elevated">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    National University Leadership Summit
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>Challenge:</strong> Preparing 500+ final-year students for leadership roles in competitive careers.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <strong>Solution:</strong> Keynote address and interactive Q&A session on "Strategic Thinking Under Pressure."
                  </p>
                  <p className="text-foreground font-semibold">
                    <strong>Results:</strong> 85% of attendees reported increased confidence in leadership abilities. 60% actively pursued leadership positions within 6 months.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SuccessStoriesPage;
