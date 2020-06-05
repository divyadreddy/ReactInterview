import {
    GET_INTERVIEWERS,
} from "./types";


  
export function getInterviewers() {
    return async (dispatch) => {
        try {
            const res = await fetch('http://localhost:3000/interviewers.json');
            const data = await res.json();
            await dispatch({
                type: GET_INTERVIEWERS,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}
