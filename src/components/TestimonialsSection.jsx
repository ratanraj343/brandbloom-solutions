import { useState } from "react";
import { mockTestimonials } from "../data/mockTestimonials";

const TestimonialsSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrevious = () => {
    setStartIndex((current) => Math.max(current - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((current) =>
      Math.min(current + 1, mockTestimonials.length - 2)
    );
  };

  const visibleTestimonials = mockTestimonials.slice(
    startIndex,
    startIndex + 2
  );

  return (
    <section className="bg-white px-[60px] py-12">
      {/* Heading */}
      <div className="text-center">
        <span className="rounded-full border border-brand-gold bg-brand-cream px-3 py-1 text-[9px] font-medium uppercase tracking-wide text-brand-gold">
          Testimonials
        </span>

        <h2 className="mt-3 text-[28px] font-extrabold">
          What Our Food & FMCG Partners Say
        </h2>

        <p className="mt-1 text-xs">
          Delivering reliable protective barriers and stunning custom artwork
          parameters straight to Indian founders.
        </p>
      </div>

      {/* Testimonials */}
      <div className="relative mx-auto mt-7 max-w-[1200px]">
        {/* Left Arrow */}
        <button
          onClick={handlePrevious}
          disabled={startIndex === 0}
          className="absolute -left-12 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-brand-green text-brand-green disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Previous testimonial"
        >
          ←
        </button>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-xl border border-brand-muted/10 bg-brand-cream p-6"
            >
              <div className="text-5xl text-brand-gold">❞</div>

              <p className="mt-3 text-sm leading-relaxed">
                "{testimonial.quote}"
              </p>

              <h3 className="mt-4 text-sm font-bold">
                {testimonial.name}
              </h3>

              <p className="mt-1 text-xs">
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={startIndex >= mockTestimonials.length - 2}
          className="absolute -right-12 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-brand-green text-brand-green disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;