import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import BackButton from "./components/BackButton";
import PageTransition from "./components/PageTransition";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import Sculpture from "./pages/Sculpture";
import Painting from "./pages/Painting";
import Exhibition from "./pages/Exhibition";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <PageTransition>
      <Routes location={location}>
        <Route path="/" element={<Index />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/sculpture" element={<Sculpture />} />
        <Route path="/painting" element={<Painting />} />
        <Route path="/exhibition" element={<Exhibition />} />
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
        <BackButton />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
