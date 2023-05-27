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


export const signUpUser = (obj, handleNavigate, handleToast) => (dispatch) => {
    dispatch(signupRequestAction());
    return axios.post(`http://localhost:8800/api/user/signup`, obj).then((res) => {
        console.log(res);
        if (res.data.status == true) {
            dispatch(signupSuccessAction());
            handleToast("User signup successfully!", "success");
            handleNavigate();
        } else {
            handleToast(`${res.data.msg}`, "error");
        }

    }).catch((error) => {
        dispatch(signupFailureAction());
        handleToast("Something went wrong", "error");
    })

}

export const login = (obj, handleNavigate, handleToast) => (dispatch) => {
    dispatch(loginRequestAction());
    return axios.post(`http://localhost:8800/api/user/login`, obj).then((res) => {
        console.log(res);
        if (res.data.status == true) {
            dispatch(loginSuccessAction(res.data.token));
            handleToast("User Login successfully!", "success");
            handleNavigate();
        } else {
            handleToast(`${res.data.msg}`, "error");
        }

    }).catch((error) => {
        dispatch(loginFailureAction());
        handleToast("Something went wrong, username or password is incorrect", "error");
    })
}


