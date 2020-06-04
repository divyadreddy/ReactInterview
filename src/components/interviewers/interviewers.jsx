import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function Interviewers() {
  const [Interviewers, setInterviewers] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3000/interviewers.json')
      .then((res) => {
        setInterviewers(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.log("Error fetching Interviewers", error);
      });
  }, []);

  


  return (
    <div>
      <div>
        <h1>Interviewers</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th colSpan="2"></th>
          </tr>
        </thead>
        <tbody>
          {Interviewers.map((interviewer) => (
            <tr key={interviewer.id}>
            <td> {interviewer.id}</td>
              <td> {interviewer.email}</td>

              <td>
                <Link to={`/interviewers/${interviewer.id}/show`}>Show</Link>
              </td>
              <td>
                <Link to={`/interviewers/${interviewer.id}/edit`}>Edit</Link>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
      <Link className="btn btn-primary" to={`/interviewers/new`}>
        New Interviewer
      </Link>
    </div>
  );
}
  export default Interviewers;
