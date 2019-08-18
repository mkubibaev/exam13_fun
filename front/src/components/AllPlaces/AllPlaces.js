import React, {Component, Fragment} from 'react';
import {getPlaces} from "../../store/actions/actions";
import {connect} from "react-redux";
import {Card, CardBody, CardText} from "reactstrap";
import PlaceThumnail from "../PlaceThumnail/PlaceThumnail";
import {NavLink} from "react-router-dom";

class AllPlaces extends Component {
    componentDidMount() {
        this.props.getPlaces()
    }
    render() {
        return (
            <Fragment>
                <h2>All places</h2>
                {this.props.places.map(item => (
                    <Card key={item._id}>
                        <CardBody>
                            <PlaceThumnail image={item.image}/>
                            <NavLink to={'/places/' + item._id}>
                                <CardText>{item.name}</CardText>
                            </NavLink>
                        </CardBody>
                    </Card>
                ))}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    places: state.places.places
});

const mapStateToDispatch = dispatch => ({
    getPlaces: (data) => dispatch(getPlaces(data))
});

export default connect(mapStateToProps, mapStateToDispatch) (AllPlaces);
