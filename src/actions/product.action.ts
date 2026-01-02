import connectDB from "@/lib/db/mongodb";
import { ProductService } from "@/services/product.service";

export const getAllProducts = async () => {
  try {
    await connectDB();
    const products = await ProductService.getAllProducts();

    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.error("Failed to fetch all products:", error);
    return [];
  }
};
