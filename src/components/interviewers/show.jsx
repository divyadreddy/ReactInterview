import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
 
import "react-datepicker/dist/react-datepicker.css";

function ShowInterviewer() {
  const { id } = useParams();
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/interviewers/${id}.json`)
      .then((res) => {
          console.log(res);
        setEmail(res.data.email);
      })
      .catch((error) => {
        console.log("Error fetching Interviewer", error);
      });
  }, []);

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