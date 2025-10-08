import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, BookOpen, Globe, Users, Target, Shield } from "lucide-react";
import speakerImage from "@/assets/motivated_tym.jpeg";

const SpeakerProfilePage = () => {
  return (
    <>
      <Helmet>
        <title>Speaker Profile - Maj Gen (Dr) Ranjit Singh | General's Compazz</title>
        <meta name="description" content="Meet Maj Gen (Dr) Ranjit Singh - decorated military veteran with 41 years of service, leadership expert, and transformational speaker." />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-navy-deep to-navy-medium">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Maj Gen (Dr) Ranjit Singh
                  </h1>
                  <p className="text-xl text-secondary font-semibold mb-4">
                    SM, VSM (Retd)
                  </p>
                  <p className="text-lg text-white/90 mb-6">
                    Leadership & Motivational Speaker | Strategic Thinker | Nation Builder
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-secondary">
                      <span className="text-white font-semibold">41 Years Service</span>
                    </div>
                    <div className="bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-secondary">
                      <span className="text-white font-semibold">Decorated Veteran</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src={speakerImage} 
                    alt="Leadership Excellence" 
                    className="rounded-lg shadow-elevated"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Biography */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                About the Speaker
              </h2>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-lg leading-relaxed text-foreground">
                  Maj. Gen. (Dr) Ranjit Singh, SM, VSM (Retd) is a decorated Indian Army veteran whose 41-year career spanned frontline leadership, strategic planning, and international defence diplomacy. He commanded large, diverse teams in high-stakes environments—from high-altitude brigades in Drass/Kargil to counter-insurgency formations in India's Northeast—and led an international military training mission in Uganda. His leadership blends military precision with emotional intelligence and a people-first ethos, inspiring organisations to perform with discipline, honour, and purpose.
                </p>

                <p className="text-lg leading-relaxed text-foreground">
                  A recipient of the <strong className="text-primary">Sena Medal</strong>, <strong className="text-primary">Vishisht Seva Medal</strong> and multiple <strong className="text-primary">Chief of Army Staff & Army Commander Commendation Cards</strong> for bravery and distinguished service; his leadership and motivational talks blend military precision, emotional intelligence, and visionary leadership—leaving audiences inspired, engaged, and transformed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Highlights */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Distinguished Service Highlights
              </h2>
              
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg shadow-elevated border-l-4 border-secondary">
                  <h3 className="text-xl font-bold text-primary mb-2">Inspector General Assam Rifles (East)</h3>
                  <p className="text-muted-foreground">
                    Led over 20,000 troops in complex counter-insurgency operations across India's Northeast
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-elevated border-l-4 border-secondary">
                  <h3 className="text-xl font-bold text-primary mb-2">Brigade Commander, Drass/Kargil</h3>
                  <p className="text-muted-foreground">
                    Commanded high-altitude brigade in one of the world's most challenging operational environments
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-elevated border-l-4 border-secondary">
                  <h3 className="text-xl font-bold text-primary mb-2">International Training Mission, Uganda</h3>
                  <p className="text-muted-foreground">
                    Led military training and defence diplomacy initiatives in Africa
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-elevated border-l-4 border-secondary">
                  <h3 className="text-xl font-bold text-primary mb-2">Major General (Staff Duties), HQ Central Command</h3>
                  <p className="text-muted-foreground">
                    Strategic planning and operational coordination at Command headquarters
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-elevated border-l-4 border-secondary">
                  <h3 className="text-xl font-bold text-primary mb-2">Additional Director General Recruiting (Punjab & J&K)</h3>
                  <p className="text-muted-foreground">
                    Oversight of recruitment operations across critical regions
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-elevated border-l-4 border-secondary">
                  <h3 className="text-xl font-bold text-primary mb-2">Commanding Officer, 7 MADRAS</h3>
                  <p className="text-muted-foreground">
                    Battalion-level command with operational excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Credentials */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Academic Credentials
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-accent p-6 rounded-lg">
                  <BookOpen className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">PhD in Defence & Strategic Studies</h3>
                  <p className="text-muted-foreground">
                    Specialized research on Indo–China border issues and strategic affairs
                  </p>
                </div>

                <div className="bg-accent p-6 rounded-lg">
                  <BookOpen className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Masters in Defence Studies</h3>
                  <p className="text-muted-foreground">
                    Advanced education in military strategy and defence management
                  </p>
                </div>

                <div className="bg-accent p-6 rounded-lg">
                  <BookOpen className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Masters in Management Sciences</h3>
                  <p className="text-muted-foreground">
                    Bridging military leadership with contemporary management practices
                  </p>
                </div>

                <div className="bg-accent p-6 rounded-lg">
                  <Award className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Sought-After Orator & Mentor</h3>
                  <p className="text-muted-foreground">
                    Recognized speaker at leading institutions and corporate forums
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Philosophy */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Leadership Philosophy
              </h2>
              
              <div className="bg-card p-8 rounded-lg shadow-elevated">
                <p className="text-lg text-card-foreground mb-6 text-center italic">
                  "Leadership is not about rank or position—it's about taking responsibility, serving others, and inspiring teams to achieve the impossible."
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Discipline</h4>
                      <p className="text-muted-foreground">Foundation of all excellence</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Integrity</h4>
                      <p className="text-muted-foreground">Non-negotiable ethical standards</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Service Before Self</h4>
                      <p className="text-muted-foreground">Mission and team above personal gain</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Courage</h4>
                      <p className="text-muted-foreground">Moral and physical bravery</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">People-First Leadership</h4>
                      <p className="text-muted-foreground">Empowering and caring for teams</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Emotional Intelligence</h4>
                      <p className="text-muted-foreground">Understanding and inspiring others</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Honors & Recognition */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Honors & Recognition
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-accent p-8 rounded-lg shadow-elevated border-l-4 border-secondary">
                  <div className="flex items-start gap-4">
                    <Award className="w-10 h-10 text-secondary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">Sena Medal (SM)</h3>
                      <p className="text-muted-foreground">
                        Awarded for gallantry and exceptional bravery in the face of the enemy
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-accent p-8 rounded-lg shadow-elevated border-l-4 border-secondary">
                  <div className="flex items-start gap-4">
                    <Award className="w-10 h-10 text-secondary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">Vishisht Seva Medal (VSM)</h3>
                      <p className="text-muted-foreground">
                        Recognized for distinguished service of exceptional order
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-accent p-8 rounded-lg shadow-elevated border-l-4 border-secondary">
                  <div className="flex items-start gap-4">
                    <Award className="w-10 h-10 text-secondary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">Chief of Army Staff Commendation</h3>
                      <p className="text-muted-foreground">
                        Multiple commendation cards for outstanding leadership and service
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-accent p-8 rounded-lg shadow-elevated border-l-4 border-secondary">
                  <div className="flex items-start gap-4">
                    <Award className="w-10 h-10 text-secondary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">Army Commander Commendation</h3>
                      <p className="text-muted-foreground">
                        Honored for exceptional operational achievements
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Areas of Expertise
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Strategic Leadership
                  </h3>
                  <p className="text-muted-foreground">
                    Combat-tested strategies for organizational success and team performance
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Team Building
                  </h3>
                  <p className="text-muted-foreground">
                    Creating high-performing teams through trust and collaboration
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Crisis Management
                  </h3>
                  <p className="text-muted-foreground">
                    Decision-making under pressure and navigating complex challenges
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Global Perspective
                  </h3>
                  <p className="text-muted-foreground">
                    International experience in military diplomacy and operations
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Ethical Leadership
                  </h3>
                  <p className="text-muted-foreground">
                    Values-based leadership rooted in integrity and honor
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Nation Building
                  </h3>
                  <p className="text-muted-foreground">
                    Inspiring contribution to society and national development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Speaking Style */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                Speaking Style & Approach
              </h2>
              
              <div className="bg-card p-8 rounded-lg shadow-elevated">
                <p className="text-lg leading-relaxed text-card-foreground mb-6">
                  The General's speaking style is a powerful blend of <strong className="text-primary">military precision</strong>, <strong className="text-primary">emotional intelligence</strong>, and <strong className="text-primary">visionary leadership</strong>. His talks are not mere presentations—they are transformational experiences that leave lasting impact.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground"><strong>Engaging & Interactive:</strong> Captivating storytelling from real frontline experiences</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground"><strong>Practical & Actionable:</strong> Concrete strategies that can be immediately implemented</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground"><strong>Inspirational & Motivational:</strong> Leaving audiences energized and ready to lead</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground"><strong>Customized & Relevant:</strong> Tailored content addressing specific organizational needs</p>
                  </div>
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

export default SpeakerProfilePage;
