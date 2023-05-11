import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../views/auth/authSlice"
import settingsSlice from "../views/admin/Setting/settingsSlice"
import responsiveSlice from "./responsiveSlice"
import productSlice from "../views/admin/Products/productSlice"
import themeMiddleware from '../middleware/themeMiddleware';

const store = configureStore({
    reducer: {
        settings: settingsSlice.reducer,
        products: productSlice.reducer,
        responsive: responsiveSlice.reducer,
        auth: authSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(themeMiddleware),
})

export default store