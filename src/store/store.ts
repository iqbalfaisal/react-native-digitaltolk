import {applyMiddleware, compose, createStore} from 'redux';
import thuck from 'redux-thunk';

import reducers from './reducers';

export const store = createStore(reducers, {}, compose(applyMiddleware(thuck)));
