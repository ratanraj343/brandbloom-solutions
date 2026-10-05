import PouchProductCard from "./PouchProductCard";

const PouchProductGrid = ({ products, sectionBg, cardBg }) => {
  return (
    <section className={`${sectionBg} px-[60px] py-16`}>
      <div className="grid grid-cols-3 gap-5">
        {products.map((product) => (
          <PouchProductCard
            key={product.id}
            product={product}
            cardBg={cardBg}
          />
        ))}
      </div>
    </section>
  );
};

export default PouchProductGrid;