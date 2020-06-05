
import {
    GET_INTERVIEWEE ,
    EDIT_INTERVIEWEE,
    ADD_INTERVIEWEE,
    DELETE_INTERVIEWEE,
    UPDATE
} from "../actions/types";

const initState = {
        email : "",
}

const intervieweeReducer = (state = initState, action) => {
    let interviewee;
    switch(action.type) {
        case GET_INTERVIEWEE:
        interviewee = action.payload;
        return {
            ...state,
            email: interviewee.email,
        };
        case ADD_INTERVIEWEE:
        return {
            ...state,
            ...action.payload,
        };
        case EDIT_INTERVIEWEE:  
        return {
            ...state,
            ...action.payload,
        };
        case UPDATE:
            interviewee = action.payload
        console.log("root", action)    
        return {
            ...state,
            [interviewee.id] : interviewee.value,
        };
        case DELETE_INTERVIEWEE:  
        return {
            ...state,
            ...action.payload,
        };
        default:
            return state;
    }
}

export default intervieweeReducer;