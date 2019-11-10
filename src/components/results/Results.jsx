import React from 'react';
import './Results.css'

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
        <button onClick={()=>navigate('application')}>Return to application</button>
        <button onClick={()=>navigate('allApplications')}>View all applications</button>
      </div>
   
  )
}

export default Results;