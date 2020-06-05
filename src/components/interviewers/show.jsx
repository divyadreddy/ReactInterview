import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getInterviewer } from "../../redux/actions/interviewer.jsx";
 
import "react-datepicker/dist/react-datepicker.css";

function ShowInterviewer() {
  const { id } = useParams();
  let email = useSelector(state => state.interviewer.email);
  console.log("email", email)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getInterviewer(id));
  }, [])
  console.log("email", email)
  return (
    <div>
      <h1>Interviewer</h1>
        <div>
          <label htmlFor="title">Email:</label>
          <p>{email} </p>
        </div>
        <div>
          <Link to={`/`}> Back </Link>
          <Link to={`/interviewers/${id}/edit`}> Edit </Link>
        </div>
    </div>
  );
}

export default ShowInterviewer;