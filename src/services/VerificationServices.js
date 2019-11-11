export default class VerificationServices {
  static loanAcceptance ( annualIncome, loanAmount, state ) {
  const minIncome = annualIncome * 0.30;
  let loan = {
    status: false,
    info: ''
   }
  if ( loanAmount > minIncome ) {
    loan.info = 'We were unable to approve your loan because the amount requested was more than 30% of your annual income.';
    return loan;
  } else if ( loanAmount < 5000 || loanAmount > 50000) {
    loan.info = `We were unable to approve your loan because the amount requested must be between $5,000 and $50,000, and ${loanAmount} was requested.`;
    return loan;
  } else if  ( this.filterState(state) === false ) {
    loan.info = 'We were unable to approve your loan because only residents of California, Florida, or Oregon qualify for financing';
    return loan;
  }
  loan.status = true;
  loan.info = 'Congratulations! Your loan was approved. A representative will contact you shorlty for further instruction.';
  return loan;
  }

  static filterState (state) {
    const acceptedStates = ['CA', 'OR', 'FL'];
    const stateCode = state.split(', ')[2].split(' ')[0];
    return (acceptedStates.includes(stateCode) ?  true : false);
  }
}
