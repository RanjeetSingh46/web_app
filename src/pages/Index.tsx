import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ValuePropositions from "@/components/ValuePropositions";
import TrustSignals from "@/components/TrustSignals";
import QuickPrograms from "@/components/QuickPrograms";
import FeaturedInsight from "@/components/FeaturedInsight";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>General's Compazz | Military-Grade Leadership for Corporate Excellence</title>
        <meta name="description" content="Transform your organization with military-tested leadership from Maj Gen (Dr) Ranjit Singh, SM, VSM (Retd). 41 years of proven service delivering keynotes, workshops, and strategic advisory." />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <ValuePropositions />
        <TrustSignals />
        <QuickPrograms />
        <FeaturedInsight />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
