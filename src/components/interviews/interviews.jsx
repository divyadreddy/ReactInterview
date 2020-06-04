import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function Interviews() {
  const [Interviews, setInterviews] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3000/interviews.json')
      .then((res) => {
        setInterviews(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.log("Error fetching Interviews", error);
      });
  }, []);
  return (
    <div>
      <div>
        <h1>Interviews</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th colSpan="2"></th>
          </tr>
        </thead>
        <tbody>
          {Interviews.map((interview) => (
            <tr key={interview.id}>
              <td> {interview.title}</td>
              <td> {interview.start_time}</td>
              <td> {interview.end_time}</td>

              <td>
                <Link to={`/interviews/${interview.id}/show`}>Show</Link>
              </td>
              <td>
                <Link to={`/interviews/${interview.id}/edit`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link className="btn btn-primary" to={`/interviews/new`}>
        New Interview
      </Link>
    </div>
  );
}
  export default Interviews;
