import ProductCard from "./ProductCard";

const ProductGrid = ({
  title,
  badge,
  description,
  sectionBg,
  cardBg,
  cards,
}) => {
  return (
    <section className={`${sectionBg} px-[60px] pt-16 pb-16`}>
      <div className="mx-auto max-w-[1200px]">

        {/* Section Heading */}
        <div className="mb-10 text-center">
          <span className="text-xs font-medium text-brand-gold border rounded-full border-brand-gold px-3 py-1 bg-brand-cream">
            {badge}
          </span>

          <h2 className="mt-3 text-4xl font-bold ">
            {title}
          </h2>

          <p className="mt-3 text-sm ">
            {description}
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-3 gap-6">
          {cards.map((card) => (
            <ProductCard
              key={card.id}
              card={card}
              cardBg={cardBg}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductGrid;