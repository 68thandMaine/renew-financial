import { combineReducers } from 'redux';
import applicationReducer from './applicationReducer';

const rootReducer = combineReducers({
  applications: applicationReducer
});

export default rootReducer;