import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

function AddInterview() {
  const [title, setTitle] = useState("");
  const [start_time, setStartTime] = useState();
  const [end_time, setEndTime] = useState();
  const [interviewer_id, setInterviewerId ] = useState();
  const [interviewee_id, setIntervieweeId ] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    const interview = {
      title,
      interviewer_id,
      interviewee_id,
      start_time,
      end_time
    };
    console.log(interview);
    axios
      .post("http://localhost:3000/interviews.json", { interview })
      .then((res) => {
        alert("Interview Added");
      })
      .catch((error) => {
        console.log("Error Adding Interview", error);
      });
  }

  return (
    <div>
      <h1>Add Interview</h1>
      <form id="form_Interview">
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" onChange={(e) => setTitle(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="interviewer_id">Interviewer_id:</label>
          <input type="number" id="interviewer_id" onChange={(e) => setInterviewerId(e.target.value)} />
        </div>

        <div>
          <label htmlFor="interviewee_id">Interviewee_id:</label>
          <input
            type="number" id="interviewee_id" onChange={(e) => setIntervieweeId(e.target.value)}/>
        </div>

        <div>
        <label htmlFor="start_time">Start Time</label>
        <DatePicker className="form-control" selected={start_time} id="start_time" onChange={(e) => setStartTime(e)} showTimeSelect timeFormat="HH:mm" timeIntervals={15} timeCaption="time"/>
      </div>

      <div>
        <label htmlFor="end_time">End Time</label>
        <DatePicker  id="end_time" selected={end_time} onChange={(date) => setEndTime(date)} showTimeSelect timeFormat="HH:mm" timeIntervals={15} timeCaption="time"/>
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