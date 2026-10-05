import { Link } from "react-router-dom";

const ProductCard = ({ card, cardBg }) => {
 const category = card.name
  .toLowerCase()
  .trim()
  .replace(/&/g, "and")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/-+/g, "-")
  .replace(/^-|-$/g, "");

  return (
    <Link to={`/products/${category}`} className="block">
      <div className={`${cardBg} rounded-xl overflow-hidden`}>
        <img
          src={card.image}
          alt={card.name}
          className="w-full h-[180px] object-cover"
        />

        <div className="p-4">
          <h3 className="text-lg font-semibold">
            {card.name}
          </h3>

          <p className="mt-2 text-sm">
            {card.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;