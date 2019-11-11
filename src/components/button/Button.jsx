import React from 'react';

import './Button.css';

function Button(props) {

  function handleClick(e) {
    e.preventDefault();
    props.clickEvent();
  }
  return (
    <button
      className={'btn ' + props.buttonType}
      onClick={(e)=>handleClick(e)}
      >{props.buttonText}</button>
  )
}

export default Button;