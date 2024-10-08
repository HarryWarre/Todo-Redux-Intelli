import { compose, createStore } from "redux";
import { todoReducer } from "./reducers/reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(todoReducer, composeEnhancers());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
