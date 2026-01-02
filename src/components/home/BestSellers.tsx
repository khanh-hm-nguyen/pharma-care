import { ProductCard } from "../ui";
import { BEST_SELLERS } from "@/data";
import { container, productGrid } from "@/utils/styles/layout";
import { h2 } from "@/utils/styles/typography";

const BestSellers = () => {
  return (
    <div className={container}>
      <h2 className={`${h2} text-center mb-6`}>Best Sellers</h2>

      <div className={productGrid}>
        {BEST_SELLERS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
