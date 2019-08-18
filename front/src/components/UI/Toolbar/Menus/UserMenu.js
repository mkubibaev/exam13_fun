import React, {Fragment} from 'react';
import {
    Button,
    NavItem,
    NavLink
} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";



const UserMenu = ({user, logout}) => (
    <Fragment>
        <NavItem>

            <NavLink> Hello, {user.username}</NavLink>
        </NavItem>
        <NavItem>
            <Button  color={'danger'} onClick={logout}>Logout</Button>
        </NavItem>
        <NavItem>
            <NavLink tag={RouterNavLink} to="/new" exact>Add new places</NavLink>
        </NavItem>
    </Fragment>

);

export default UserMenu;
