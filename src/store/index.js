import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import articleSlice from "./articleSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        article: articleSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,}),
});