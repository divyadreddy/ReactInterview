import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function Interviewees() {
  const [Interviewees, setInterviewees] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3000/interviewees.json')
      .then((res) => {
        setInterviewees(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.log("Error fetching Interviewees", error);
      });
  }, []);

  


  return (
    <div>
      <div>
        <h1>Interviewees</h1>
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
          {Interviewees.map((interviewee) => (
            <tr key={interviewee.id}>
            <td> {interviewee.id}</td>
              <td> {interviewee.email}</td>

              <td>
                <Link to={`/interviewees/${interviewee.id}/show`}>Show</Link>
              </td>
              <td>
                <Link to={`/interviewees/${interviewee.id}/edit`}>Edit</Link>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
      <Link className="btn btn-primary" to={`/interviewees/new`}>
        New Interviewee
      </Link>
    </div>
  );
}
  export default Interviewees;
