import {ADD_NAME} from "./actionType";

const initialState = {
    name: "",
}

const userReducer = (state=initialState,action) =>{
    switch(action.type){
        case ADD_NAME:
            return {
                ...state,
                name: action.payload,
            }

        default:
            return state;
    }
}

export default userReducer;