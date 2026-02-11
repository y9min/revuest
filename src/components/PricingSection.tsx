import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const items = [
  "Automated SMS Requests",
  "Review Reactivation Campaign",
  "Dynamic Follow-Ups",
  "AI Smart Messaging",
  "Auto AI Review Replies",
  "Social Media Posting",
  "CRM Integration",
  "Zapier Access",
  "Unlimited Users",
  "1-1 Setup Support",
];

const PricingSection = () => (
  <section id="pricing" className="py-16 sm:py-20 bg-secondary">
    <div className="max-w-lg mx-auto px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-center mb-12">Simple Pricing</h2>

      <Card className="border-2 border-primary shadow-lg">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-2xl">Growth Plan</CardTitle>
          <CardDescription>For growing service businesses</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-sm text-muted-foreground font-medium mb-1">50–100 Review Requests Per Month</p>
          <p className="text-4xl font-bold text-foreground mb-6">
            £179 <span className="text-base font-normal text-muted-foreground">/ month</span>
          </p>

          <ul className="text-left space-y-3 mb-8">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                <Check className="text-primary shrink-0" size={18} />
                {item}
              </li>
            ))}
          </ul>

          <Button size="lg" className="w-full">Start Free Trial</Button>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default PricingSection;
