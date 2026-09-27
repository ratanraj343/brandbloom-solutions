const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Spec Selection",
      description:
        "Configure your desired pouch format, select matte or glossy spot UV, and set your dimension profiles.",
    },
    {
      number: "02",
      title: "Digital Art Review",
      description:
        "Our pre-press design engineers review your branding files to ensure flawless packaging print alignment.",
    },
    {
      number: "03",
      title: "Precision Pressing",
      description:
        "High-integrity multi-layer rotogravure and digital laminators seal, print, and form your custom design.",
    },
    {
      number: "04",
      title: "Rapid Delivery",
      description:
        "Your food-grade pouches undergo strict ISO testing and dispatch directly to your warehousing points.",
    },
  ];

  return (
    <section className="bg-brand-green px-[60px] py-16">
      {/* Heading */}
      <div className="text-center">
        <span className="rounded-full border border-brand-gold bg-brand-cream px-3 py-1 text-[9px] font-medium uppercase tracking-wide text-brand-gold">
          Four-Step Process
        </span>

        <h2 className="mt-3 text-[40px] font-bold text-white">
          From Blueprint Concept to Retail Shelves
        </h2>

        <p className="mt-1 text-base text-white/80">
          Our streamlined manufacturing pipeline is fully transparent and
          engineered for fast brand iterations.
        </p>
      </div>

      {/* Steps */}
      <div className="mx-auto mt-7 grid max-w-[1200px] grid-cols-4 gap-5">
        {steps.map((step, index) => (
          <div key={step.number}>
            <div className="flex items-center">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-gold text-xs font-bold text-white">
                {step.number}
              </div>

              {index < steps.length - 1 && (
                <div className="ml-3 h-[2px] flex-1 bg-white/20" />
              )}
            </div>

            <h3 className="mt-2 text-xl font-bold text-white">
              {step.title}
            </h3>

            <p className="mt-1 max-w-[220px] text-sm leading-[1.4] text-white/70">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;