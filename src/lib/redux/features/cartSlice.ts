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
      // const existingItem = state.items.find(
      //   (item) => item.id === action.payload.id
      // );
      // if (existingItem) {
      //   existingItem.quantity += 1;
      // } else {
      //   state.items.push({ ...action.payload, quantity: 1 });
      // }
      state.quantity += 1;
      state.items.push(action.payload)
      state.total += action.payload.price * action.payload.quantity
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      // state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      // const { id, quantity } = action.payload;
      // const item = state.items.find((item) => item.id === id);
      // if (item) {
      //   item.quantity = quantity > 0 ? quantity : 0;
      //   if (item.quantity === 0) {
      //     state.items = state.items.filter((i) => i.id !== id);
      //   }
      // }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
