import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen, Video, Download, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const InsightsPage = () => {
  const articles = [
    {
      title: "Leadership Under Fire: Making Decisions When Data is Imperfect",
      excerpt: "How military decision-making frameworks can help leaders navigate uncertainty and make better decisions with incomplete information.",
      category: "Leadership",
      readTime: "8 min read",
    },
    {
      title: "Why Discipline Wins: Daily Rituals for Sustainable Performance",
      excerpt: "The power of disciplined routines and rituals in building high-performing teams that deliver consistent results.",
      category: "Performance",
      readTime: "6 min read",
    },
    {
      title: "Mentorship at Scale: Building the Next Generation of Leaders",
      excerpt: "Practical frameworks for creating mentorship programs that develop future leaders throughout your organization.",
      category: "Development",
      readTime: "10 min read",
    },
    {
      title: "From Command to Collaboration: Modern Military Leadership Lessons",
      excerpt: "How military leadership has evolved from command-and-control to collaborative approaches, and what businesses can learn.",
      category: "Leadership",
      readTime: "7 min read",
    },
  ];

  const videos = [
    {
      title: "Keynote: Leadership Lessons from the Frontline",
      description: "Complete keynote address at National Leadership Summit 2024 on translating battlefield principles to corporate success.",
      duration: "45 min",
      platform: "YouTube",
    },
    {
      title: "Crisis Leadership in Action",
      description: "Highlights from crisis simulation workshop showing real-time decision-making under pressure.",
      duration: "12 min",
      platform: "YouTube",
    },
    {
      title: "Interview: Building Resilient Organizations",
      description: "In-depth conversation on creating organizational resilience through military-tested frameworks.",
      duration: "28 min",
      platform: "YouTube",
    },
  ];

  const downloads = [
    {
      title: "Speaker Profile",
      description: "Complete professional profile including biography, expertise areas, speaking topics, and testimonials.",
      type: "PDF",
      size: "2.3 MB",
    },
    {
      title: "Program Catalogue",
      description: "Detailed overview of all keynotes, workshops, and strategic advisory services with customization options.",
      type: "PDF",
      size: "4.1 MB",
    },
    {
      title: "Leadership Playbook: After-Action Reviews",
      description: "Step-by-step guide to implementing military-style After-Action Reviews in your organization.",
      type: "PDF",
      size: "1.8 MB",
    },
    {
      title: "Case Study Collection",
      description: "Detailed case studies showing measurable impact across different industries and organization sizes.",
      type: "PDF",
      size: "3.5 MB",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Insights - Articles, Videos & Resources | General's Compazz</title>
        <meta name="description" content="Explore thought leadership articles, video highlights from speaking engagements, and downloadable resources on military-grade leadership." />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-navy-deep to-navy-medium">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Insights & Resources
              </h1>
              <p className="text-xl text-white/90">
                Thought Leadership on Military-Grade Corporate Leadership
              </p>
            </div>
          </div>
        </section>

        {/* Content Tabs */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="articles" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-12">
                <TabsTrigger value="articles">Articles</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="downloads">Downloads</TabsTrigger>
              </TabsList>
              
              {/* Articles Tab */}
              <TabsContent value="articles" className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    Latest Articles
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    In-depth articles on leadership, strategy, and organizational excellence from a military perspective.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {articles.map((article, index) => (
                    <Card key={index} className="p-6 hover:shadow-gold transition-shadow cursor-pointer group">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <BookOpen className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs px-2 py-1 bg-secondary/20 text-secondary font-semibold rounded">
                              {article.category}
                            </span>
                            <span className="text-xs text-muted-foreground">{article.readTime}</span>
                          </div>
                          <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {article.excerpt}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
                
                <div className="text-center mt-12">
                  <p className="text-muted-foreground">
                    More articles coming soon. Follow us on <a href="https://instagram.com/generals_compazz" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Instagram</a> for updates.
                  </p>
                </div>
              </TabsContent>
              
              {/* Videos Tab */}
              <TabsContent value="videos" className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    Video Library
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Watch highlights from keynotes, workshops, and interviews showcasing military-tested leadership in action.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videos.map((video, index) => (
                    <Card key={index} className="p-6 hover:shadow-gold transition-shadow cursor-pointer group">
                      <div className="mb-4">
                        <div className="w-full aspect-video bg-gradient-to-br from-navy-deep to-navy-medium rounded-lg flex items-center justify-center">
                          <Video className="w-12 h-12 text-white/80" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs px-2 py-1 bg-secondary/20 text-secondary font-semibold rounded">
                          {video.platform}
                        </span>
                        <span className="text-xs text-muted-foreground">{video.duration}</span>
                      </div>
                      <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {video.description}
                      </p>
                    </Card>
                  ))}
                </div>
                
                <div className="text-center mt-12">
                  <p className="text-muted-foreground">
                    Visit our <a href="/media" className="text-primary font-semibold hover:underline">Media Gallery</a> for more speaking highlights and event coverage.
                  </p>
                </div>
              </TabsContent>
              
              {/* Downloads Tab */}
              <TabsContent value="downloads" className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    Downloadable Resources
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Get access to speaker profiles, program catalogs, leadership playbooks, and case studies.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {downloads.map((item, index) => (
                    <Card key={index} className="p-6 hover:shadow-gold transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Download className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs px-2 py-1 bg-secondary/20 text-secondary font-semibold rounded">
                              {item.type}
                            </span>
                            <span className="text-xs text-muted-foreground">{item.size}</span>
                          </div>
                          <h3 className="text-xl font-bold text-primary mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4">
                            {item.description}
                          </p>
                          <button className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
                            Download <ExternalLink className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
                
                <div className="text-center mt-12 bg-accent p-8 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Need More Information?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Contact us to request custom materials or discuss specific program requirements.
                  </p>
                  <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-lg shadow-gold transition-all">
                    Get in Touch
                  </a>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default InsightsPage;
