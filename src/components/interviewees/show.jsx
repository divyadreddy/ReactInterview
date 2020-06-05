import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getInterviewee } from "../../redux/actions/interviewee.jsx";
 
import "react-datepicker/dist/react-datepicker.css";

function ShowInterviewee() {
  const { id } = useParams();
  let email = useSelector(state => state.interviewee.email);
  
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getInterviewee(id));
  }, [])

 

  return (
    <div>

      <h1>Interviewee</h1>
      
        <div>
          <label htmlFor="title">Email:</label>
          <p>{email} </p>
        </div>

        <div>
          <Link to={`/`}> Back </Link>
          <Link to={`/interviewees/${id}/edit`}> Edit </Link>
        </div>

    </div>
  );
}

export default ShowInterviewee;