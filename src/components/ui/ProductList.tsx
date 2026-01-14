import { productGrid, section } from "@/utils/styles/layout";
import ProductCard from "./ProductCard";
import { IProduct } from "@/models";

interface ProductListProp {
  products: IProduct[];
}

const ProductLists = async ({ products }: ProductListProp) => {
  return (
    <div>
      {/* Product Grid */}
      <div className={section}>
        <div className={productGrid}>
          {products.map((product) => (
            <ProductCard key={product._id.toString()} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductLists;
