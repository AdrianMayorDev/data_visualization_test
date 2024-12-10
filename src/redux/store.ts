import { configureStore } from "@reduxjs/toolkit";
import { appTestBackend } from "../api/api";

export const store = configureStore({
	reducer: {
		[appTestBackend.reducerPath]: appTestBackend.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(appTestBackend.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
