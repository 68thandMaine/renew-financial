import VerificationServices from './services/VerificationServices';


describe('VerificationServices()', () => {
  describe('loanAcceptance', () => {
    it('If the requested amount is more than 30% of the annual income, the loan is denied', () => {
      const annualIncome = 31;
      const loanAmount = 20000;
      const result = VerificationServices.loanAcceptance(annualIncome, loanAmount);
      expect(result.status).toBe(false);
      expect(result.info).toBe('The amount requested must be less than 30% of your annual income.')
    });
    it('If the requested amount is less than $5,000 the loan is denied', () => {
      const annualIncome = 40000;
      const loanAmount = 3000;
      const result = VerificationServices.loanAcceptance(annualIncome, loanAmount);
      expect(result.status).toBe(false);
      expect(result.info).toBe(`The amount requested must be between $5,000 and $50,000. You requested ${loanAmount}.`)
    });
    it('If the requested amount is more than $50,000 the loan is denied.', () => {
      const annualIncome = 166667;
      const loanAmount = 50000.1;
      const result = VerificationServices.loanAcceptance(annualIncome, loanAmount);
      expect(result.status).toBe(false);
      expect(result.info).toBe(`The amount requested must be between $5,000 and $50,000. You requested ${loanAmount}.`)
    });
    it.only('If the state is not CA, OR, or FL then the loan is denied', () => {
      const annualIncome = 3200000;
      const loanAmount = 23000;
      const address = '103 Quaker Meeting House Road, Williamsburg, VA 23188';
      const result = VerificationServices.loanAcceptance(annualIncome, loanAmount, address);
      expect(result.status).toBe(false);
      expect(result.info)
    });
    it('If the requested amount is between $5,000 and $50,000 and less than 30% of the annual income, the loan is approved.', () => {
      const annualIncome = 100000;
      const loanAmount = 20000;
      const address = '3200 SW Sun Palm Blvd, Miami, FL 32897';
      const result = VerificationServices.loanAcceptance(annualIncome, loanAmount, address );
      expect(result.status).toBe(true);
      expect(result.info).toBe('Your loan was approved.');
    });
  });

  describe('filterState', () => {
    it('If the state code does not equal CA, OR, or FL then return false', () => {
      const address = '103 Quaker Meeting House Road, Williamsburg, VA 23188';
      const result = VerificationServices.filterState(address);
      expect(result).toBe(false);
    });
    it('If the state code is CA return true', () => {
      const address = '37 NW Baker Street, Fresno, CA 97201';
      const result = VerificationServices.filterState(address);
      expect(result).toBe(true);
    });
    it('If the state code is OR return true', () => {
      const address = '4932 SW Fairvale Ct, Portland, OR 97209';
      const result = VerificationServices.filterState(address);
      expect(result).toBe(true);
    });
    it('If the state code is FL return true', () => {
      const address = '18 Toolbag Drive, Jupiter, FL 44239';
      const result = VerificationServices.filterState(address);
      expect(result).toBe(true);
    });
  });
});