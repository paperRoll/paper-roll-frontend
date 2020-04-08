import React, { Component } from 'react';
import * as ReactBootstrap from "react-bootstrap";
import InfoTag from './InfoTag/InfoTag';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadMore from './LoadMore/LoadMore';

class Summary extends Component {
    
    render() {
        const summaries = [
            {weekEnding: "3/24/2018", totalHours: 40, submissionStatus: "Complete", approvalStatus: "Not approved", option: "Edit", comment: "1 floating day required"},
            {weekEnding: "3/17/2018", totalHours: 40, submissionStatus: "Complete", approvalStatus: "Not approved", option: "Edit", comment: "1 floating day required"},
            {weekEnding: "3/10/2018", totalHours: 40, submissionStatus: "Complete", approvalStatus: "Not approved", option: "Edit", comment: "1 floating day required"},
            {weekEnding: "3/03/2018", totalHours: 40, submissionStatus: "Complete", approvalStatus: "Not approved", option: "Edit", comment: "1 floating day required"}


        ];

        const renderSummary = (summary, index) => {

            return (
                <tr key={index}>
                    <td>{summary.weekEnding}</td>
                    <td>{summary.totalHours}</td>
                    <td>{summary.submissionStatus}<InfoTag></InfoTag></td>
                    <td>{summary.approvalStatus}</td>
                    <td><button>{summary.option}</button></td>
                    <td>{summary.comment}<InfoTag></InfoTag></td>
                </tr>
            )
        }

        return (
            <div>
                
                <h1>Summary</h1>
                <ReactBootstrap.Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>WeekEnding</th>
                            <th>Total Hours</th>
                            <th>Submission Status</th>
                            <th>Approval Status</th>
                            <th>Option</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {summaries.map(renderSummary)}
                    </tbody>            
                </ReactBootstrap.Table>
                <LoadMore></LoadMore>
            </div>
            
        )
    }
}

export default Summary;