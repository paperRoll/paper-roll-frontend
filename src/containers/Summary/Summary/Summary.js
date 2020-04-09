import React, { Component } from "react";
import { Table } from "react-bootstrap";
import InfoTag from "../InfoTag/InfoTag";
import "bootstrap/dist/css/bootstrap.min.css";
import LoadMore from "../LoadMore/LoadMore";

import './Summary.css';
import { Link } from "react-router-dom";

const summaries = [
  {
    weekEnding: "3/24/2018",
    totalHours: 40,
    submissionStatus: "Complete",
    approvalStatus: "Not approved",
    comment: "1 floating day required",
  },
  {
    weekEnding: "3/17/2018",
    totalHours: 40,
    submissionStatus: "Complete",
    approvalStatus: "Not approved",
    comment: "1 floating day required",
  },
  {
    weekEnding: "3/10/2018",
    totalHours: 40,
    submissionStatus: "Complete",
    approvalStatus: "Not approved",
    comment: "1 floating day required",
  },
  {
    weekEnding: "3/03/2018",
    totalHours: 40,
    submissionStatus: "Complete",
    approvalStatus: "Not approved",
    comment: "1 floating day required",
  }
];

const renderSummary = (summary, index) => {
  return (
    <tr key={index}>
      <td>{summary.weekEnding}</td>
      <td>{summary.totalHours}</td>
      <td>
        <div className="d-flex">
          <span className="mr-2 disable-select">{summary.submissionStatus}</span>
          <InfoTag></InfoTag>
        </div>
      </td>
      <td className="disable-select">{summary.approvalStatus}</td>
      <td>
        <Link className="option" to="/">
          {summary.approvalStatus === "Approved" ? "View" : "Edit"}
        </Link>
      </td>
      <td>
        <div className="d-flex">
          <span className="mr-2 disable-select">{summary.comment}</span>
          <InfoTag></InfoTag>
        </div>
      </td>
    </tr>
  );
};

class Summary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      summaries : summaries
    }
  }

  render() {
    return (
      <div className="summary">
        <div className="my-4">
          <h1>Summary</h1>
          <p className="desc m-0">
            The following table shows your timesheet history that has been recorded in the system.
          </p>
          <p className="desc m-0">
            Notice: The total hours represent the number of billing hours*, not compensated hours* entered into the system.
          </p>
        </div>

        <div className="my-4">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Week Ending</th>
                <th>Total Hours</th>
                <th>Submission Status</th>
                <th>Approval Status</th>
                <th>Option</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>{this.state.summaries.map(renderSummary)}</tbody>
          </Table>
        </div>
        
        <div className="my-4">
          <LoadMore />
        </div>
      </div>
    );
  }
}

export default Summary;
