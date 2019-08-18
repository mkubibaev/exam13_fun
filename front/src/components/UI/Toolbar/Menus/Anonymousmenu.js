import React, {Fragment} from 'react';
import {NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const AnonymousMenu = () => (
    <Fragment>
        <NavItem>
            <NavLink tag={RouterNavLink} className="text-info" to="/register" exact>Register</NavLink>
        </NavItem>
        <NavItem>
            <NavLink tag={RouterNavLink} className="text-info" to="/login" exact>Login</NavLink>
        </NavItem>
    </Fragment>
);

export default AnonymousMenu;