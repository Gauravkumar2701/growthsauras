import { Card } from "@/components/ui/card";
import { Shield, FileText, Search, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Shield,
    tag: "Achieve",
    title: "Complete Cold Email Infrastructure",
    description: "We don't just \"launch campaigns\", we build the engine behind them. From domain registration and inbox creation to warming protocols and DNS authentication (SPF, DKIM, DMARC), we engineer the full backend to ensure your emails land in inboxes, not spam. Everything is set up for scale and deliverability, so you can send thousands of emails without hurting your sender reputation.",
  },
  {
    number: "02",
    icon: FileText,
    tag: "Secure",
    title: "Persona-Driven Copy & Sequences",
    description: "Generic messaging is dead. We craft cold email sequences based on deep persona research, using tested copywriting frameworks adapted to your ICP's industry, role, and pain points. Each line is written to hook attention, spark relevance, and drive replies. From first touch to final follow-up, your outreach will feel personal, human, and high-converting.",
  },
  {
    number: "03",
    icon: Search,
    tag: "Discover",
    title: "Lead Sourcing, Enrichment & Validation",
    description: "We source targeted lead lists based on your ideal customer profile, then enrich each contact with accurate data points like titles, company size, industry, funding, tech stack, and more. Every lead is run through multi-step verification to reduce bounces and keep your sending reputation intact.",
  },
  {
    number: "04",
    icon: TrendingUp,
    tag: "Optimize",
    title: "Campaign Management, Testing & Optimization",
    description: "Every campaign is continuously monitored, A/B tested, and refined to improve deliverability, open rates, and replies. Subject lines, CTAs, sending windows, and copy variants are all optimized based on real performance data, not guesswork. You get a system that improves over time and drives consistent results.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {steps.map((step, index) => (
          <div key={index} className="mb-20 last:mb-0">
            <Card className="p-8 md:p-12 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="text-6xl font-bold text-primary/20">{step.number}</div>
                </div>
                <div className="flex-1">
                  <step.icon className="h-12 w-12 text-primary mb-4" />
                  <p className="text-xs font-semibold text-primary mb-2 uppercase">{step.tag}</p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
