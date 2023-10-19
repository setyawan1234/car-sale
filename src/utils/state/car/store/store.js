import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reduce/reducer";

const storeRedux = configureStore({
    reducer: {
        car: reducer.state,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default storeRedux