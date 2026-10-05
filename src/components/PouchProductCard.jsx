const PouchProductCard = ({ product, onClick }) => {
  return (
    <article
      onClick={() => onClick(product)}
      className="group cursor-pointer overflow-hidden rounded-xl bg-white transition-shadow duration-300 hover:shadow-lg"
    >
      {/* Product Image */}
      <div className="h-[260px] overflow-hidden bg-brand-cream">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-brand-green">
          {product.name}
        </h3>

        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-brand-muted">Format</span>
            <span className="font-medium text-brand-nav">
              {product.format}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-brand-muted">Size</span>
            <span className="font-medium text-brand-nav">
              {product.size}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-brand-muted">Finish</span>
            <span className="font-medium text-brand-nav">
              {product.finish}
            </span>
          </div>
        </div>

        <p className="mt-4 text-xs font-bold tracking-wide text-brand-green">
          {product.feature}
        </p>
      </div>
    </article>
  );
};

export default PouchProductCard;