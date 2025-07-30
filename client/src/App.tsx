import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import WhatsAppWidget from "@/components/layout/whatsapp-widget";
import Home from "@/pages/home";
import Jobs from "@/pages/jobs";
import TalentPool from "@/pages/talent-pool";
import ResumeBuilder from "@/pages/resume-builder";
import InterviewTips from "@/pages/interview-tips";
import HireTalent from "@/pages/hire-talent";
import Contact from "@/pages/contact";
import Blog from "@/pages/blog";
import Pricing from "@/pages/pricing";


function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/talent-pool" component={TalentPool} />
          <Route path="/resume-builder" component={ResumeBuilder} />
          <Route path="/interview-tips" component={InterviewTips} />
          <Route path="/hire-talent" component={HireTalent} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/pricing" component={Pricing} />

        </Switch>
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
