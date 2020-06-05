import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getInterviewers } from "../../redux/actions/interviewers.jsx";
import { useSelector, useDispatch } from "react-redux";


function Interviewers() {
  let interviewers = useSelector(
    state => state.interviewers.interviewers //? console.log("state", state.interviewees): null
  );

  const dispatch = useDispatch()
  
  useEffect(() => {
      console.log("dispatch", dispatch(getInterviewers()));
  }, [])
  console.log("interviewers", interviewers);

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
        {console.log("jsx",interviewers)}
        {
        interviewers?(
          interviewers.map((interviewer) => (
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
            ))) : (<p>Loading</p>)}
        </tbody>
      </table>
      <Link className="btn btn-primary" to={`/interviewers/new`}>
        New Interviewer
      </Link>
    </div>
  );
}
  export default Interviewers;
