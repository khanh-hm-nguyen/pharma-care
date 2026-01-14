import { ProductCategoryPage } from "@/components/product";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const page =async ({ params }: PageProps) => {
  return (
    <>
     <ProductCategoryPage params={params} />
    </>
  );
};

export default page;
