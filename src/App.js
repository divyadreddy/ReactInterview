import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Interviews from "./components/interviews/interviews";
import AddInterview from "./components/interviews/add";
import EditInterview from "./components/interviews/edit";
import ShowInterview from "./components/interviews/show";
import Interviewers from "./components/interviewers/interviewers";
import AddInterviewer from "./components/interviewers/add";
import EditInterviewer from "./components/interviewers/edit";
import ShowInterviewer from "./components/interviewers/show";
import Interviewees from "./components/interviewees/interviewees";
import AddInterviewee from "./components/interviewees/add";
import EditInterviewee from "./components/interviewees/edit";
import ShowInterviewee from "./components/interviewees/show";


function App() {
    return ( 
        <div>
        <BrowserRouter>
        <div>
        <Navbar />
        <Switch >
        <Route path = "/" exact component = { Interviews }/> 
        <Route path = "/interviews/new" exact component = { AddInterview }/> 
        <Route path = "/interviews/:id/edit" exact component = { EditInterview }/> 
        <Route path = "/interviews/:id/show" exact component = { ShowInterview }/>
        <Route path = "/interviewers" exact component = { Interviewers }/> 
        <Route path = "/interviewers/new" exact component = { AddInterviewer }/> 
        <Route path = "/interviewers/:id/edit" exact component = { EditInterviewer }/> 
        <Route path = "/interviewers/:id/show" exact component = { ShowInterviewer }/>
        <Route path = "/interviewees" exact component = { Interviewees }/> 
        <Route path = "/interviewees/new" exact component = { AddInterviewee }/> 
        <Route path = "/interviewees/:id/edit" exact component = { EditInterviewee }/> 
        <Route path = "/interviewees/:id/show" exact component = { ShowInterviewee }/>
        </Switch> 
        </div> 
        </BrowserRouter> 
        </div>
    );
}

export default App;