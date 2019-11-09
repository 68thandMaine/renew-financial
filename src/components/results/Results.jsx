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
  return (
    
      <div className='resultsWrapper'>
        <p>Hello {props.application.name}</p>
        <p>Your loan was {loanStatus()}</p>
        <p>{reasoning()}</p> 
        <button onClick={props.returnToApplication}>Return to application</button>
      </div>
   
  )
}

export default Results;