import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
 
import "react-datepicker/dist/react-datepicker.css";

function ShowInterviewee() {
  const { id } = useParams();
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/interviewees/${id}.json`)
      .then((res) => {
          console.log(res);
        setEmail(res.data.email);
      })
      .catch((error) => {
        console.log("Error fetching Interviewee", error);
      });
  }, []);

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