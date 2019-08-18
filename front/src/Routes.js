import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import MainPage from "./components/MainPage/MainPage";
import Place from "./components/Place/Place";
import Register from "./container/Register/Register";
import Login from "./container/Login/Login";
import NewPlace from "./container/NewPlace/NewPlace";

const ProtectedRoute = ({isAllowed, ...props}) => {
    return isAllowed ? <Route {...props} /> : <Redirect to="/login"/>
};

const Routes = ({user}) => {
    return (
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <ProtectedRoute
                    isAllowed={user && user.role === 'Admin'}
                    path="/"
                    exact
                    component={() => <div>Admins page</div>}
                />
                <Route path="/places/:id" exact component={Place}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/new" exact component={NewPlace}/>
            </Switch>
    );
};

export default Routes;
