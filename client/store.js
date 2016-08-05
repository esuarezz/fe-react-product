import { createStore,compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import {browserHistory} from 'react-router'

// import the root reducer
import rootReducer from './reducers/index';

import products from './data/products';
import products2 from './data/products2';


//create an object for the default data

const defaultState = {
    products
};

const store = createStore(rootReducer,defaultState);
export const history = syncHistoryWithStore(browserHistory,store);

export default store;