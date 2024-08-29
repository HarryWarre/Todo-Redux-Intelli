import { ADD_TODO, TodoActionTypes, TodoState } from "./type";

const initialState: TodoState = {
  todos: [],
};

export const todoReducer = (
  state = initialState,
  action: TodoActionTypes
): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    default:
      return state;
  }
};
