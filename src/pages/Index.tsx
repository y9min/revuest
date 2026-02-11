import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ResultsTimeline from "@/components/ResultsTimeline";
import HowItWorks from "@/components/HowItWorks";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ResultsTimeline />
      <HowItWorks />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
    </main>
    <Footer />
  </div>
);

export default Index;
