import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
 
import "react-datepicker/dist/react-datepicker.css";

function ShowInterview() {
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
        setStartTime(res.data.start_time);
        setEndTime(res.data.end_time);
        setInterviewerId(res.data.interviewer_id);
        setIntervieweeId(res.data.interviewee_id);
      })
      .catch((error) => {
        console.log("Error fetching Interview", error);
      });
  }, []);

  return (
    <div>
      <h1>Interview</h1>
        <div>
          <label htmlFor="title">Title:</label>
          <p>{title} </p>
        </div>

        <div>
          <label htmlFor="interviewer_id">Interviewer_id:</label>
          <p>{interviewer_id} </p>
        </div>

        <div>
          <label htmlFor="interviewee_id">Interviewee_id:</label>
          <p>{interviewee_id} </p>
        </div>

        <div>
        <label htmlFor="start_time">Start Time</label>
        <p>{start_time} </p>
      </div>

      <div>
        <label htmlFor="end_time">End Time</label>
        <p>{end_time} </p>
      </div>

        <div>
          <Link to={`/`}> Back </Link>
          <Link to={`/interviews/${id}/edit`}> Edit </Link>
        </div>
    </div>
  );
}

export default ShowInterview;