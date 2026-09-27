const ProductCard = ({ card, cardBg }) => {
  return (
    <div className={`${cardBg} rounded-xl overflow-hidden`}>
      <img
        src={card.image}
        alt={card.name}
        className="w-full h-[180px] object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold ">
          {card.name}
        </h3>

        <p className="mt-2 text-sm ">
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;