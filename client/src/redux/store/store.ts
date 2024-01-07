import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers/rootReducer";
import rootSaga from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    devTools: true,
    reducer: rootReducer,
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
