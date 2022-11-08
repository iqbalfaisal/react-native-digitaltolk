import {IRootState} from '../reducers';

export const loaderSelector = (state: IRootState) =>
  state.LoaderReducer.isLoading;
