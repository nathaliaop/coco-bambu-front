import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Register from '../pages/Register';
import Login from '../pages/Login';
import Info from '../pages/Info';
import Users from '../pages/Users';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={ Login } />
                <Route exact path='/register' component={ Register } />
                <Route exact path='/info' component={ Info } />
                <Route exact path='/users' component={ Users } />
            </Switch>
        </Router>
    );
}

export default Routes;