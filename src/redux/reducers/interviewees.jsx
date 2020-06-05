import {
    GET_INTERVIEWEES,
} from "../actions/types";
const initState = {
    interviewees: null,
}

const intervieweesReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_INTERVIEWEES:
            console.log("root", [...action.payload], state)    
            return { ...state, interviewees: [...action.payload]};
        default:
            return state;
    }
}

export default intervieweesReducer;