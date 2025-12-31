import { ProductCard } from ".";
import { BEST_SELLERS } from "@/data";

const BestSellers = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
        Best Sellers
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {BEST_SELLERS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
