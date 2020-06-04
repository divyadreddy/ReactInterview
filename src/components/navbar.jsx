import React from "react";
import { Link } from "react-router-dom";

function header() {
  return (
    <nav >
      <div >
          <Link to="/"> Interview </Link>
          <Link  to="/interviewers"> Interviewers </Link>
          <Link  to="/interviewees"> Interviewees </Link>
      </div>
    </nav>
  );
}

export default header;