import React from 'react';


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
    
      <div>
        <p>Hello {props.application.name}</p>
        <p>Your loan was {loanStatus()}.</p>
        {reasoning()} 
        <button onClick={props.returnToApplication}>Return to application</button>
      </div>
   
  )
}

export default Results;