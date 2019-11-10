import React from 'react';

const Table = (props) => {
const { loans } = props;
const allApplications = loans.applications;

const printStatus = (bool) => {
  return (bool === true) ? 'Approved' : 'Denied';
}
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Requested Amount</th>
          <th>Decision</th>
          <th>Reason</th>
        </tr>
      </thead>
      <tbody>
      {Object
      .keys(allApplications)
      .map(application => {
        let loan = allApplications[application]
        return (
        <tr>
          <td>{loan.name}</td>
          <td>{loan.loanAmount}</td>
          <td>{printStatus(loan.loanStatus.status)}</td>
          <td>{loan.loanStatus.info}</td>
        </tr>
        );
      })}
      </tbody>
    </table>
  );
};

export default Table;