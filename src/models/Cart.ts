import { Schema, model, models, Document, Types } from 'mongoose';

interface ICartItem {
  product: Types.ObjectId;
  quantity: number;
}

export interface ICart extends Document {
  user: Types.ObjectId;
  items: ICartItem[];
  updatedAt: Date;
}

const CartSchema = new Schema<ICart>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required'],
      unique: true, 
    },
    items: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: [1, 'Quantity must be at least 1'],
          default: 1,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

//CartSchema.index({ user: 1 });

const Cart = models.Cart || model<ICart>('Cart', CartSchema);
export default Cart;