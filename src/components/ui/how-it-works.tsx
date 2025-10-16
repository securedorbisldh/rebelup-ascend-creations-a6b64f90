const steps = [
  {
    num: "01",
    title: "Submit Request",
    description: "Upload footage or share your idea through our dashboard"
  },
  {
    num: "02",
    title: "We Create",
    description: "Editor delivers within 24 hours with laser focus"
  },
  {
    num: "03",
    title: "Unlimited Revisions",
    description: "Refine until perfect — no limits, no extra charges"
  },
  {
    num: "04",
    title: "Approve",
    description: "Once satisfied, we move to the next video"
  },
  {
    num: "05",
    title: "Scale",
    description: "Consistent content pipeline with zero hassle"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-32 relative border-t border-border/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          {/* Section Label */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">How It Works</span>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-6xl font-bold mb-24 leading-[1.1] max-w-3xl">
            Simple process.
            <br />
            <span className="text-primary">Powerful results.</span>
          </h2>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="group border border-border/50 hover:border-primary/50 p-8 rounded-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-lg">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
