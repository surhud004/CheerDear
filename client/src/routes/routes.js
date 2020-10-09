import React from 'react';
import { createBrowserHistory } from 'history';
import { Switch, Router, Redirect, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';

const history = createBrowserHistory();

const routes = () => {
    return (
        <Router history = {history}>
            <Switch>
                <Route 
                    path="/"
                    component={() => <LandingPage/>}
                />
                <Redirect to="/"/>
            </Switch>
        </Router>
    );
};

export default routes;