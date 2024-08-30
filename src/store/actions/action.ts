import {
  ADD_TODO,
  CLEAR_TODO,
  REMOVE_TODO,
  SEARCH_TERM,
  SET_HEIGHT,
  Todo,
  TodoActionTypes,
  TOUGGHED_TOTDO,
} from "../types/type";

export const addTodo = (newTodo: Todo): TodoActionTypes => ({
  type: ADD_TODO,
  payload: newTodo,
});

export const removeTodo = (id: number): TodoActionTypes => ({
  type: REMOVE_TODO,
  payload: id,
});

export const toggleTodo = (id: number): TodoActionTypes => ({
  type: TOUGGHED_TOTDO,
  payload: id,
});

export const clearTodos = (): TodoActionTypes => ({
  type: CLEAR_TODO,
});

export const searchTerm = (term: string): TodoActionTypes => ({
  type: SEARCH_TERM,
  payload: term,
});

export const setHeight = (height: number): TodoActionTypes => ({
  type: SET_HEIGHT,
  payload: height,
});
