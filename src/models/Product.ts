import { Schema, model, models, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  category: string;
  stock: number;
  isPrescription: boolean;
  rating: number;
  reviews: number;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
      maxlength: [200, 'Product name cannot exceed 200 characters'],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true, // For fast lookup by URL
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
      maxlength: [2000, 'Description cannot exceed 2000 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative'],
    },
    originalPrice: {
      type: Number,
      min: [0, 'Original price cannot be negative'],
    },
    imageUrl: {
      type: String,
      required: [true, 'Product image is required'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      index: true, // Common filter
    },
    stock: {
      type: Number,
      required: [true, 'Stock count is required'],
      min: [0, 'Stock cannot be negative'],
      default: 0,
    },
    isPrescription: {
      type: Boolean,
      default: false,
      index: true, // Important for filtering Rx vs OTC products
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    reviews: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

// --- MIDDLEWARE ---

// Auto-generate slug from name
ProductSchema.pre('save', function (next) {
  if (this.isModified('name') || this.isNew) {
    this.slug = this.name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '') // Remove non-word chars
      .replace(/[\s_-]+/g, '-') // Replace spaces/underscores with -
      .replace(/^-+|-+$/g, ''); // Remove leading/trailing -
  }
});

// --- INDEXES ---

// Compound Index: Optimizes "Show me Skincare products sorted by Price"
ProductSchema.index({ category: 1, price: 1 });

// Text Index: Enables search functionality (e.g. searching "Panadol")
ProductSchema.index({ name: 'text', description: 'text', category: 'text' });

const Product = models.Product || model<IProduct>('Product', ProductSchema);
export default Product;