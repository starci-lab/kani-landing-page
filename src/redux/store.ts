import { configureStore } from "@reduxjs/toolkit"
import { dumpReducer } from "./slices"

export const store = configureStore({
    reducer: {
        dump: dumpReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;