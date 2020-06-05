import {
    GET_INTERVIEWEE,
    EDIT_INTERVIEWEE,
    ADD_INTERVIEWEE,
    UPDATE,
    DELETE_INTERVIEWEE
} from "./types";


export const getInterviewee = (id) => async (dispatch) => {
    try {
        const res = await fetch(`http://localhost:3000/interviewees/${id}.json`);
        const data = await res.json();
        
        await dispatch({
            type: GET_INTERVIEWEE,
            payload: data
        })
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

export const addInterviewee = (interviewee) => async (dispatch) => {
    try {
        const res = await fetch(`http://localhost:3000/interviewees.json`, 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(interviewee)
            });
            
        const data = await res.json();
        
        await dispatch({
            type: ADD_INTERVIEWEE,
            payload: data
        })
        alert("Interviewee Added")
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

export const editInterviewee = (id, interviewee) => async (dispatch) => {
    try {
        const res = await fetch(`http://localhost:3000/interviewees/${id}.json`, 
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(interviewee)
            });

        const data = await res.json();
        
        await dispatch({
            type: EDIT_INTERVIEWEE,
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

export const deleteInterviewee = (id) => async (dispatch) => {
    try {
        const res = await fetch(`http://localhost:3000/interviewees/${id}.json`, 
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

        const data = await res.json();
        
        await dispatch({
            type: DELETE_INTERVIEWEE,
            payload: data
        })
        alert("interviewee deleted")
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}
