import constants from '../constants';
const { action } = constants;

export function addLoanApplication(app) {
  return {
    type: action.UPLOAD_APPLICATION,
    application: app
  };
}
