
import {
    GET_INTERVIEWER ,
    EDIT_INTERVIEWER,
    ADD_INTERVIEWER,
    DELETE_INTERVIEWER,
    UPDATE
} from "../actions/types";

const initState = {
        email : "",
}

const interviewerReducer = (state = initState, action) => {
    let interviewer;
    switch(action.type) {
        case GET_INTERVIEWER:
        interviewer = action.payload;
        console.log("interviewer reducer", action)
        return {
            ...state,
            email: interviewer.email,
        };
        case ADD_INTERVIEWER:
        return {
            ...state,
            ...action.payload,
        };
        case EDIT_INTERVIEWER:  
        return {
            ...state,
            ...action.payload,
        };
        case UPDATE:
            interviewer = action.payload

        console.log("root", action)
        console.log({
            ...state,
            [interviewer.id] : interviewer.value,
        })    
        return {
            ...state,
            [interviewer.id] : interviewer.value,
        };
        case DELETE_INTERVIEWER:  
        return {
            ...state,
            ...action.payload,
        };
        default:
            return state;
    }
}

export default interviewerReducer;