import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/"
import createSagaMiddleware from "@redux-saga/core";
import { watcherSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk : false, serializableCheck: false}).concat(sagaMiddleware),
    reducer: {
        rootReducer
    }
})

sagaMiddleware.run(watcherSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch