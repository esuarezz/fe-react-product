import React from 'react';

import { render } from 'react-dom';


// Import Components
import Home from './components/Home';
import NotFound from './components/NotFound';
import Product from './components/Product';
import ProductLayout from './components/ProductLayout';



import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Home}>
            <IndexRoute component={ProductLayout} />
            <Route path="/:productId" component={Product}/>
        </Route>

        <Route path='*' component={NotFound} />

    </Router>
)

render(router, document.getElementById('root'));
