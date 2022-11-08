import {IRootState} from '../reducers';

export const todosSelector = (state: IRootState) => state.todos.todos;
