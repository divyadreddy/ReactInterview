import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

function EditInterviewee() {
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

  function handleSubmit(e) {
    e.preventDefault();
    const interviewee = {
      email
    };
    console.log(interviewee);
    axios
      .patch(`http://localhost:3000/interviewees/${id}.json`, { interviewee })
      .then((res) => {
        alert("Interviewee Updated");
      })
      .catch((error) => {
        console.log("Error Updating Interviewee", error);
      });
  }

  function handleDelete(e) {
    e.preventDefault();
    axios
      .delete(`http://localhost:3000/interviewees/${id}.json`)
      .then((res) => {
        alert("Interviewee Deleted");
      })
      .catch((error) => {
        console.log("Error Deleting Interviewee", error);
      });
  }

  return (
    <div>
      <h1>Edit Interviewee</h1>
       <form>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" onChange={(e) => setEmail(e.target.value)} value={email}/>
        </div>

        <div>
          <Link to={`/interviewees`}> Back </Link>
          <button type="submit" onClick={handleSubmit}> Edit </button>
          <button type="submit" onClick={handleDelete}> Delete </button>
        </div>
      </form> 
    </div>
  );
}


export default EditInterviewee;