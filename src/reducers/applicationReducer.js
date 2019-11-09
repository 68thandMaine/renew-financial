import * as types from '../constants/ActionTypes';
import constants from '../constants';
const { inititalState } = constants;

const loanApplicationReducer = ( state = inititalState, action ) => {
  switch(action.type) {
    case types.UPLOAD_APPLICATION: {
      return Object.assign({}, state, {
        applications: [
          ...state.applications,
          
            action.application
          
        ]
      });
    }
    default:
      return state;
  }
};

export default loanApplicationReducer;