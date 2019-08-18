import axios from "../../axios-api"
import {FETCH_ALL_PLACES_SUCCESS} from "../actions/actionTypes";
import {push} from 'connected-react-router';
import {FETCH_INFO_PLACE_SUCCESS} from "./actionTypes";


const fetchAllPlacesSuccess = places => ({type:FETCH_ALL_PLACES_SUCCESS, places});

export  const getPlaces = (places) => {
    return dispatch => {
        return axios.get('/places', places).then(
            response => dispatch(fetchAllPlacesSuccess(response.data))
        )
    }
};

const fetchInfoSuccess = (place) => ({type: FETCH_INFO_PLACE_SUCCESS, place});

export const getInfoPlace = (id) => {
    return dispatch => {
        return axios.get(`/places/${id}`).then(
            response => dispatch(fetchInfoSuccess(response.data))
        )
    }
};

export const createPlace = (data) => {
    return dispatch => {
        return axios.post('/places', data).then(
            () => {
                dispatch(push('/'))
            }
        )
    }
};
