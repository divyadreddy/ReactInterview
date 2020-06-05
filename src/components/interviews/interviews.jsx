import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getInterviews } from "../../redux/actions/interviews.jsx";
import { useSelector, useDispatch } from "react-redux";

const Interviews = () => {
  
  let interviews = useSelector(
    state => state.interviews.interviews //? console.log(state.interviews): null
  );
  console.log("interviews lo")
  const dispatch = useDispatch()
  
  useEffect(() => {
      console.log("dispatch", dispatch(getInterviews()));
  }, [])
  console.log("interviews", interviews);
  
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
        {console.log("jsx",interviews)}
        {
        interviews?(
          interviews.map((interview) => (
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
          ))) : (<p>Loading</p>)}
        </tbody>
      </table>
      <Link className="btn btn-primary" to={`/interviews/new`}>
        New Interview
      </Link>
    </div>
  );
}

export default Interviews;