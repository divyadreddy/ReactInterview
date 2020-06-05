import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addInterviewee, update } from "../../redux/actions/interviewee.jsx";

function AddInterviewee() {
  let email = useSelector(state => state.interviewee.email);

  const dispatch = useDispatch()

  function handleChange(e) {
    dispatch(update(e.target.id, e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const interviewee = {
      email
    };
    console.log("Interviewee", interviewee);
    dispatch(addInterviewee(interviewee));
  }

  return (
    <div>
      <h1>Add Interviewee</h1>
      <form id="form_Interviewee">
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="email" onChange={(e) => handleChange(e)}/>
        </div>


        <div>
          <Link to={`/interviewees`}> Back </Link>
          <button type="submit" onClick={handleSubmit}> Add </button>
        </div>
      </form>
    </div>
  );
}

export default AddInterviewee;