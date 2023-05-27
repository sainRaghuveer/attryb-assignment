import axios from "axios";
import { GET_CAR_DATA_REQUEST, GET_CAR_DATA_SUCCESS } from "./actionTypes";

export const getCarDataRequest=()=>{
    return{
        type:GET_CAR_DATA_REQUEST
    }
};

export const getCarDataSuccess=(payload)=>{
    return{
        type:GET_CAR_DATA_SUCCESS, payload
    }
};

export const getCarDataFailure=()=>{
    return{
        type:GET_CAR_DATA_FAILURE
    }
};

export const getCarData=(dispatch)=>{
    dispatch(getCarDataRequest());
    return axios.get(``).then((res)=>{
        console.log(res);
        dispatch(getCarDataSuccess());
    }).catch((error)=>{
        console.log(error);
        dispatch(getCarDataFailure());
    })
}