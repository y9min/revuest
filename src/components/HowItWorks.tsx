import { Link, Rocket, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  { icon: Link, num: "1", title: "Connect", desc: "Import past and new customers via CRM integration or CSV upload." },
  { icon: Rocket, num: "2", title: "Launch", desc: "Customers receive personalised review requests at the right time." },
  { icon: RefreshCw, num: "3", title: "Automate", desc: "Requests, reminders, replies and review sharing are handled automatically." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-16 sm:py-20 bg-secondary">
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-center mb-12">How It Works</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((s) => (
          <Card key={s.num} className="bg-background border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {s.num}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
