export interface Todo {
  id: number;
  text: string;
  isComplete: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOUGGHED_TOTDO = "TOUGGHED_TOTDO";

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  payload: number;
}

interface ToggleTodoAction {
  type: typeof TOUGGHED_TOTDO;
  payload: number;
}

export type TodoActionTypes =
  | AddTodoAction
  | RemoveTodoAction
  | ToggleTodoAction;
