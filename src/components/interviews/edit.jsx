import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

function EditInterview() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [start_time, setStartTime] = useState();
  const [end_time, setEndTime] = useState();
  const [interviewer_id, setInterviewerId ] = useState();
  const [interviewee_id, setIntervieweeId ] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/interviews/${id}.json`)
      .then((res) => {
          console.log(res);
        setTitle(res.data.title);
        setStartTime(new Date(res.data.start_time));
        setEndTime(new Date(res.data.end_time));
        setInterviewerId(res.data.interviewer_id);
        setIntervieweeId(res.data.interviewee_id);
      })
      .catch((error) => {
        console.log("Error fetching Interview", error);
      });
  }, []);

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
      .patch(`http://localhost:3000/interviews/${id}.json`, { interview })
      .then((res) => {
        alert("Interview Updated");
      })
      .catch((error) => {
        console.log("Error Updating Interview", error);
      });
  }

  function handleDelete(e) {
    e.preventDefault();
    axios
      .delete(`http://localhost:3000/interviews/${id}.json`)
      .then((res) => {
        alert("Interview Deleted");
      })
      .catch((error) => {
        console.log("Error Deleting Interview", error);
      });
  }

  return (
    <div>
      <h1>Edit Interview</h1>
       <form>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} value={title}/>
        </div>

         <div>
          <label htmlFor="interviewer_id">Interviewer_id:</label>
          <input type="number" id="interviewer_id" onChange={(e) => setInterviewerId(e.target.value)} value={interviewer_id}/>
        </div>

        <div>
          <label htmlFor="interviewee_id">Interviewee_id:</label>
          <input type="number" id="interviewee_id" onChange={(e) => setIntervieweeId(e.target.value)} value={interviewee_id}/>
        </div>

        <div>
        <label htmlFor="start_time">Start Time</label>
        <DatePicker  id="start_time" selected={start_time} onChange={(e) => setStartTime(e)} showTimeSelect timeFormat="HH:mm" timeIntervals={15} timeCaption="time" />
      </div>

      <div>
        <label htmlFor="end_time">End Time</label>
        <DatePicker  id="end_time" selected={end_time} onChange={(date) => setEndTime(date)} showTimeSelect timeFormat="HH:mm" timeIntervals={15} timeCaption="time"/>
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