export const SET_LOADING_STATE = 'SET_LOADING_STATE';

interface SetLoaderAction {
  type: typeof SET_LOADING_STATE;
  loading: boolean;
}

export type LoaderActionTypes = SetLoaderAction;
