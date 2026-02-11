import { Button } from "@/components/ui/button";

const steps = [
  { day: "Day 1", title: "Connect & Launch", desc: "Sign up, connect your Google profile and CRM (or upload your customer list). Campaign goes live within minutes." },
  { day: "Day 3", title: "Reviews Start Coming In", desc: "Past and recent customers begin leaving authentic reviews. Responses can be automated and managed centrally." },
  { day: "Day 7", title: "Increased Visibility", desc: "More reviews improve credibility and search positioning, helping you convert more inbound leads." },
];

const ResultsTimeline = () => (
  <section className="py-16 sm:py-20 bg-background">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">What Can Happen In The First 7 Days</h2>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#pricing">Start Getting Reviews</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#how-it-works">Book a Demo</a>
          </Button>
        </div>
      </div>

      <div className="relative mt-12">
        {/* Vertical line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden sm:block" />

        <div className="space-y-10">
          {steps.map((s, i) => (
            <div key={s.day} className="relative flex items-start gap-6 sm:gap-0">
              {/* Dot */}
              <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground items-center justify-center text-xs font-bold z-10">
                {i + 1}
              </div>

              {/* Content — alternating sides */}
              <div className={`sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12 sm:ml-auto"}`}>
                <div className="bg-secondary rounded-lg p-5">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{s.day}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ResultsTimeline;
