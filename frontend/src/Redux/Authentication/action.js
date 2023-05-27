import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_SIGNUP_FAILURE, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from "./actionTypes"
import axios from "axios";

export const signupRequestAction = () => {
    return (
        { type: USER_SIGNUP_REQUEST }
    )
}
export const signupSuccessAction = (payload) => {
    return (
        { type: USER_SIGNUP_SUCCESS, payload }
    )
}
export const signupFailureAction = () => {
    return (
        { type: USER_SIGNUP_FAILURE }
    )
}


export const loginRequestAction = () => {
    return (
        { type: USER_LOGIN_REQUEST }
    )
}
export const loginSuccessAction = (payload) => {
    return (
        { type: USER_LOGIN_SUCCESS, payload }
    )
}
export const loginFailureAction = () => {
    return (
        { type: USER_LOGIN_FAILURE }
    )
}


export const signUp=()=>{

}

export const login=()=>{
    
}


