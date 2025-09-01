import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import BackButton from "./components/BackButton";
import PageTransition from "./components/PageTransition";
import { OverlayProvider } from "./context/OverlayContext";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import Sculpture from "./pages/Sculpture";
import Painting from "./pages/Painting";
import Video from "./pages/Video";
import Exhibition from "./pages/Exhibition";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  // Enable smooth scroll for all pages
  useSmoothScroll(true);

  return (
    <PageTransition>
      <Routes location={location}>
        <Route path="/" element={<Index />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/sculpture" element={<Sculpture />} />
        <Route path="/painting" element={<Painting />} />
        <Route path="/video" element={<Video />} />
        <Route path="/exhibition" element={<Exhibition />} />
        <Route path="/about" element={<About />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <OverlayProvider>
          <BackButton />
          <AnimatedRoutes />
        </OverlayProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
