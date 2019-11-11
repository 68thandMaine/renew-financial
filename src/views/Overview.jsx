import React from 'react';
import { connect } from 'react-redux';
import Button from '../components/button/Button';
import Table from '../components/table/Table';

function Overview(props) {

  return (
    <div>
      <Table 
      loans={props.loans} />
      <Button
      buttonType='navigationButton'
      buttonText='Return to Application'
      clickEvent={()=>props.changeView('application')} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loans: state.applications
  }
}

export default connect(mapStateToProps)(Overview);