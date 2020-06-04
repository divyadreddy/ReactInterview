import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

function AddInterviewer() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const interviewer = {
      email
    };
    console.log(interviewer);
    axios
      .post("http://localhost:3000/interviewers.json", { interviewer })
      .then((res) => {
        alert("Interviewer Added");
      })
      .catch((error) => {
        console.log("Error Adding Interviewer", error);
      });
  }

  return (
    <div>
      <h1>Add Interviewer</h1>
      <form id="form_Interviewer">
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" onChange={(e) => setEmail(e.target.value)}/>
        </div>


        <div>
          <Link to={`/interviewers`}> Back </Link>
          <button type="submit" onClick={handleSubmit}> Add </button>
        </div>
      </form>
    </div>
  );
}

export default AddInterviewer;