import React from 'react';
import { render } from 'react-dom';

// Import Components
import App from './components/App';
import NotFound from './components/NotFound';
import ProductDetails from './components/ProductDetails';
import ProductGrid from './components/ProductGrid';

import css from './styles/style.styl';

//import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
//the binder between react and redux
import {Provider} from 'react-redux';
import store, {history}   from './store';


const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={ProductGrid} />
                <Route path="/details/:id" component={ProductDetails}/>
            </Route>

            <Route path='*' component={NotFound} />
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));
