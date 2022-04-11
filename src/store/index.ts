import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import { ICartProps } from "./modules/cart/types";
import rootReducer from "./modules/root.reducer";
import rootSaga from "./root.saga";

export interface ISate {
  cart: ICartProps;
}

const sagaMiddleware = createSagaMiddleware();

const middelware = [sagaMiddleware];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middelware))
);

sagaMiddleware.run(rootSaga);
