import { productGrid, section } from "@/utils/styles/layout";
import ProductCard from "../ui/ProductCard";
import { IProduct } from "@/models";
import { getAllProducts } from "@/actions/product.action";

const ProductLists = async () => {
  const products: IProduct[] = await getAllProducts();

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
