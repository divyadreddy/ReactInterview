import { combineReducers } from 'redux'
import interviewReducer from './interview'
import interviewsReducer from './interviews'
import interviewerReducer from './interviewer'
import interviewersReducer from './interviewers'
import intervieweeReducer from './interviewee'
import intervieweesReducer from './interviewees'

const rootReducer = combineReducers({
    interview: interviewReducer,
    interviews: interviewsReducer,
    interviewer: interviewerReducer,
    interviewers: interviewersReducer,
    interviewee: intervieweeReducer,
    interviewees: intervieweesReducer,
});

export default rootReducer;
