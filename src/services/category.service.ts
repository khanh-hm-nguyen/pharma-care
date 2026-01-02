import { Category, ICategory } from "@/models";

export class CategoryService {
  static async getAllCategories(): Promise<ICategory[]> {
    return await Category.find({}).sort({ name: 1 }).lean<ICategory[]>();
  }

  static async createCategory(data: Partial<ICategory>): Promise<ICategory> {
    return await Category.create(data);
  }

  static async updateCategory(
    id: string,
    data: Partial<ICategory>
  ): Promise<ICategory | null> {
    return await Category.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    }).lean<ICategory>();
  }

  static async deleteCategory(id: string): Promise<ICategory | null> {
    const deletedCategory = await Category.findByIdAndDelete(id);
    if (!deletedCategory) return null;
    return deletedCategory;
  }
}
