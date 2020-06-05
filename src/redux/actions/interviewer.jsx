import {
    GET_INTERVIEWER,
    EDIT_INTERVIEWER,
    ADD_INTERVIEWER,
    UPDATE,
    DELETE_INTERVIEWER
} from "./types";


export const getInterviewer = (id) => async (dispatch) => {
    try {
        const res = await fetch(`http://localhost:3000/interviewers/${id}.json`);
        const data = await res.json();
        
        await dispatch({
            type: GET_INTERVIEWER,
            payload: data
        })
        console.log("interviewer", data)
    } catch (error) {
        console.log(error);
    }
}

export const addInterviewer = (interviewer) => async (dispatch) => {
    try {
        const res = await fetch(`http://localhost:3000/interviewers.json`, 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(interviewer)
            });
            
        const data = await res.json();
        
        await dispatch({
            type: ADD_INTERVIEWER,
            payload: data
        })
        alert("Interviewer Added")
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

export const editInterviewer = (id, interviewer) => async (dispatch) => {
    try {
        const res = await fetch(`http://localhost:3000/interviewers/${id}.json`, 
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(interviewer)
            });

        const data = await res.json();
        
        await dispatch({
            type: EDIT_INTERVIEWER,
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

export const deleteInterviewer = (id) => async (dispatch) => {
    try {
        const res = await fetch(`http://localhost:3000/interviewers/${id}.json`, 
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

        const data = await res.json();
        
        await dispatch({
            type: DELETE_INTERVIEWER,
            payload: data
        })
        alert("interviewer deleted")
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}
