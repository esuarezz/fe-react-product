import { createStore,compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import {browserHistory} from 'react-router'

// import the root reducer
import rootReducer from './reducers/index'

import product from './data/product.json';

//create an object for the default data

const defaultState = {
    product
}

export const store = createStore(rootReducer,defaultState);
export const history = syncHistoryWithStore(browserHistory,store)