import { Users, TrendingUp, ShieldCheck, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  { icon: Users, title: "Win More Customers", desc: "Strong reviews build instant credibility and make your business the obvious choice." },
  { icon: TrendingUp, title: "Climb Local Search Rankings", desc: "Fresh Google reviews help improve your visibility in local results." },
  { icon: ShieldCheck, title: "Build Trust Fast", desc: "Prospects feel confident choosing businesses backed by consistent 5-star feedback." },
  { icon: Award, title: "Stand Out From Competitors", desc: "When customers compare options, your reputation does the selling for you." },
];

const SolutionSection = () => (
  <section className="py-16 sm:py-20 bg-secondary">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">How Revuest Fixes That</h2>
        <p className="mt-4 text-muted-foreground">
          Reviews are one of the highest-leverage growth drivers for any business. Revuest automates the entire process — so you generate reviews consistently without extra admin, time or faff.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b) => (
          <Card key={b.title} className="bg-background border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <b.icon className="text-primary" size={22} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
