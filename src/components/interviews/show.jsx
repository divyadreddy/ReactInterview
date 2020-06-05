import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getInterview } from "../../redux/actions/interview.jsx";
import "react-datepicker/dist/react-datepicker.css";

function ShowInterview() {
  const { id } = useParams();
  let title = useSelector(state => state.interview.title);
  let interviewer_id = useSelector(state => state.interview.interviewer_id );
  let interviewee_id = useSelector(state => state.interview.interviewee_id );
  let start_time = useSelector(state => state.interview.start_time );
  let end_time = useSelector(state => state.interview.end_time );
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getInterview(id));
  }, [])

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