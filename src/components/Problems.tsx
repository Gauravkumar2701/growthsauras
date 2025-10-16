import { Card } from "@/components/ui/card";
import { AlertCircle, Target, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    tag: "Issues",
    title: "Your emails keep landing in spam",
    description: "Poor domain setup, no warming, and overused templates get flagged. If emails aren't hitting inboxes, nothing else matters.",
  },
  {
    icon: Target,
    tag: "Concerns",
    title: "Personalization that doesn't work",
    description: "Generic flattery isn't personalization. Everyone's using the same playbook, and prospects can smell it from a mile away.",
  },
  {
    icon: TrendingDown,
    tag: "Frustrations",
    title: "Low send volume and no replies",
    description: "Cold emails need to be surgically written, hyper-relevant, and human-sounding.",
  },
];

export const Problems = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary mb-4">Challenges</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Sent hundreds of emails, booked Zero Meetings?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            You're not alone. Most campaigns fail because of bad copy, poor deliverability, and zero strategy. We fix everything.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <problem.icon className="h-12 w-12 text-primary mb-4" />
              <p className="text-xs font-semibold text-primary mb-2 uppercase">{problem.tag}</p>
              <h3 className="text-xl font-bold mb-4 text-foreground">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
