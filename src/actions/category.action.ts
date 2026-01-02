import connectDB from "@/lib/db/mongodb";
import { CategoryService } from "@/services/category.service";

export const getAllCategories = async () => {
  try {
    await connectDB();

    const categories = await CategoryService.getAllCategories();
    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    console.error("Failed to fetch all categories:", error);
    return [];
  }
};
