import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        totalPrice: 0,
        count: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            state.products.push(action.payload);
            state.count += 1;
            state.totalPrice += action.payload.price;
        },
        removeFromCart: (state, action) => {
            state.count -= 1;
            state.totalPrice -= action.payload.price;
            state.products = state.products.filter((product) => product.id!== action.payload.id);
        },
    },
});



export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

