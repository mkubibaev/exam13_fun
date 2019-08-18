import {FETCH_ALL_PLACES_SUCCESS, FETCH_INFO_PLACE_SUCCESS} from "../actions/actionTypes";

const initialState = {
    places:[],
    place: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_PLACES_SUCCESS:
            return {...state, places: action.places};
        case FETCH_INFO_PLACE_SUCCESS:
            return {...state, place: action.place};
        default:
            return state
    }
};

export default reducer;
