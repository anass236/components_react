import React from 'react';
import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,

} from "react-router-dom";
import AuthService from './services/auth-service'
import Login from "./pages/Login";
import Task from "./pages/Task";
import Home from "./pages/Home";
import NotFound from "./pages/errors/page400";

const authGuard = (Component) => {
    return AuthService.getCurrentUser()
        ? (<Component/>)
    :(<Redirect to="/login"/>)
}

const Routes = (props) => (
    <Router {...props}>
        <Switch>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/Task">
              <Task/>
            </Route>
            <Route path="/dashboard" render={() => authGuard(Home)}/>
            <Route exact path="/">
                <Redirect to="/dashboard"/>
            </Route>
            <Route path="*">
                <NotFound/>
            </Route>
        </Switch>
    </Router>
)

export default Routes;
