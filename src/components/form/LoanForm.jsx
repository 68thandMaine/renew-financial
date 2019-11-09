import React from 'react';
import Button from '../button/Button';
import AutoCompleteInput from '../input/AutoCompleteInput';
import './LoanForm.css';
import VerificationServices from '../../services/VerificationServices';
/* global google */

class LoanForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      loanAmount: '',
      annualIncome: '',
      validationMessage: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
    this.invalidEntry = this.invalidEntry.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  componentWillMount() {
    new google.maps.places.Autocomplete(document.getElementById('address'));
  }

  handleInputChange(e) {
    switch (typeof e) {
      case 'object': {
        e.persist();
        this.setState({
            [e.target.name] : e.target.value
        });
        break;
      }
      case 'string': {
      this.setState({
          address: e
      });
      break;
    }
    default:
      return null;
    }
  }

  validateInputs() {
    const { name, address, loanAmount, annualIncome } = this.state;
    if ( name === '' || name === undefined || name.trim().length <= 1 ) {
      this.invalidEntry('name');
      return false;
    }
    if ( address === '' ||  address === undefined || address.trim().length <= 1 ) {
      this.invalidEntry('address');
      return false;
    }
    if ( loanAmount === '' || loanAmount === undefined || loanAmount.trim().length <= 1 ) {
      this.invalidEntry('loanAmount');
      return false;
    }
    if ( annualIncome === '' || annualIncome === undefined || annualIncome.trim().length <= 1  ) {
      this.invalidEntry('annualIncome');
      return false;
    }
    return true;
  }

  invalidEntry(entry) {
    const prettifiedEntry = entry.split(/(?=[A-Z])/).join(' ').toLowerCase();
    document.getElementById(entry).classList.add('invalidEntry');
    this.setState({ validationMessage : `The ${prettifiedEntry} field must be filled in.`});
    setTimeout(() => {
      document.getElementById(entry).classList.remove('invalidEntry');
      this.setState({ validationMessage : '' });
    }, 3000);
  }

  handleFormSubmission() {
    console.log(this.state)
    if(this.validateInputs()) {
    const loanStatus = VerificationServices.loanAcceptance(this.state.annualIncome, this.state.loanAmount);
    this.props.loanApplication(loanStatus);
    this.setState({
        name: '',
        address: '',
        annualIncome: '',
        loanAmount: ''
    });
  }
}

  render() {
    return (
      <form className='formWrapper'>
                <p>{this.state.validationMessage}</p>
                <div className='inputWrapper'>
                    <label forhtml='name'>Name</label>
                    <input
                        id='name'
                        name='name'
                        className='formInput'
                        onChange={this.handleInputChange} 
                        value={this.state.name}
                        placeholder='John Doe'
                        type='text'
                        required/>
                </div>
                <div className='inputWrapper'>
                    <label forhtml='address'>Mailing Address</label>
                    <AutoCompleteInput
                      value = {this.state.address}
                      handleSetAddressState={this.handleInputChange}/>
                    
                </div>
                <div className='inputWrapper'>
                    <label forhtml='annualIncome'>Annual Income</label>
                    <input
                        id='annualIncome'
                        name='annualIncome'
                        className='formInput'
                        onChange={this.handleInputChange} 
                        value={this.state.annualIncome}
                        type='int'
                        required/>
                </div>
                <div className='inputWrapper'>
                    <label forhtml='loanAmount'>Amount Requested</label>
                    <input
                        id='loanAmount'
                        name='loanAmount'
                        className='formInput'
                        onChange={this.handleInputChange} 
                        value={this.state.loanAmount}
                        type='int'
                        required/>
                </div>
                <Button 
                  buttonType='submit'
                  buttonText='submit'
                  clickEvent={this.handleFormSubmission}/>
            </form>
    )
  }
}
export default LoanForm;