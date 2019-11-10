import React from 'react';
import { connect} from 'react-redux';
import LoanForm from './components/form/LoanForm';
import Overview from './views/Overview';
import Results from './components/results/Results';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      viewOnPage: 'application',
      application: { },
    };
    this.handleSetApplication = this.handleSetApplication.bind(this);
    this.handleChangeView = this.handleChangeView.bind(this);
  }
  
  handleSetApplication(newLoan) {
    this.setState({
      application: newLoan
    });
  }

  handleChangeView(newView) {
    this.setState({ viewOnPage: newView });
  }

render() {
  
      return (
      <div className="App">
        {{
          application: <LoanForm 
            showResults = {this.handleChangeView}
            currentApplication={this.handleSetApplication} />,
          applicationResults: <Results
            changeView={this.handleChangeView}
            application={this.state.application} 
            />,
          allApplications : <Overview
          loans={this.props.loans} />
        }[this.state.viewOnPage]}
      </div>
  )}
}

const mapStateToProps = state => {
  return {
    loans: state.applications
  }
}

export default connect(mapStateToProps)(App);
