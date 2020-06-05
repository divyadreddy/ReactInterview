import React, {useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getInterviewer, editInterviewer, update, deleteInterviewer } from "../../redux/actions/interviewer.jsx";

function EditInterviewer() {
  const { id } = useParams();
  let email = useSelector(state => state.interviewer.email);

  const dispatch = useDispatch()
  console.log(email)
  useEffect(() => {
    dispatch(getInterviewer(id));
}, [])

  function handleSubmit(e) {
    e.preventDefault();
    const interviewer= {
      email
    };
    console.log("Modified values", interviewer);
    dispatch(editInterviewer(id, interviewer));
    console.log(interviewer);
  }

  function handleDelete(e) {
    e.preventDefault();
    dispatch(deleteInterviewer(id));
  }

  function handleChange(e) {
    dispatch(update(e.target.id, e.target.value));
  }

  return (
    <div>
      <h1>Edit Interviewer</h1>
       <form>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="email" onChange={(e) => handleChange(e)} value={email}/>
        </div>

        <div>
          <Link to={`/interviewers`}> Back </Link>
          <button type="submit" onClick={handleSubmit}> Edit </button>
          <button type="submit" onClick={handleDelete}> Delete </button>
        </div>
      </form> 
    </div>
  );
}


export default EditInterviewer;