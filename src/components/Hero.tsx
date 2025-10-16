import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
          Grow <span className="text-primary">10X</span> with Cold Emails
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
          Flood your calendar with qualified meetings
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" asChild className="text-lg px-8 py-6">
            <a href="https://calendly.com/hot-inbox/intro" target="_blank" rel="noopener noreferrer">
              Book a Free Strategy Call
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Built-for-you systems that reach people and book calls.
        </p>
      </div>
    </section>
  );
};
