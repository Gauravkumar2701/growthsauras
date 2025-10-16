import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Honestly didn't expect much, but within a week we had replies and booked calls. Cold email started making sense.",
    name: "Sarah Johnson",
    role: "Partner, Software Outsourcing",
  },
  {
    quote: "Tried 3 agencies before this, none delivered. Then came these guys. The copy hit, and we were getting replies.",
    name: "Name Surname",
    role: "Owner, Fractional CFO",
  },
  {
    quote: "We were getting ghosted constantly before this. Now we're averaging 3-5 solid meetings a week.",
    name: "Name Surname",
    role: "CRO, AI SaaS",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            Founders, owners, partners and more who no longer hate cold emails
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <Quote className="h-10 w-10 text-primary mb-4" />
              <p className="text-lg mb-6 text-foreground italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
