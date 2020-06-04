import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

function EditInterviewer() {
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

  function handleSubmit(e) {
    e.preventDefault();
    const interviewer = {
      email
    };
    console.log(interviewer);
    axios
      .patch(`http://localhost:3000/interviewers/${id}.json`, { interviewer })
      .then((res) => {
        alert("Interviewer Updated");
      })
      .catch((error) => {
        console.log("Error Updating Interviewer", error);
      });
  }

  function handleDelete(e) {
    e.preventDefault();
    axios
      .delete(`http://localhost:3000/interviewers/${id}.json`)
      .then((res) => {
        alert("Interviewer Deleted");
      })
      .catch((error) => {
        console.log("Error Deleting Interviewer", error);
      });
  }

  return (
    <div>
      <h1>Edit Interviewer</h1>
       <form>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" onChange={(e) => setEmail(e.target.value)} value={email}/>
        </div>

        <div>
          <Link to={`/interviewers`}> Back </Link>
          <button type="submit" onClick={handleSubmit}> Edit </button>
          <button type="submit" onClick={handleDelete}> Delete </button>
        </div>
      </form> 
    </div>
  );
}


export default EditInterviewer;