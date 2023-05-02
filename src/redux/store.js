import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productsSlice,
    }
})

export default store;