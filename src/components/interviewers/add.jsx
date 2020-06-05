import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addInterviewer, update } from "../../redux/actions/interviewer.jsx";

function AddInterviewer() {
  let email = useSelector(state => state.interviewer.email);

  const dispatch = useDispatch()

  function handleChange(e) {
    dispatch(update(e.target.id, e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const interviewer = {
      email
    };
    console.log("Interviewer", interviewer);
    dispatch(addInterviewer(interviewer));
  }


  return (
    <div>
      <h1>Add Interviewer</h1>
      <form id="form_Interviewer">
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="email" onChange={(e) => handleChange(e)}/>
        </div>


        <div>
          <Link to={`/interviewers`}> Back </Link>
          <button type="submit" onClick={handleSubmit}> Add </button>
        </div>
      </form>
    </div>
  );
}

export default AddInterviewer;