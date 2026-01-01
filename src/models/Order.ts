import { Schema, model, models, Document, Types } from 'mongoose';

// Sub-document interface for line items
interface IOrderItem {
  product: Types.ObjectId;
  name: string;     
  price: number;     
  quantity: number;
  image: string;    
}

// Sub-document interface for shipping
interface IShippingAddress {
  fullName: string;
  address: string;
  city: string;
  phone: string;
}

export interface IOrder extends Document {
  user: Types.ObjectId;
  items: IOrderItem[];
  shippingAddress: IShippingAddress;
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema = new Schema<IOrder>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required'],
      index: true, 
    },
    items: {
      type: [
        {
          product: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
          },
          name: { type: String, required: true },
          price: { type: Number, required: true, min: 0 },
          quantity: { type: Number, required: true, min: 1 },
          image: { type: String, required: true },
        },
      ],
      validate: {
        validator: function (v: IOrderItem[]) {
          return v && v.length > 0;
        },
        message: 'Order must contain at least one item',
      },
    },
    shippingAddress: {
      fullName: { type: String, required: [true, 'Recipient name is required'] },
      address: { type: String, required: [true, 'Address is required'] },
      city: { type: String, required: [true, 'City is required'] },
      phone: {
        type: String,
        required: [true, 'Phone number is required'],
        validate: {
          validator: function (v: string) {
             return /^\d{10,11}$/.test(v.replace(/\s/g, ''));
          },
          message: 'Please provide a valid phone number',
        }
      },
    },
    totalAmount: {
      type: Number,
      required: true,
      min: [0, 'Total amount cannot be negative'],
    },
    status: {
      type: String,
      enum: {
        values: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
        message: '{VALUE} is not a valid order status',
      },
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

OrderSchema.index({ user: 1, createdAt: -1 });
OrderSchema.index({ status: 1, createdAt: 1 });

const Order = models.Order || model<IOrder>('Order', OrderSchema);
export default Order;