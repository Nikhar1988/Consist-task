import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import authReducer from './reducer';
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    auth: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;