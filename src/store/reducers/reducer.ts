import {
  ADD_TODO,
  CLEAR_TODO,
  REMOVE_TODO,
  SEARCH_TERM,
  SET_HEIGHT,
  TodoActionTypes,
  TodoState,
  TOUGGHED_TOTDO,
} from "../types/type";

const initialState: TodoState = {
  todos: [],
  searchTerm: "",
  height: 0,
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
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case CLEAR_TODO:
      return {
        ...state,
        todos: [],
      };
    case TOUGGHED_TOTDO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isComplete: !todo.isComplete }
            : todo
        ),
      };

    case SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };

    case SET_HEIGHT:
      return {
        ...state,
        height: action.payload,
      };

    default:
      return state;
  }
};
