import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Target, Users, Heart } from "lucide-react";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About - General's Compazz | Leadership & Motivation Experts</title>
        <meta name="description" content="Learn about General's Compazz Pvt Ltd and Maj Gen (Dr) Ranjit Singh - decorated military veteran delivering transformational leadership solutions." />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-navy-deep to-navy-medium">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                About General's Compazz
              </h1>
              <p className="text-xl text-white/90">
                Empowering Leaders Through Military-Inspired Excellence
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                GENERAL'S COMPAZZ PVT LTD
              </h2>
              
              <div className="prose prose-lg max-w-none space-y-6 text-foreground">
                <p className="text-lg leading-relaxed">
                  Generals Compazz is a newly established Private Limited Company by General (Dr) Ranjit Singh, Sena Medal, Vishisht Seva Medal; a decorated military veteran with 41 years of service to the nation. The General Officer is a leadership and motivational expert, a strategic thinker and nation builder. He is an outstanding orator and brings unparalleled experience in leading troops in complex security environments along India's frontiers and abroad. The General's Talks blend military precision, emotional intelligence and visionary leadership leaving audiences inspired, engaged, and transformed.
                </p>

                <p className="text-lg leading-relaxed">
                  Generals Compazz is dedicated to delivering leadership and motivation solutions inspired by proven military principles and professionalism. The General Officer's mission is to empower individuals, organisations, and institutions through expert-led talks, seminars, workshops, and strategic consulting, that drive transformational results in leadership, teamwork, and operational excellence.
                </p>

                <p className="text-lg leading-relaxed">
                  Generals Compazz leverages the rich experience and disciplined ethos of the Indian Army to provide clients with actionable insights and personalised programs for leadership development, organisational growth, and motivation. The General Officer conducts interactive training, motivational speaking sessions, and corporate consultancy, focusing on values such as integrity, courage, adaptability, and decisive action—qualities vital for success in any field.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-primary">
                  Generals Compazz is your guide to unlocking leadership potential and achieving excellence by integrating military-inspired strategies into everyday challenges, making it a valuable partner for professional and personal growth.
                </p>
              </div>

              {/* Core Values */}
              <div className="grid md:grid-cols-2 gap-8 mt-16">
                <div className="p-6 bg-accent rounded-lg">
                  <Award className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">Integrity</h3>
                  <p className="text-muted-foreground">
                    Upholding the highest standards of honesty and ethical conduct in all our engagements.
                  </p>
                </div>
                
                <div className="p-6 bg-accent rounded-lg">
                  <Target className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">Excellence</h3>
                  <p className="text-muted-foreground">
                    Delivering exceptional leadership solutions that drive measurable results.
                  </p>
                </div>
                
                <div className="p-6 bg-accent rounded-lg">
                  <Users className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">Adaptability</h3>
                  <p className="text-muted-foreground">
                    Tailoring strategies to meet the unique needs of every client and situation.
                  </p>
                </div>
                
                <div className="p-6 bg-accent rounded-lg">
                  <Heart className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">Courage</h3>
                  <p className="text-muted-foreground">
                    Inspiring decisive action and bold leadership in challenging environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Speaker Bio Section */}
        <section className="py-20 bg-gradient-to-br from-accent to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Maj Gen (Dr) Ranjit Singh, SM, VSM (Retd)
                </h2>
                <p className="text-xl text-muted-foreground">
                  Leadership & Motivational Speaker | Strategic Thinker | Nation Builder
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-elevated">
                <h3 className="text-2xl font-bold text-primary mb-6">About the Speaker</h3>
                <p className="text-lg leading-relaxed text-card-foreground mb-6">
                  A decorated Army Veteran with 41 years of service to the nation, the General brings unparalleled experience in leading troops in complex security environments, strategic planning and military diplomacy across continents. A recipient of the Sena Medal, Vishisht Seva Medal and Army Chief's Commendation Cards for bravery and distinguished service; his leadership and motivational talks blend military precision, emotional intelligence, and visionary leadership—leaving audiences inspired, engaged, and transformed.
                </p>

                {/* Honors & Awards */}
                <div className="mt-8 p-6 bg-accent rounded-lg">
                  <h4 className="text-xl font-bold text-primary mb-4">Honors & Recognition</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-foreground">Sena Medal for Gallantry</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-foreground">Vishisht Seva Medal for Distinguished Service</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-foreground">Army Chief's Commendation Cards</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-foreground">41 Years of Distinguished Military Service</span>
                    </li>
                  </ul>
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

export default AboutPage;
