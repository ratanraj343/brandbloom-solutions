import { useParams } from "react-router-dom";

import PouchProductCard from "../components/PouchProductCard";

import {
  stockPouches,
  laserPrintedPouches,
  staticPrintedPouches,
  rotogravurePrintedPouches,
  digitalPrintedPouches,
} from "../data/productData";

const ProductListing = () => {
  const { category } = useParams();

  const categoryData = {
  "masalas-and-spices": {
    title: "Masalas & Spices",
    description:
      "Premium custom printed pouches designed for spices, masalas, and seasoning products.",
    products: [
      ...stockPouches,
      ...laserPrintedPouches,
      ...staticPrintedPouches,
      ...rotogravurePrintedPouches,
    ],
  },

  "dry-fruits-and-seeds": {
    title: "Dry Fruits & Seeds",
    description:
      "Premium flexible packaging solutions for dry fruits, nuts, seeds, and specialty products.",
    products: [
      ...stockPouches,
      ...laserPrintedPouches,
      ...staticPrintedPouches,
      ...rotogravurePrintedPouches,
    ],
  },

  "specialty-tea-and-coffee": {
    title: "Specialty Tea & Coffee",
    description:
      "High-barrier custom pouches designed to protect aroma, freshness, and product quality.",
    products: [
      ...stockPouches,
      ...laserPrintedPouches,
      ...staticPrintedPouches,
      ...rotogravurePrintedPouches,
    ],
  },

  "snacks-and-namkeen": {
    title: "Snacks & Namkeen",
    description:
      "Custom flexible packaging for namkeen, snacks, chips, and other ready-to-eat products.",
    products: [
      ...stockPouches,
      ...laserPrintedPouches,
      ...staticPrintedPouches,
      ...rotogravurePrintedPouches,
    ],
  },

  "rice-flour-and-grains": {
    title: "Rice, Flour & Grains",
    description:
      "Durable and high-barrier pouches for rice, flour, grains, and other staple products.",
    products: [
      ...stockPouches,
      ...laserPrintedPouches,
      ...staticPrintedPouches,
      ...rotogravurePrintedPouches,
    ],
  },

  "pet-food-and-wellness": {
    title: "Pet Food & Wellness",
    description:
      "Strong, high-barrier flexible packaging solutions for pet food and treats.",
    products: [
      ...stockPouches,
      ...laserPrintedPouches,
      ...staticPrintedPouches,
      ...rotogravurePrintedPouches,
    ],
  },
  "stand-up-pouch": {
  title: "Stand-Up Pouch",
  description:
    "Our best-selling flexible packaging format, designed to stand upright on retail shelves with excellent visibility and convenience.",
  products: [
    ...digitalPrintedPouches,
    ...rotogravurePrintedPouches,
  ],
},

"flat-bottom-pouch": {
  title: "Flat Bottom Pouch",
  description:
    "A stable premium pouch format combining strong shelf presence, excellent volume efficiency, and a structured base.",
  products: [
    ...digitalPrintedPouches,
    ...rotogravurePrintedPouches,
  ],
},

"3-side-seal-center-seal": {
  title: "3-Side Seal / Center Seal",
  description:
    "Flexible packaging formats designed for spices, condiments, snacks, sachets, and lightweight products.",
  products: [
    ...digitalPrintedPouches,
    ...rotogravurePrintedPouches,
  ],
},
};

  const currentCategory = categoryData[category];

  if (!currentCategory) {
    return (
      <section className="px-[60px] py-20 text-center">
        <h1 className="text-[48px] font-extrabold">
          Category Not Found
        </h1>

        <p className="mt-4 text-brand-muted">
          The product category you're looking for doesn't exist.
        </p>
      </section>
    );
  }

  return (
    <main className="bg-brand-cream">
      {/* Page Header */}
      <section className="px-[60px] pb-12 pt-16 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-brand-gold">
          Brandbloom Solutions
        </p>

        <h1 className="mt-3 text-[48px] font-extrabold text-brand-green">
          {currentCategory.title}
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-muted">
          {currentCategory.description}
        </p>
      </section>

      {/* Product Grid */}
      <section className="px-[60px] pb-20">
        <div className="grid grid-cols-3 gap-5">
          {currentCategory.products.map((product) => (
            <PouchProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductListing;