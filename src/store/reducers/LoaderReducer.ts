import {LoaderActionTypes, SET_LOADING_STATE} from '../types';

interface LoaderState {
  isLoading: boolean;
}

const INITIAL_STATE: LoaderState = {
  isLoading: false,
};

export default function LoaderReducer(
  state: LoaderState = INITIAL_STATE,
  action: LoaderActionTypes,
): LoaderState {
  switch (action.type) {
    case SET_LOADING_STATE:
      return {
        ...state,
        isLoading: action.loading,
      };

    default:
      return state;
  }
}
