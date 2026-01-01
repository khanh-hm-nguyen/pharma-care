import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  quantity: number;
  total: number;
}

const initialState: CartState = {
  items: [],
  quantity: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      // check if item exists
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // if item exists ->  increase quantity
        existingItem.quantity += 1;
      } else {
        // new Item -> push to array
        state.items.push(action.payload);
      }

      // update
      state.quantity += 1;
      state.total += action.payload.price;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (itemIndex >= 0) {
        const item = state.items[itemIndex];
        state.quantity -= item.quantity;
        state.total -= item.price * item.quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {},
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
