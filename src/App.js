import React from 'react';
import LoanForm from './components/form/LoanForm';
import Overview from './views/Overview';
import Results from './components/results/Results';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      viewOnPage: 'applicationResults',
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
            changeView={this.handleChangeView}/>
        }[this.state.viewOnPage]}
      </div>
  )}
}

export default App;
