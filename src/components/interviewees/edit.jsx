import React, {useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getInterviewee, editInterviewee, update, deleteInterviewee } from "../../redux/actions/interviewee.jsx";
 

function EditInterviewee() {
  const { id } = useParams();
  let email = useSelector(state => state.interviewee.email);

  const dispatch = useDispatch()
  console.log(email)
  useEffect(() => {
    dispatch(getInterviewee(id));
}, [])

  function handleSubmit(e) {
    e.preventDefault();
    const interviewee= {
      email
    };
    console.log("Modified values", interviewee);
    dispatch(editInterviewee(id, interviewee));
    console.log(interviewee);
  }

  function handleDelete(e) {
    e.preventDefault();
    dispatch(deleteInterviewee(id));
  }

  function handleChange(e) {
    dispatch(update(e.target.id, e.target.value));
  }

  return (
    <div>
      <h1>Edit Interviewee</h1>
       <form>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="email" onChange={(e) => handleChange(e)} value={email}/>
        </div>

        <div>
          <Link to={`/interviewees`}> Back </Link>
          <button type="submit" onClick={handleSubmit}> Edit </button>
          <button type="submit" onClick={handleDelete}> Delete </button>
        </div>
      </form> 
    </div>
  );
}


export default EditInterviewee;