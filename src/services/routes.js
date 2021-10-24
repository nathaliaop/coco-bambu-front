import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Register from '../pages/Register';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/register' component={ Register } />
            </Switch>
        </Router>
    );
}

export default Routes;