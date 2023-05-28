import { GET_CAR_DATA_FAILURE, GET_CAR_DATA_REQUEST, GET_CAR_DATA_SUCCESS } from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    data:[]
};

export const reducer =(state=initialState, {type, payload})=>{
    switch(type){
        case GET_CAR_DATA_REQUEST:{

        }
        case GET_CAR_DATA_SUCCESS:{

        }
        case GET_CAR_DATA_FAILURE:{

        }
        default:{
            return state;
        }
    }
}