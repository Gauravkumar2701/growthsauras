import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/10">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Turn Cold Email Into Revenue ASAP
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Want more qualified B2B meetings? Let's build the system that delivers them.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="text-lg px-8 py-6">
            <a href="https://calendly.com/hot-inbox/intro" target="_blank" rel="noopener noreferrer">
              Book a Call Now!
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
