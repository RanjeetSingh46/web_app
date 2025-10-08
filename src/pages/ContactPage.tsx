import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact & Book a Session - General's Compazz</title>
        <meta name="description" content="Book a leadership session with Maj Gen Ranjit Singh. Contact us for keynotes, workshops, and strategic retreats." />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
