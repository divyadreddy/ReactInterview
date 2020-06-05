import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getInterview, editInterview, update, deleteInterview } from "../../redux/actions/interview.jsx";
import DatePicker from "react-datepicker";

function EditInterview() {
  const { id } = useParams();
  let title = useSelector(state => state.interview.title);
  let interviewer_id = useSelector(state => state.interview.interviewer_id );
  let interviewee_id = useSelector(state => state.interview.interviewee_id );
  let start_time = new Date(useSelector(state => state.interview.start_time ));
  let end_time = new Date(useSelector(state => state.interview.end_time ));
  const dispatch = useDispatch()
  console.log(title, interviewer_id, interviewee_id, start_time, end_time)
  useEffect(() => {
    dispatch(getInterview(id));
}, [])

  function handleSubmit(e) {
    e.preventDefault();
    const interview = {
      title,
      interviewer_id,
      interviewee_id,
      start_time,
      end_time
    };
    console.log("Modified values", interview);
    dispatch(editInterview(id, interview));
    console.log(interview);
  }

  function handleDelete(e) {
    e.preventDefault();
    dispatch(deleteInterview(id));
  }

  function handleChange(e) {
    dispatch(update(e.target.id, e.target.value));
  }

  return (
    <div>
      <h1>Edit Interview</h1>
      
       <form>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" onChange={(e) => handleChange(e)} value={title}/>
        </div>

         <div>
          <label htmlFor="interviewer_id">Interviewer_id:</label>
          <input type="number" id="interviewer_id" onChange={(e) => handleChange(e)} value={interviewer_id}/>
        </div>

        <div>
          <label htmlFor="interviewee_id">Interviewee_id:</label>
          <input type="number" id="interviewee_id" onChange={(e) => handleChange(e)} value={interviewee_id}/>
        </div>

        <div>
        <label htmlFor="start_time">Start Time</label>
        <DatePicker  id="start_time" selected={start_time} onChange={(e) => handleChange(e)} showTimeSelect timeFormat="HH:mm" timeIntervals={15} timeCaption="time" />
      </div>

      <div>
        <label htmlFor="end_time">End Time</label>
        <DatePicker  id="end_time" selected={end_time} onChange={(e) => handleChange(e)} showTimeSelect timeFormat="HH:mm" timeIntervals={15} timeCaption="time"/>
      </div>        

        <div>
          <Link to={`/`}> Back </Link>
          <button type="submit" onClick={handleSubmit}> Edit </button>
          <button type="submit" onClick={handleDelete}> Delete </button>
        </div>
      </form> 
      
    </div>
  );
}


export default EditInterview;