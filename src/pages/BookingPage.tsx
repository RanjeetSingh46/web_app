import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, Users, MapPin, Mail, Phone, Instagram } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BookingPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    eventType: "",
    eventDate: "",
    duration: "",
    attendees: "",
    location: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Submitted",
      description: "We'll contact you within 24 hours to confirm your booking.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      eventType: "",
      eventDate: "",
      duration: "",
      attendees: "",
      location: "",
      message: ""
    });
  };

  return (
    <>
      <Helmet>
        <title>Book a Session - Leadership Speaking Engagement | General's Compazz</title>
        <meta name="description" content="Book Maj Gen Ranjit Singh for keynotes, workshops, and leadership seminars. Flexible duration and format options available." />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-navy-deep to-navy-medium">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Book Your Leadership Session
              </h1>
              <p className="text-xl text-white/90">
                Transform your team with military-inspired leadership excellence
              </p>
            </div>
          </div>
        </section>

        {/* Booking Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                Simple Booking Process
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-16">
                <div className="text-center">
                  <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-secondary-foreground">
                    1
                  </div>
                  <h3 className="font-bold text-primary mb-2">Submit Request</h3>
                  <p className="text-sm text-muted-foreground">Fill out the booking form</p>
                </div>

                <div className="text-center">
                  <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-secondary-foreground">
                    2
                  </div>
                  <h3 className="font-bold text-primary mb-2">Consultation</h3>
                  <p className="text-sm text-muted-foreground">We discuss your needs</p>
                </div>

                <div className="text-center">
                  <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-secondary-foreground">
                    3
                  </div>
                  <h3 className="font-bold text-primary mb-2">Confirmation</h3>
                  <p className="text-sm text-muted-foreground">Pay 50% booking fee</p>
                </div>

                <div className="text-center">
                  <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-secondary-foreground">
                    4
                  </div>
                  <h3 className="font-bold text-primary mb-2">Event Day</h3>
                  <p className="text-sm text-muted-foreground">Transformational session</p>
                </div>
              </div>

              {/* Booking Form */}
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">Event Details</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91-9876543210"
                      />
                    </div>

                    <div>
                      <Label htmlFor="organization">Organization *</Label>
                      <Input
                        id="organization"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({...formData, organization: e.target.value})}
                        placeholder="Your Company/Institution"
                      />
                    </div>

                    <div>
                      <Label htmlFor="eventType">Event Type *</Label>
                      <Input
                        id="eventType"
                        required
                        value={formData.eventType}
                        onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                        placeholder="Keynote/Workshop/Seminar"
                      />
                    </div>

                    <div>
                      <Label htmlFor="eventDate">Preferred Date</Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
                      />
                    </div>

                    <div>
                      <Label htmlFor="duration">Session Duration</Label>
                      <Input
                        id="duration"
                        value={formData.duration}
                        onChange={(e) => setFormData({...formData, duration: e.target.value})}
                        placeholder="30/60/90 minutes"
                      />
                    </div>

                    <div>
                      <Label htmlFor="attendees">Expected Attendees</Label>
                      <Input
                        id="attendees"
                        type="number"
                        value={formData.attendees}
                        onChange={(e) => setFormData({...formData, attendees: e.target.value})}
                        placeholder="100"
                      />
                    </div>

                    <div>
                      <Label htmlFor="location">Event Location</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        placeholder="City, State"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Additional Details</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us about your event, audience, and specific requirements..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                      Submit Booking Request
                    </Button>
                  </form>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">Booking Information</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-accent p-6 rounded-lg">
                      <h4 className="font-bold text-primary mb-4">Session Options</h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-secondary mt-1" />
                          <div>
                            <p className="font-semibold text-foreground">Duration</p>
                            <p className="text-sm text-muted-foreground">30, 60, or 90 minutes</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Calendar className="w-5 h-5 text-secondary mt-1" />
                          <div>
                            <p className="font-semibold text-foreground">Format</p>
                            <p className="text-sm text-muted-foreground">In-person or Virtual</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Users className="w-5 h-5 text-secondary mt-1" />
                          <div>
                            <p className="font-semibold text-foreground">Audience Size</p>
                            <p className="text-sm text-muted-foreground">From small groups to large audiences</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card p-6 rounded-lg shadow-elevated border-l-4 border-secondary">
                      <h4 className="font-bold text-primary mb-4">Payment Terms</h4>
                      <ul className="space-y-2 text-sm text-card-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-secondary">•</span>
                          <span>Fees discussed based on duration and format</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary">•</span>
                          <span>50% booking fee required to confirm</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-secondary">•</span>
                          <span>Travel and accommodation by booking agency</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-accent p-6 rounded-lg">
                      <h4 className="font-bold text-primary mb-4">Direct Contact</h4>
                      <div className="space-y-3">
                        <a href="mailto:ranjit@generalscompazz.net" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                          <Mail className="w-5 h-5 text-secondary" />
                          <span>ranjit@generalscompazz.net</span>
                        </a>
                        <a href="tel:+919818520837" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                          <Phone className="w-5 h-5 text-secondary" />
                          <span>+91-9818520837</span>
                        </a>
                        <a href="https://instagram.com/generals_compazz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                          <Instagram className="w-5 h-5 text-secondary" />
                          <span>@generals_compazz</span>
                        </a>
                      </div>
                    </div>
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

export default BookingPage;
