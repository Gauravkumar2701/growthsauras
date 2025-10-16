import { Card } from "@/components/ui/card";
import { Send, User, Users, Wrench } from "lucide-react";

const features = [
  {
    icon: Send,
    title: "Safely send thousands of emails per day",
    description: "Collaborate with us to define your campaign goals and gain full control over your assets.",
  },
  {
    icon: User,
    title: "Personalization that is highly relevant and humane",
    description: "Context-aware personalization that is automated, but looks handcrafted.",
  },
  {
    icon: Users,
    title: "Reach the right people, with the right message",
    description: "Leverage enriched data sources to make custom lists and find contacts, otherwise hidden.",
  },
  {
    icon: Wrench,
    title: "End-to-end infra development and integrations",
    description: "No half-built setups, we engineer your infra for scale, deliverability, and automation.",
  },
];

export const WhyUs = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary mb-4">Why GrowthSauras?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            We turn cold outreach into your #1 growth channel
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-all hover:-translate-y-1">
              <feature.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Scale smarter with cold email systems built for performance. Every campaign is personalized, tested, and optimized to drive results.
          </p>
        </div>
      </div>
    </section>
  );
};