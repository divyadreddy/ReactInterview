import {
    GET_INTERVIEWERS,
} from "../actions/types";
const initState = {
    interviewers: null,
}

const interviewersReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_INTERVIEWERS:
            console.log("root", [...action.payload], state)    
            return { ...state, interviewers: [...action.payload]};
        default:
            return state;
    }
}

export default interviewersReducer;