import {
  ADD_TODO,
  CLEAR_TODO,
  REMOVE_TODO,
  SEARCH_TERM,
  TodoActionTypes,
  TodoState,
  TOUGGHED_TOTDO,
} from "./type";

const initialState: TodoState = {
  todos: [],
  searchTerm: "",
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

    default:
      return state;
  }
};
