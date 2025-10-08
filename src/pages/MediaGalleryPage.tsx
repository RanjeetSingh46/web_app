import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Image as ImageIcon, Video, Newspaper, Award } from "lucide-react";
import heroSpeaker from "@/assets/hero_image.jpeg";
import leadershipConcept from "@/assets/speaking_time.jpeg";

const MediaGalleryPage = () => {
  const linkedInPosts = [
    {
      title: "Motivational Talk for Students of LPU",
      description: "Motivational talk for students of LPU on leadership and excellence",
      url: "https://www.linkedin.com/posts/ranjit-singh-35696a374_motivatational-talk-for-students-of-lpu-on-activity-7380590069457367040-EpXX",
      image: heroSpeaker,
      type: "image"
    },
    {
      title: "Address to 1200+ Students",
      description: "It was great to address 1200+ students on leadership principles and nation building",
      url: "https://www.linkedin.com/posts/ranjit-singh-35696a374_it-was-great-to-address-1200-students-of-activity-7380588423952220160-lW25",
      image: leadershipConcept,
      type: "image"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Media Gallery - Speaking Events & Press Coverage | General's Compazz</title>
        <meta name="description" content="View photos, videos, and media coverage of Maj Gen Ranjit Singh's speaking engagements and leadership programs." />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-navy-deep to-navy-medium">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Media Gallery
              </h1>
              <p className="text-xl text-white/90">
                Capturing Moments of Leadership & Transformation
              </p>
            </div>
          </div>
        </section>

        {/* LinkedIn Posts */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <ImageIcon className="w-10 h-10 text-secondary" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Recent Speaking Engagements
                </h2>
              </div>
              
              <div className="grid gap-8">
                {linkedInPosts.map((post, index) => (
                  <a 
                    key={index}
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card rounded-lg shadow-elevated overflow-hidden hover:shadow-gold transition-shadow group"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative aspect-video md:aspect-square overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-primary mb-4">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          {post.description}
                        </p>
                        <div className="flex items-center gap-2 text-secondary font-semibold">
                          <span>View on LinkedIn</span>
                          <ImageIcon className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Follow Us on Social Media
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Stay updated with the latest events, insights, and leadership content.
              </p>
              <div className="flex justify-center gap-6">
                <a 
                  href="https://instagram.com/generals_compazz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-card px-8 py-4 rounded-lg shadow-elevated hover:shadow-gold transition-shadow flex items-center gap-3"
                >
                  <ImageIcon className="w-6 h-6 text-secondary" />
                  <span className="font-semibold text-primary">@generals_compazz</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default MediaGalleryPage;
