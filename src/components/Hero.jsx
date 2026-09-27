const Hero = () => {
  return (
    <section className="bg-brand-cream px-[60px] pt-12 pb-16">
      <div className="flex w-full items-center gap-4">
        {/* Left Content */}
        <div className="w-[55%]">
          {/* Heading */}
          <h1 className="text-[56px] font-extrabold leading-[1.05] ">
            Premium Custom Printed Pouches with{" "}
            <span className="text-brand-gold">MOQ from 500 pcs</span>
          </h1>

          {/* Description */}
          <p className="mt-4 text-lg leading-relaxed ">
            Elevate your brand with food-grade Stand-Up, Flat-Bottom, and Custom
            flexible pouches. Tailor-made with high-barrier layers for masalas,
            dry fruits, specialty tea, coffee, snacks, and pet food. Shipped
            straight from our state-of-the-art facility.
          </p>

          {/* Stats */}
          <div className="mt-8 grid w-[90%] grid-cols-3">
            <div>
              <p className="text-2xl font-bold text-brand-green">500 pcs</p>
              <p className="text-xs text-brand-muted">Ultra Low MOQ</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-brand-green">10 Days</p>
              <p className="text-xs text-brand-muted">Fast Turnaround</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-brand-green">100%</p>
              <p className="text-xs text-brand-muted">
                Food Grade FDA Material
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-2">
            <button className="rounded-lg bg-brand-gold px-6 py-3.5 text-sm font-bold text-white">
              Start Pouch Inquiry
            </button>

            <button className="rounded-lg border border-brand-green bg-white px-6 py-3.5 text-sm font-bold text-brand-green">
              Request Sample Kit
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex w-[45%] justify-end">
          <img
            src="/images/hero-right.png"
            alt="Brandbloom packaging pouches"
            className="h-[500px] w-[515px] rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
