import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getInterviewees } from "../../redux/actions/interviewees.jsx";
import { useSelector, useDispatch } from "react-redux";


function Interviewees() {
  let interviewees = useSelector(
    state => state.interviewees.interviewees //? console.log("state", state.interviewees): null
  );

  const dispatch = useDispatch()
  
  useEffect(() => {
      console.log("dispatch", dispatch(getInterviewees()));
  }, [])
  console.log("interviewees", interviewees);
  
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
        {console.log("jsx",interviewees)}
        {
        interviewees?(
          interviewees.map((interviewee) => (
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
          ))) : (<p>Loading</p>)}
        </tbody>
      </table>
      <Link className="btn btn-primary" to={`/interviewees/new`}>
        New Interviewee
      </Link>
    </div>
  );
}
  export default Interviewees;
