import { types } from '../components';

const loanApplicationReducer = ( state = {}, action ) => {
  switch(action.type) {
    case types.UPLOAD_APPLICATION: {
      return Object.assign({}, state, action.data);
    }
    default:
      return state;
  }
};

export default loanApplicationReducer;