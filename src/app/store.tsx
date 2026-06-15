import { configureStore } from "@reduxjs/toolkit";
import assetReducer from "../features/assets/slice/assetsslice.tsx";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    ui: uiReducer,
    watchlist: watchlistReducer,
    portfolio: portfolioReducer,
    settings: settingsReducer,
    notification: notificationReducer,
    asset: assetReducer,

    [assetApi.reducerPath]: assetApi.reducer,
    [watchlistApi.reducerpath]: watchlistApi.reducer,
    [portfolioApi.reducerPath]: portfolioApi.reducer,
    [analyticsApi.reducerpath]: analyticsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
  .concat(assetApi.middleware)
  .concat(watchlistApi.middleware)
  .concat(portfolioApi.middleware)
  .concat(analyticsApi.middleware)
  .concat(authApi.middleware)
  .concat(websocketMiddleware)
});
