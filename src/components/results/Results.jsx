import React from 'react';
import Button from '../button/Button';
import './Results.css';

function Results(props) {

  function loanStatus() {
    if (props.application.loanStatus !== undefined) {
    switch(props.application.loanStatus.status) {
      case false: 
      return 'denied';
      case true:
      return props.application.loanStatus.info;
      default: return null;
    }
   }
  }

  function reasoning() {
    if(props.application.loanStatus !== undefined) {
      switch(props.application.loanStatus.status) {
        case false:
        return props.application.loanStatus.info;
        default: return null;
      }
    }
  }

  function navigate(view) {
    props.changeView(view);
  }
  return (
    
      <div className='resultsWrapper'>
        <p>Hello {props.application.name}</p>
        <p>Your loan was {loanStatus()}</p>
        <p>{reasoning()}</p> 
        <Button
          clickEvent={()=>navigate('application')}
          buttonText='ReturnToApplication' /><Button
          clickEvent={()=>navigate('allApplications')}
          buttonText='View All Applicants' />
        <button onClick={()=>navigate('allApplications')}>View all applications</button>
      </div>
   
  )
}

export default Results;