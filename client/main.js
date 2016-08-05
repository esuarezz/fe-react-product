import React from 'react';

import { render } from 'react-dom';

// Import Components
import Home from './components/Home';
import NotFound from './components/NotFound';
import ProductSingle from './components/ProductSingle';
import ProductGrid from './components/ProductGrid';

//import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
//the binder between react and redux
import {Provider} from 'react-redux';
import store, {history}   from './store';


const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Home}>
            <IndexRoute component={ProductGrid} />
            <Route path="/:productId" component={ProductSingle}/>
        </Route>

        <Route path='*' component={NotFound} />
    </Router>
)

render(router, document.getElementById('root'));
