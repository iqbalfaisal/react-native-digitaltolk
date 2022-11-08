import {combineReducers} from 'redux';
import LoaderReducer from './LoaderReducer';
import {ThunkDispatch} from 'redux-thunk';
import TodosReducer from './TodosReducer';
import {TodosActionTypes, LoaderActionTypes} from '../types';

export const rootReducer = combineReducers({
  todos: TodosReducer,
  LoaderReducer,
});

export default rootReducer;

export type IRootState = ReturnType<typeof rootReducer>;

export type TDispatch = ThunkDispatch<
  IRootState,
  {},
  LoaderActionTypes | TodosActionTypes
>;
