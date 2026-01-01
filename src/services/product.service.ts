import { Product, IProduct } from "@/models";

export class ProductService {
  // return all products
  static async getAllProducts(): Promise<IProduct[]> {
    const products = await Product.find({})
      .sort({ createdAt: -1 })
      .lean<IProduct[]>();
    return products;
  }

  // create product
  static async createProduct(data: Partial<IProduct>): Promise<IProduct> {
    const product = await Product.create(data);
    return product;
  }

  // return product by id
  static async getProductById(id: string): Promise<IProduct | null> {
    return await Product.findById(id).lean<IProduct>();
  }

  // update product
  static async updateProduct(
    id: string,
    data: Partial<IProduct>
  ): Promise<IProduct | null> {
    const updatedProduct = await Product.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    }).lean<IProduct>();

    return updatedProduct;
  }

  // delete product
  static async deleteProduct(id: string): Promise<IProduct | null> {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) return null;

    return deletedProduct;
  }

  // get product by slug
  static async getProductBySlug(slug: string): Promise<IProduct | null> {
    // Sanitize slug (remove any potential malicious input)
    const sanitizedSlug = slug.trim().toLowerCase();
    const product = await Product.findOne({
      slug: sanitizedSlug,
    }).lean<IProduct>();

    return product;
  }
}
