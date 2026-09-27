import ProductGrid from "../components/ProductGrid";
import Hero from "../components/Hero";
import InquirySection from "../components/InquirySection";
import ProcessSection from "../components/ProcessSection";
import TestimonialsSection from "../components/TestimonialsSection";
import {
  mockProductCategories,
  mockPouchFormats,
  mockCaseStudies,
} from "../data/mockData";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProductGrid
        title="Tailored Barrier Solutions for Every Product Category"
        badge="Industries Served"
        description="Crafted from premium multi-layer structures designed to optimize freshness and extend shelf-life."
        sectionBg="bg-white"
        cardBg="bg-brand-cream"
        cards={mockProductCategories}
      />
      <ProductGrid
        title="Custom Formats Engineered for Performance"
        badge="Anatomy & Formats"
        description="Select from classic retail structures, customized with modern convenience features."
        sectionBg="bg-brand-cream"
        cardBg="bg-white"
        cards={mockPouchFormats}
      />

      <section className="flex items-center px-[80px] py-20">
  {/* Left Content */}
  <div className="w-[60%]">
    <span className="rounded-full border border-brand-gold bg-brand-cream px-3 py-1 text-xs font-medium text-brand-gold">
      Secure Your Custom Run
    </span>

    <h2 className="mt-3 text-[40px] font-extrabold">
      Need custom pouch packaging?
    </h2>

    <p className="mt-3 max-w-[700px]">
      Head to our enquiry page to share your product details and receive a
      tailored quote, material recommendations, and a free digital prepress
      review.
    </p>

    <div className="mt-8 space-y-4">
      {/* Item 1 */}
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green text-sm text-white">
          ✓
        </div>

        <div>
          <h3 className="text-base font-bold">
            Direct WhatsApp Consult
          </h3>

          <p className="mt-0.5 text-sm">
            No complex portals. Chat with a human designer directly.
          </p>
        </div>
      </div>

      {/* Item 2 */}
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green text-sm text-white">
          ✓
        </div>

        <div>
          <h3 className="text-base font-bold">
            Free Digital Prepress Check
          </h3>

          <p className="mt-0.5 text-sm">
            We review your artwork and structural layout parameters at
            zero cost.
          </p>
        </div>
      </div>

      {/* Item 3 */}
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green text-sm text-white">
          ✓
        </div>

        <div>
          <h3 className="text-base font-bold">
            Custom Spec Mockups
          </h3>

          <p className="mt-0.5 text-sm">
            Request precise structural material layers based on your food
            shelf-life goals.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Right Card */}
  <div className="w-[40%] rounded-2xl border border-brand-muted/20 bg-brand-cream p-8">
    <h3 className="text-2xl font-extrabold">
      Start your custom packaging project
    </h3>

    <p className="mt-4 text-sm leading-relaxed">
      Share your product, quantity, and preferred format on our dedicated
      enquiry page and our team will prepare a tailored quote and material
      recommendation.
    </p>

    <button className="mt-6 rounded-lg bg-brand-gold px-6 py-3.5 text-sm font-bold text-white">
      Get My Instant Quote
    </button>

    <p className="mt-4 text-xs">
      ⚡ Secure food-safe packaging inquiry. We respect your data privacy.
    </p>
  </div>
</section>
<ProcessSection />

      <ProductGrid
        title="Custom Packaging Designed to Win the Shelf"
        badge="SUCCESS"
        description="Step away from boring standard bags. Check out these bespoke flexible designs recently developed in our packaging laboratory."
        sectionBg="bg-brand-cream"
        cardBg="bg-white"
        cards={mockCaseStudies}
      />
      <TestimonialsSection/>
      <InquirySection />

      
    </div>
  );
};

export default Home;
