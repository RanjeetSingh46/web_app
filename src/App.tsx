import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import OfferingsPage from "./pages/OfferingsPage";
import ClientsImpactPage from "./pages/ClientsImpactPage";
import InsightsPage from "./pages/InsightsPage";
import MediaGalleryPage from "./pages/MediaGalleryPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
// Legacy pages for backward compatibility
import SpeakerProfilePage from "./pages/SpeakerProfilePage";
import SpeakingPage from "./pages/SpeakingPage";
import BookingPage from "./pages/BookingPage";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import ResourceCenterPage from "./pages/ResourceCenterPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/offerings" element={<OfferingsPage />} />
          <Route path="/clients-impact" element={<ClientsImpactPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/media" element={<MediaGalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Legacy routes for backward compatibility */}
          <Route path="/speaker" element={<SpeakerProfilePage />} />
          <Route path="/speaking" element={<SpeakingPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/resources" element={<ResourceCenterPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
