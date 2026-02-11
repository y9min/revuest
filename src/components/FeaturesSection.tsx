import { Bot, Bell, RotateCcw, Image, Share2, Layout } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  { icon: Bot, title: "AI Review Responses", desc: "Automatically respond to positive reviews while keeping your tone consistent and professional." },
  { icon: Bell, title: "Smart Follow-Ups", desc: "Gentle reminders are sent automatically if a customer hasn't left a review." },
  { icon: RotateCcw, title: "Review Reactivation", desc: "Turn past customers into fresh reviews with structured drip campaigns." },
  { icon: Image, title: "Personalised Image Requests", desc: "Send branded image-based review requests to increase response rates." },
  { icon: Share2, title: "Social Media Review Posting", desc: "Automatically turn 5-star reviews into ready-to-post social content." },
  { icon: Layout, title: "Website Review Widgets", desc: "Display live Google reviews on your website to increase conversions." },
];

const FeaturesSection = () => (
  <section id="features" className="py-16 sm:py-20 bg-background">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-center mb-12">
        Powerful Features Built For Service Businesses
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <Card key={f.title} className="bg-secondary border-0 shadow-none hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
