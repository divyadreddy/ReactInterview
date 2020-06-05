import {
    GET_INTERVIEW,
    EDIT_INTERVIEW,
    ADD_INTERVIEW,
    UPDATE,
    DELETE_INTERVIEW
} from "./types";


export const getInterview = (id) => async (dispatch) => {
    try {
        const res = await fetch(`http://localhost:3000/interviews/${id}.json`);
        const data = await res.json();
        
        await dispatch({
            type: GET_INTERVIEW,
            payload: data
        })
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

export const addInterview = (interview) => async (dispatch) => {
    try {
        const res = await fetch(`http://localhost:3000/interviews.json`, 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(interview)
            });
            
        const data = await res.json();
        
        await dispatch({
            type: ADD_INTERVIEW,
            payload: data
        })
        alert("Interview Added")
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

export const editInterview = (id, interview) => async (dispatch) => {
    try {
        const res = await fetch(`http://localhost:3000/interviews/${id}.json`, 
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(interview)
            });

        const data = await res.json();
        
        await dispatch({
            type: EDIT_INTERVIEW,
            payload: data
        })
        alert("updated")
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

export const update = (id, value) => {
    return {
        type: UPDATE,
    payload: {id, value}
    }
}

export const deleteInterview = (id) => async (dispatch) => {
    try {
        const res = await fetch(`http://localhost:3000/interviews/${id}.json`, 
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

        const data = await res.json();
        
        await dispatch({
            type: DELETE_INTERVIEW,
            payload: data
        })
        alert("interview deleted")
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}