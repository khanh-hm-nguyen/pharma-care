import { ProductList } from ".";
import { container } from "@/utils/styles/layout";
import { h2 } from "@/utils/styles/typography";

const ProductPage = () => {
  return (
    <div className={container}>
      <h1 className={`${h2} text-center`}>All Products</h1>
      <ProductList />
    </div>
  );
};

export default ProductPage;
