import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import favReducer from "../reducers/favReducer";
import compReducer from "../reducers/compReducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";


const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      onError: (error) => {
        console.log(error);
      },
      secretKey: process.env.REACT_APP_KEY,
    }),
  ],
};

const combinedReducer = combineReducers({
  fav: favReducer,
  comp: compReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
