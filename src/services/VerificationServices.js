const VerificationServices = {
  loanAcceptance: ( annualIncome, loanAmount ) => {
  const minIncome = annualIncome * 0.30;
  let loan = {
    status: false,
    info: ''
   }
  if (loanAmount > minIncome) {
    loan.info = 'The amount requested must be less than 30% of your annual income.';
    return loan;
  } else if ( loanAmount < 5000 || loanAmount > 50000) {
    loan.info = `The amount requested must be between $5,000 and $50,000. You requested ${loanAmount}.`;
    return loan;
  } else 
  loan.status = true;
  loan.info = 'Your loan was approved.';
  return loan;
  },

  filterState: (state) => {
    const acceptedStates = ['CA', 'OR', 'FL'];
    const stateCode = state.split(', ')[2].split(' ')[0];
    return (acceptedStates.includes(stateCode) ?  true : false);
  },
};



export default VerificationServices;