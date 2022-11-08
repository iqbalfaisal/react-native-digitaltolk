export interface ITodo {
  id: number;
  user_id: number;
  title: string;
  description: string;
  status: string;
  due_at: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_TODO = 'SET_TODO';

interface SetTodoAction {
  type: typeof SET_TODO;
  tasks: ITodo[];
}

interface AddTodoAction {
  type: typeof ADD_TODO;
  todo: ITodo;
}

interface UpdateTodoAction {
  type: typeof UPDATE_TODO;
  todo: ITodo;
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  id: number;
}

export type TodosActionTypes =
  | AddTodoAction
  | UpdateTodoAction
  | DeleteTodoAction
  | SetTodoAction;
