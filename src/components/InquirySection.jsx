const InquirySection = () => {
  return (
    <section
      className="min-h-[478px] bg-cover bg-center bg-no-repeat px-[60px] py-20"
      style={{
        backgroundImage: "url('/images/inquiry-banner.png')",
      }}
    >
      <div className="mb-10 text-center">
        <span className="rounded-full border border-brand-gold bg-brand-cream px-3 py-1 text-xs font-medium text-brand-gold">
          Secure Your Custom Run
        </span>

        <h2 className="mt-3 text-center text-[48px] font-extrabold text-white">
          Launch Your Next Product Line with
          <br />
          Elite Premium Pouches
        </h2>

        <p className="mt-3 text-sm text-[#C6D3D0]">
          Get custom packaging printed to specifications. Send your
          requirements for zero-risk pre-press review.
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-center gap-2">
        <button className="rounded-lg bg-brand-gold px-6 py-3.5 text-sm font-bold text-white">
          Get My Instant Quote
        </button>

        <button className="rounded-lg bg-brand-lightgreen px-6 py-3.5 text-sm font-bold text-white">
          Consult via WhatsApp
        </button>
      </div>
    </section>
  );
};

export default InquirySection;