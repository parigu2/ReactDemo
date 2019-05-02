import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
    Bank,
    Home
} from './component';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/bank" component={Bank}/>
            </Switch>
        )
    }
}