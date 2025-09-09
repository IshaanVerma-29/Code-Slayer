import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Timeline from "./pages/Timeline";
import Tracks from "./pages/Tracks";
import Rewards from "./pages/Rewards";
import Sponsors from "./pages/Sponsors";
import Team from "./pages/Team";
import FAQs from "./pages/FAQs";
// src/App.tsx (or src/main router file)
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";     // whatever your home component is
import NotFound from "./pages/NotFound";
import BatchGenerator from "./pages/BatchGenerator";

function App() {
  return (
    <BrowserRouter>
      {/* your header/nav component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/batch-generator" element={<BatchGenerator />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faqs" element={<FAQs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
