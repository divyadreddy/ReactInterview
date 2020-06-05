import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { useSelector, useDispatch } from "react-redux";
import { addInterview, update } from "../../redux/actions/interview.jsx";


function AddInterview() {
  let title = useSelector(state => state.interview.title);
  let interviewer_id = useSelector(state => state.interview.interviewer_id );
  let interviewee_id = useSelector(state => state.interview.interviewee_id );
  let start_time = new Date(useSelector(state => state.interview.start_time ));
  let end_time = new Date(useSelector(state => state.interview.end_time ));
  const dispatch = useDispatch()

  function handleChange(e) {
    dispatch(update(e.target.id, e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const interview = {
      title,
      interviewer_id,
      interviewee_id,
      start_time,
      end_time
    };
    console.log("Interview", interview);
    dispatch(addInterview(interview));
  }

  return (
    <div>
      <h1>Add Interview</h1>
      <form id="form_Interview">
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" onChange={(e) => handleChange(e)}/>
        </div>

        <div>
          <label htmlFor="interviewer_id">Interviewer_id:</label>
          <input type="number" id="interviewer_id" onChange={(e) => handleChange(e)} />
        </div>

        <div>
          <label htmlFor="interviewee_id">Interviewee_id:</label>
          <input
            type="number" id="interviewee_id" onChange={(e) => handleChange(e)}/>
        </div>

        <div>
        <label htmlFor="start_time">Start Time</label>
        <DatePicker className="form-control" selected={start_time} id="start_time" onChange={(e) => handleChange(e)} showTimeSelect timeFormat="HH:mm" timeIntervals={15} timeCaption="time"/>
      </div>

      <div>
        <label htmlFor="end_time">End Time</label>
        <DatePicker  id="end_time" selected={end_time} onChange={(e) => handleChange(e)} showTimeSelect timeFormat="HH:mm" timeIntervals={15} timeCaption="time"/>
      </div>

        <div>
          <Link to={`/`}> Back </Link>
          <button type="submit" onClick={handleSubmit}> Add </button>
        </div>
      </form>
    </div>
  );
}

export default AddInterview;