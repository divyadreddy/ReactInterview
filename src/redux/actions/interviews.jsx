import {
    GET_INTERVIEWS,
} from "./types";


  
export function getInterviews() {
    return async (dispatch) => {
        try {
            const res = await fetch('http://localhost:3000/interviews.json');
            const data = await res.json();
            await dispatch({
                type: GET_INTERVIEWS,
                payload: data
            })
            console.log("here ", data)
        } catch (error) {
            console.log(error);
        }
    }
}
