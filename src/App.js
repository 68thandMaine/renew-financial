import React from 'react';
import { connect} from 'react-redux';
import LoanForm from './components/form/LoanForm';
import Results from './components/results/Results';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      application: { }
    };
    this.handleSetApplication = this.handleSetApplication.bind(this);
    this.handleReturnToApplication = this.handleReturnToApplication.bind(this);
  }
  


  handleSetApplication(newLoan) {
    document.querySelector('.loanForm').classList.add('hide');
    document.querySelector('.results').classList.add('show');
    this.setState({
      application: newLoan
    });
  }

  handleReturnToApplication() {
    document.querySelector('.loanForm').classList.remove('hide');
    document.querySelector('.results').classList.remove('show');
  }

render() {
      return (
      <div className="App">
        <div className='loanForm'>
          <LoanForm 
            currentApplication={this.handleSetApplication} />
        </div>
        <div className='results'>
          <Results
            returnToApplication={this.handleReturnToApplication}
            application={this.state.application} 
            loans={this.props.loans}/>
        </div>
      </div>
  )}
}

const mapStateToProps = state => {
  return {
    loans: state.applications
  }
}

export default connect(mapStateToProps)(App);
