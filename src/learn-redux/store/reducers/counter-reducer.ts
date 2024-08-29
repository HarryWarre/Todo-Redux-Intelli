import { createStore } from "redux";
import {
  CounterActionTypes,
  DECREMENT,
  INCREMENT,
} from "../actions/counter-actions";

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const counterReducer = (
  state = initialState,
  action: CounterActionTypes
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;

// store
export const coutnerStore = createStore(counterReducer);
export type RootState = CounterState;
export type AppDispatch = typeof coutnerStore.dispatch;
