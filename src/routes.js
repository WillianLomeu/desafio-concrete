import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Result from './Pages/Result';
import { isAuthenticated } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/notfound', state: {from: props.location}}} />
        )
    )}/>
)

const Routes = () => (
    <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/notfound" component={NotFound} />
                    <PrivateRoute path="/result" component={Result} />
                </Switch>
            </BrowserRouter>
)

export default Routes;