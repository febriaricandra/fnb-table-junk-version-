import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        total: 0,
    },
    reducers: {
        addItem: (state, action) => {
            state.cart.push(action.payload);
            state.total += action.payload.price;
        },
        // remove item from cart
        removeItem: (state, action) => {
            const id = action.payload;
            const item = state.cart.find((item) => item.id === id);
            if (item) {
                state.cart = state.cart.filter((item) => item.id !== id);
                state.total -= item.price * item.quantity;
            }
        }
    }
});

export const cartReducer = cartSlice.reducer;
export const { addItem, removeItem } = cartSlice.actions;

