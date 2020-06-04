import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

function AddInterviewee() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const interviewee = {
      email
    };
    console.log(interviewee);
    axios
      .post("http://localhost:3000/interviewees.json", { interviewee })
      .then((res) => {
        alert("Interviewee Added");
      })
      .catch((error) => {
        console.log("Error Adding Interviewee", error);
      });
  }

  return (
    <div>
      <h1>Add Interviewee</h1>
      <form id="form_Interviewee">
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" onChange={(e) => setEmail(e.target.value)}/>
        </div>


        <div>
          <Link to={`/interviewees`}> Back </Link>
          <button type="submit" onClick={handleSubmit}> Add </button>
        </div>
      </form>
    </div>
  );
}

export default AddInterviewee;