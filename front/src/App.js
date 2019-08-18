import React, {Component} from 'react';
import './App.css';
import Toolbar from "./components/UI/Toolbar/Toolbar";
import {withRouter} from "react-router";
import {Container} from "reactstrap";
import {connect} from "react-redux";
import {logoutUser} from "./store/actions/userAction";
import Routes from "./Routes";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <Toolbar user={this.props.user}
                             logout={this.props.logoutUser}/>
                </header>
                <Container>
                    <Routes user={this.props.user}/>
                </Container>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

