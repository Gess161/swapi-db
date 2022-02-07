import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import rootReducer from "./reducers/"
import { watcherSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(sagaMiddleware),
    reducer: {
        persistedReducer
    }
})
export const persistor = persistStore(store)

sagaMiddleware.run(watcherSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch