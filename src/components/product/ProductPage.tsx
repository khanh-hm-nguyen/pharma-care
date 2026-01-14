import { ProductList } from "../ui";
import { container } from "@/utils/styles/layout";
import { h2 } from "@/utils/styles/typography";
import { IProduct } from "@/models";
import { getAllProducts } from "@/actions/product.action";

const ProductPage = async () => {
  const products: IProduct[] = await getAllProducts();
  return (
    <div className={container}>
      <h1 className={`${h2} text-center`}>All Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default ProductPage;
