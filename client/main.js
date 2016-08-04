import React from 'react';

import { render } from 'react-dom';


// Import Components
import Main from './components/Home';
import NotFound from './components/NotFound';



import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}/>
        <Route path='*' component={NotFound} />

    </Router>
)

render(router, document.getElementById('root'));
