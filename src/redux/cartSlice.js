import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === newItem.id
      );
      if (existingItemIndex !== -1) {
        state.cartItems[existingItemIndex].quantity++;
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 });
      }
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      console.log(id);
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const indexOfUpdatingItem = state.cartItems.findIndex(
        (item) => item.id === id
      );

      if (indexOfUpdatingItem !== -1) {
        // If the item is found in the cart
        const updatingArray = [...state.cartItems];

        updatingArray[indexOfUpdatingItem] = {
          // Update the quantity of the specified item
          ...updatingArray[indexOfUpdatingItem],
          quantity: updatingArray[indexOfUpdatingItem].quantity + 1,
        };

        state.cartItems = updatingArray; // Update the state with the new cart items array
      }
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const indexOfUpdatingItem = state.cartItems.findIndex(
        (item) => item.id === id
      );

      if (indexOfUpdatingItem !== -1) {
        // If the item is found in the cart
        const updatingArray = [...state.cartItems];

        updatingArray[indexOfUpdatingItem] = {
          // Update the quantity of the specified item
          ...updatingArray[indexOfUpdatingItem],
          quantity: updatingArray[indexOfUpdatingItem].quantity - 1,
        };

        state.cartItems = updatingArray; // Update the state with the new cart items array
      }

      if (state.cartItems[indexOfUpdatingItem].quantity < 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== state.cartItems[indexOfUpdatingItem].id
        );
      }
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;