import {map, filter} from 'lodash';
import {
  ITodo,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TodosActionTypes,
  SET_TODO,
} from '../types';

interface TodoState {
  todos: ITodo[];
}

const INITIAL_STATE: TodoState = {
  todos: [],
};

export default function TodosReducer(
  state: TodoState = INITIAL_STATE,
  action: TodosActionTypes,
): TodoState {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        todos: action.tasks,
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };

    case UPDATE_TODO:
      return {
        ...state,
        todos: map(state.todos, (todo: ITodo) =>
          todo.id === action.todo.id ? {...action.todo} : todo,
        ),
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: filter(state.todos, function (item) {
          return item.id !== action.id;
        }),
      };

    default:
      return state;
  }
}
