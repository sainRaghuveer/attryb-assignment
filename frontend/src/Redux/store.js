import {legacy_createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "../Redux/authentication";

const combinedReducer= combineReducers({authReducer})

export const store = legacy_createStore(combinedReducer, applyMiddleware(thunk));
