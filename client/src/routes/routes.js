import React from 'react';
import { Switch, BrowserRouter, Redirect, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LandingPage from '../pages/LandingPage';
import HomePage from '../pages/HomePage';
import history from '../utils/history';

const routes = () => {
    return (
        <BrowserRouter history = {history}>
            <Navbar history = {history}/>
            <Switch>
                <Route 
                    exact
                    path="/"
                    component={LandingPage}
                />
                <Route 
                    exact
                    path="/enter"
                    component={HomePage}
                />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
};

export default routes;