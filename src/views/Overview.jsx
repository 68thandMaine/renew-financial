import React from 'react';
import { connect } from 'react-redux'
import Table from '../components/table/Table';

function Overview(props) {

  return (
    <div>
      <Table 
      loans={props.loans} />
      <NavBar 
        changeView={props.changeView}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loans: state.applications
  }
}

export default connect(mapStateToProps)(Overview);