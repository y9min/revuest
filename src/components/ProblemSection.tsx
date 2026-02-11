import { Star, Clock, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const problems = [
  {
    icon: Star,
    title: "Plenty of Happy Customers. Not Enough Reviews.",
    desc: "You've done the work, but your online presence doesn't show it. New prospects can't see the proof.",
  },
  {
    icon: Clock,
    title: "No Time to Chase Reviews",
    desc: "Following up manually takes time you don't have. You're focused on running and growing the business.",
  },
  {
    icon: Search,
    title: "Low Visibility on Google",
    desc: "Customers compare reviews before choosing. If competitors look stronger online, they get chosen first.",
  },
];

const ProblemSection = () => (
  <section className="py-16 sm:py-20 bg-background">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
          Your Business Delivers Quality. Your Online Reputation Should Reflect That.
        </h2>
        <p className="mt-4 text-muted-foreground">
          You complete the job. The customer is happy. They say "I'll leave a review." Then nothing happens.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((p) => (
          <Card key={p.title} className="bg-secondary border-0 shadow-none hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <p.icon className="text-primary" size={22} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
