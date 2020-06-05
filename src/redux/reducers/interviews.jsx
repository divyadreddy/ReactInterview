import {
    GET_INTERVIEWS,
} from "../actions/types";
const initState = {
    interviews: null,
}

const interviewsReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_INTERVIEWS:
            console.log("root", [...action.payload], state)    
            return { ...state, interviews: [...action.payload]};
        default:
            return state;
    }
}

export default interviewsReducer;