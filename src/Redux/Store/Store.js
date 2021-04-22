import {applyMiddleware, combineReducers, createStore} from "redux";
import {usersReducer} from "../Reducers/ProfileReducer";
import thunkMiddleware from 'redux-thunk'
import {reducer} from "redux-form";
import {authReducer} from "../Reducers/AuthReducer";


const reducers = combineReducers({
    authReducer,
    usersReducer,
    form: reducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))