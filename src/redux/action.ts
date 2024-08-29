import {
  ADD_TODO,
  REMOVE_TODO,
  Todo,
  TodoActionTypes,
  TOUGGHED_TOTDO,
} from "./type";

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
