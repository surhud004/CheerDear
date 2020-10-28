import React from 'react';
import { Switch, BrowserRouter, Redirect, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LandingPage from '../pages/LandingPage';
import HomePage from '../pages/HomePage';
import Todo from '../components/Todo';
import Movie from '../components/Movie';
import Recipe from '../components/Recipe';
import Game from '../components/Game';
import Draw from '../components/Draw';
import Book from '../components/Book';
import Meditate from '../components/Meditate';
import Exercise from '../components/Exercise';
import Quotes from '../components/Quotes';
import Relax from '../components/Relax';
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
                <Route
                    exact
                    path="/enter/:condition"
                    component={({match})=>{
                        if(match.params.condition !== undefined)
                            return <Todo condition={match.params.condition} />
                        return <Redirect to={{pathname:"/"}} />}}
                />
                <Route
                    exact
                    path="/enter/:condition/activity/:name"
                    component={({match})=>{
                        let activity = match.params.name;
                        if(activity !== undefined) {
                            if(activity === "movie") {
                                return <Movie condition={match.params.condition} activity={activity} />
                            } else if(activity === "recipe") {
                                return <Recipe condition={match.params.condition} />
                            } else if(activity === "game") {
                                return <Game condition={match.params.condition} />
                            } else if(activity === "draw") {
                                return <Draw condition={match.params.condition} />
                            } else if(activity === "book") {
                                return <Book condition={match.params.condition} />
                            } else if(activity === "meditate") {
                                return <Meditate condition={match.params.condition} />
                            } else if(activity === "exercise") {
                                return <Exercise condition={match.params.condition} />
                            } else if(activity === "quotes") {
                                return <Quotes condition={match.params.condition} />
                            } else if(activity === "relax") {
                                return <Relax condition={match.params.condition} />
                            } else {
                                return <Redirect to={{pathname:"/"}} />
                            }
                        }
                        }}
                />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
};

export default routes;