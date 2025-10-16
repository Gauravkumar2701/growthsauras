export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">About Us</h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            We're the team behind cold email systems that actually work. GrowthSauras was built for founders, 
            owners, and growth teams who've tried everything from DIY tools to freelancers to "agencies" 
            and still couldn't book consistent, qualified meetings.
          </p>
          <p>
            We fix that. We handle everything: domain setup, warming, deliverability, copy, targeting, 
            and testing. No fluff, no guesswork, just a system engineered to reach the right inboxes 
            with the right message, and turn cold prospects into booked calls.
          </p>
          <p className="font-semibold text-foreground">
            You bring the product. We'll build the engine to sell it.
          </p>
        </div>
      </div>
    </section>
  );
};