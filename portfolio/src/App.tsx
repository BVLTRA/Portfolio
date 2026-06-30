import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Construction } from "lucide-react"; // Import the icon
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// A prettier, more detailed construction component
const ConstructionWall = ({ onUnlock }: { onUnlock: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-background p-6">
    <div className="text-center space-y-6 max-w-sm animate-in fade-in duration-700">
      <div className="w-20 h-20 mx-auto bg-secondary rounded-2xl flex items-center justify-center">
        <Construction className="w-10 h-10 text-muted-foreground" />
      </div>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter">Under Construction</h1>
        <p className="text-muted-foreground">
          BVLTRA is currently being refined behind the scenes. 
          We're crafting something precise. Check back 
          <span onClick={onUnlock} className="cursor-text ml-1 hover:text-accent transition-colors">
            later
          </span>.
        </p>
      </div>
      <div className="pt-8 border-t border-border">
        <p className="text-xs text-muted-foreground uppercase tracking-widest">
          Est. Completion: Q3 2026
        </p>
      </div>
    </div>
  </div>
);

const App = () => {
  const [isUnlocked, setIsUnlocked] = useState(
    sessionStorage.getItem("bvltra_dev_access") === "true"
  );

  const unlockSite = () => {
    sessionStorage.setItem("bvltra_dev_access", "true");
    setIsUnlocked(true);
  };

  if (!isUnlocked) {
    return <ConstructionWall onUnlock={unlockSite} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;