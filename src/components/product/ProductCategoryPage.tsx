import { ProductList } from "../ui";
import { container } from "@/utils/styles/layout";
import { h2 } from "@/utils/styles/typography";
import { IProduct } from "@/models";
import { getProductsByCategory } from "@/actions/product.action";

const ProductCategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const products: IProduct[] = await getProductsByCategory(slug);
  return (
    <div className={container}>
      <h2 className={`${h2} text-center`}>category</h2>
      <ProductList products={products} />
    </div>
  );
};

export default ProductCategoryPage;
