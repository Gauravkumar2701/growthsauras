import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is cold emailing?",
    answer: "Cold emailing is the practice of sending unsolicited emails to potential clients. It aims to initiate a conversation or relationship with prospects who may not be familiar with your brand. When done correctly, it can lead to valuable business opportunities.",
  },
  {
    question: "How does it work?",
    answer: "Our process begins with a consultation to define your campaign goals. We then utilize targeted strategies to send personalized emails from warm domains. This ensures high deliverability and engagement rates.",
  },
  {
    question: "What are buying signals?",
    answer: "Buying signals are indicators that a prospect is ready to make a purchase. These can include online behavior, engagement with your content, or specific inquiries. We leverage these signals to identify and target the right leads.",
  },
  {
    question: "Is it safe?",
    answer: "Yes, our methods prioritize safety and compliance with email marketing regulations. We use secondary domains, fully managed by our team, to ensure maximum safety and scale. This keeps your main domain and sender reputation protected, while giving us flexibility to optimize infrastructure as needed.",
  },
  {
    question: "Can I review the copy before it goes out?",
    answer: "Yes. You'll have full visibility into messaging before launch. We collaborate on voice, tone, and positioning to ensure every email reflects your brand and offer the right way.",
  },
  {
    question: "What exactly do you do?",
    answer: "We build and manage done-for-you (DFY) cold email systems that generate leads and book meetings. From domain and inbox setup to copywriting, list building, targeting, deliverability, and optimization.",
  },
  {
    question: "What makes GrowthSauras different from other agencies?",
    answer: "Most agencies run cold outreach on poor infrastructure with generic messaging. We engineer full-stack systems built for scale, safety, and reply rate, using a battle-tested approach that combines deliverability expertise, dynamic personalization, and deep campaign strategy.",
  },
  {
    question: "Who do you target in the campaigns?",
    answer: "We work closely with you to define your ideal customer profile (ICP) which includes industries, job titles, company sizes, geographies, and pain points. Then, we build highly targeted prospect lists using enriched data from trusted sources. Every contact is verified through multi-step checks (email validity, role match, company quality) to reduce bounce rates and improve reply likelihood.",
  },
  {
    question: "What kind of results can I expect?",
    answer: "Results vary based on offer and audience, but most clients start seeing qualified replies and booked meetings within the first 2–3 weeks. Many campaigns achieve 3–7% reply rates which is far above industry averages.",
  },
  {
    question: "How soon can we get started?",
    answer: "Right after the call. Once we align on your goals and audience, we kick off onboarding immediately with domain setup, strategy, and copy start within days.",
  },
];

export const FAQ = () => {
  return (
    <section id="faqs" className="py-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">FAQs</h2>
          <p className="text-lg text-muted-foreground">
            Find answers to your most pressing questions about our cold email outreach services.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Still have questions?</h3>
          <p className="text-muted-foreground">We're here to help!</p>
        </div>
      </div>
    </section>
  );
};