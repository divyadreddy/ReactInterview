import {
    GET_INTERVIEWEES,
} from "./types";


  
export function getInterviewees() {
    return async (dispatch) => {
        try {
            const res = await fetch('http://localhost:3000/interviewees.json');
            const data = await res.json();
            await dispatch({
                type: GET_INTERVIEWEES,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}
