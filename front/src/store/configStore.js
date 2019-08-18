import {createBrowserHistory} from "history";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {connectRouter, routerMiddleware} from "connected-react-router";
import placesReducer from "./reducer/reducer";
import usersReducer from "./reducer/usersReducer";
import thunkMiddleware from "redux-thunk";
import {loadState, saveState} from "./localStorage";
import axios from '../axios-api';


export const history = createBrowserHistory();

const rootReducer = combineReducers({
    router: connectRouter(history),
    places: placesReducer,
    users: usersReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleWare = [
    thunkMiddleware,
    routerMiddleware(history)
];

const enhancers = composeEnhancers(applyMiddleware(...middleWare));

const persistedState = loadState();

const store = createStore(rootReducer,persistedState, enhancers);

store.subscribe(() => {
    saveState({
        users: {
            user: store.getState().users.user
        }
    })
});

axios.interceptors.request.use(config => {
    try {
        config.headers["Authorization"] = store.getState().users.user.token;
    } catch (e) {
        // user is not logged
    }

    return config;
});

export default store;
