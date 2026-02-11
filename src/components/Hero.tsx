import { Button } from "@/components/ui/button";

const Hero = () => (
  <section className="bg-secondary py-20 sm:py-28">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
        Review Automation for Your Business
      </h1>
      <p className="mt-5 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
        Get The Reviews You've Earned. Rank Higher On Google. Win More Customers.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button size="lg" asChild>
          <a href="#pricing">Start Getting Reviews</a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#how-it-works">Book a Demo</a>
        </Button>
      </div>
    </div>
  </section>
);

export default Hero;
