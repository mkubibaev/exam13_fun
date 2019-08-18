import React, {Component, Fragment} from 'react';
import {getInfoPlace} from "../../store/actions/actions";
import {connect} from "react-redux";
import {Form} from "reactstrap";
import NewRevies from "../../container/NewRevies/NewRevies";
import NewImages from "../../container/NewImages/NewImages";

class Place extends Component {
    componentDidMount() {
        this.props.getInfoPlace(this.props.match.params.id)
    }

    render() {

        const place = this.props.place;

        return (
            place
                ? <div>
                    <h1>{place.name}</h1>
                    <p>{place.description}</p>


                    <div>
                        <NewRevies/>
                        <NewImages/>
                    </div>
                </div>
                : null
        );
    }
}

const mapStateToProps = state => ({
    place: state.places.place
});

const mapStateToDispatch = dispatch => ({
    getInfoPlace: (id) => dispatch(getInfoPlace(id))
});
export default connect(mapStateToProps, mapStateToDispatch) (Place);
