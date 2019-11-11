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

  function decision() {
    if(props.application.loanStatus !== undefined) {
        return props.application.loanStatus.info;
    }
  }

  function navigate(view) {
    props.changeView(view);
  }
  return (
    
      <div className='resultsWrapper'>
        <div className='decisionWrapper'>
          <h2>Thank you for applying {props.application.name}</h2>
          <p className='decisionText'>{decision()}</p>
          <div className='navBar'>
            <Button
              clickEvent={()=>navigate('application')}
              buttonText='Return To Application'
              buttonType='navigation' />
              <Button
              clickEvent={()=>navigate('allApplications')}
              buttonText='View All Applicants' 
              buttonType='navigation'/>
          </div>
        </div> 
      </div>
   
  )
}

export default Results;