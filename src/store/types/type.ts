export interface Todo {
  id: number;
  text: string;
  isComplete: boolean;
}

export interface TodoState {
  todos: Todo[];
  searchTerm: string;
  height: number;
}

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOUGGHED_TOTDO = "TOUGGHED_TOTDO";
export const CLEAR_TODO = "CLEAR_TODO";
export const SEARCH_TERM = "SEARCH_TERM";
export const SET_HEIGHT = "SET_HEIGHT";
interface SetHeight {
  type: typeof SET_HEIGHT;
  payload: number;
}

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  payload: number;
}

interface ClearTodoAction {
  type: typeof CLEAR_TODO;
}

interface ToggleTodoAction {
  type: typeof TOUGGHED_TOTDO;
  payload: number;
}

interface SearchTerm {
  type: typeof SEARCH_TERM;
  payload: string;
}

export type TodoActionTypes =
  | AddTodoAction
  | RemoveTodoAction
  | ToggleTodoAction
  | ClearTodoAction
  | SearchTerm
  | SetHeight;
