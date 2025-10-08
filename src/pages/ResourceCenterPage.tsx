import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen, FileText, Video, Podcast, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResourceCenterPage = () => {
  const articles = [
    {
      title: "5 Military Leadership Principles for Business Success",
      category: "Leadership",
      description: "Discover how battlefield-tested leadership principles can transform your organization's performance and team dynamics.",
      readTime: "8 min read"
    },
    {
      title: "Building Resilient Teams in Times of Crisis",
      category: "Team Building",
      description: "Learn the strategies military leaders use to create unbreakable team bonds that thrive under pressure.",
      readTime: "6 min read"
    },
    {
      title: "Strategic Decision-Making: Lessons from the Frontline",
      category: "Strategy",
      description: "Master the art of making critical decisions when stakes are high and time is limited.",
      readTime: "10 min read"
    },
    {
      title: "The Power of Discipline in Achieving Goals",
      category: "Personal Development",
      description: "Understand how military discipline translates into sustainable success in professional and personal life.",
      readTime: "7 min read"
    }
  ];

  const videos = [
    {
      title: "Introduction to Military Leadership Principles",
      duration: "15:30",
      views: "25K views"
    },
    {
      title: "Crisis Management Masterclass",
      duration: "22:45",
      views: "18K views"
    },
    {
      title: "Building High-Performance Teams",
      duration: "18:20",
      views: "30K views"
    }
  ];

  const podcasts = [
    {
      title: "Leadership Under Fire: A General's Perspective",
      episode: "Episode 1",
      duration: "45 min"
    },
    {
      title: "From Battlefield to Boardroom",
      episode: "Episode 2",
      duration: "38 min"
    },
    {
      title: "Nation Building Through Leadership",
      episode: "Episode 3",
      duration: "52 min"
    }
  ];

  const downloads = [
    {
      title: "Leadership Assessment Framework",
      type: "PDF Guide",
      size: "2.5 MB"
    },
    {
      title: "Team Building Exercises Handbook",
      type: "PDF Guide",
      size: "3.8 MB"
    },
    {
      title: "Crisis Management Checklist",
      type: "PDF Template",
      size: "1.2 MB"
    },
    {
      title: "Strategic Planning Toolkit",
      type: "PDF Toolkit",
      size: "4.5 MB"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Resource Center - Leadership Articles & Videos | General's Compazz</title>
        <meta name="description" content="Access free leadership resources, articles, videos, and guides from military leadership expert Maj Gen Ranjit Singh." />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-navy-deep to-navy-medium">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Resource Center
              </h1>
              <p className="text-xl text-white/90">
                Free Leadership Resources & Insights
              </p>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <BookOpen className="w-10 h-10 text-secondary" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Featured Articles
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {articles.map((article, index) => (
                  <div key={index} className="bg-card p-6 rounded-lg shadow-elevated border-l-4 border-secondary hover:shadow-gold transition-shadow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-semibold">
                        {article.category}
                      </span>
                      <span className="text-sm text-muted-foreground">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {article.description}
                    </p>
                    <Button variant="outline" className="group">
                      Read Article
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Video Resources */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <Video className="w-10 h-10 text-secondary" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Video Resources
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {videos.map((video, index) => (
                  <div key={index} className="bg-card rounded-lg shadow-elevated overflow-hidden hover:shadow-gold transition-shadow">
                    <div className="bg-navy-deep aspect-video flex items-center justify-center">
                      <Video className="w-16 h-16 text-secondary" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-primary mb-2">
                        {video.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{video.duration}</span>
                        <span>{video.views}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Podcast Episodes */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <Podcast className="w-10 h-10 text-secondary" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Podcast Episodes
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {podcasts.map((podcast, index) => (
                  <div key={index} className="bg-card p-6 rounded-lg shadow-elevated border-l-4 border-secondary hover:shadow-gold transition-shadow">
                    <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Podcast className="w-8 h-8 text-secondary" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{podcast.episode}</p>
                    <h3 className="font-bold text-primary mb-3">
                      {podcast.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{podcast.duration}</p>
                    <Button variant="outline" size="sm">
                      Listen Now
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Downloadable Resources */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <Download className="w-10 h-10 text-secondary" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Downloadable Resources
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {downloads.map((download, index) => (
                  <div key={index} className="bg-card p-6 rounded-lg shadow-elevated flex items-center justify-between hover:shadow-gold transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="bg-accent w-12 h-12 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary mb-1">
                          {download.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {download.type} • {download.size}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Stay Updated
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Subscribe to receive the latest leadership insights, articles, and resources directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-input bg-background"
                />
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ResourceCenterPage;
