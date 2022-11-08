import {Dispatch} from 'redux';
import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TodosActionTypes,
  SET_TODO,
} from '../types';
import * as api from '../../services/Todos';

export const onCreate = (todo: any) => {
  return async function (dispatch: Dispatch<TodosActionTypes>) {
    await api.onCreate(todo, async (response: any) => {
      dispatch({type: ADD_TODO, todo});
    });
  };
};

export const onUpdate = (todo: any) => {
  return async function (dispatch: Dispatch<TodosActionTypes>) {
    await api.onCreate(todo, async (response: any) => {
      dispatch({type: UPDATE_TODO, todo});
    });
  };
};

export const onDelete = (id: number) => {
  return async function (dispatch: Dispatch<TodosActionTypes>) {
    await api.onDelete(id, async (response: any) => {
      dispatch({type: DELETE_TODO, id});
    });
  };
};

export const getTasks = () => {
  return async function (dispatch: Dispatch<TodosActionTypes>) {
    await api.getTasks(async (response: any) => {
      dispatch({type: SET_TODO, tasks: response.tasks});
    });
  };
};
