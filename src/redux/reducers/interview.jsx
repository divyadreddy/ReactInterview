import DatePicker from "react-datepicker";
import {
    GET_INTERVIEW,
    EDIT_INTERVIEW,
    ADD_INTERVIEW,
    DELETE_INTERVIEW,
    UPDATE
} from "../actions/types";

const initState = {
    title : "",
    interviewer_id : 0,
    interviewee_id : 0,
    start_time : new Date(),
    end_time : new Date()
}

const interviewReducer = (state = initState, action) => {
    let interview;
    switch(action.type) {
        case GET_INTERVIEW:
        interview = action.payload;
        return {
            ...state,
            title: interview.title,
            interviewer_id : interview.interviewer_id,
            interviewee_id : interview.interviewee_id,
            start_time: interview.start_time,
            end_time: interview.end_time,
        };
        case ADD_INTERVIEW:
        return {
            ...state,
            ...action.payload,
        };
        case EDIT_INTERVIEW:  
        return {
            ...state,
            ...action.payload,
        };
        case UPDATE:
            interview = action.payload
        console.log("root", action)    
        return {
            ...state,
            [interview.id] : interview.value,
        };
        case DELETE_INTERVIEW:  
        return {
            ...state,
            ...action.payload,
        };
        default:
            return state;
    }
}

export default interviewReducer;
