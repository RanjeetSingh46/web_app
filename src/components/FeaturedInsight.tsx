import { BookOpen, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedInsight = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-primary mb-3">
              Latest Insights
            </h2>
            <p className="text-muted-foreground">
              Thought leadership on military-grade corporate excellence.
            </p>
          </div>
          
          <Card className="p-6 md:p-8 hover:shadow-elevated transition-shadow border border-border">
            <div className="flex items-start gap-5">
              <div className="hidden md:block">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary text-xs font-semibold rounded-full">
                    Featured Article
                  </span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                  Leadership Under Fire: Making Decisions When Data is Imperfect
                </h3>
                
                <p className="text-muted-foreground mb-5 text-sm md:text-base leading-relaxed">
                  How military decision-making frameworks can help leaders navigate uncertainty and make better decisions with incomplete information. Learn the OODA loop, red teaming, and rapid assessment techniques used in complex operational environments. Discover why discipline wins and how daily rituals drive sustainable performance.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/insights">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/insights">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      View All Insights
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsight;
