import React from 'react';
import './App.css';
import {HomePage}  from "./pages";
import  {MovieDetails}  from './pages';
import {MovieList} from "./pages";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends React.Component {
    

    render () {
        return<>
        
            <Router>
                <Switch>
                    <Route path="/movies/:id" component={MovieDetails}/>       
                    <Route path="/movies/" component={MovieList}/>     
                    <Route path="/home" component={HomePage}/>
                </Switch>
            </Router>
        </>;
    }
}