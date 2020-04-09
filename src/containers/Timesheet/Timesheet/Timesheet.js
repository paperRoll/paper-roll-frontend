import React, { Component } from "react";


import Calander from "../Calander/Calander";
import Hours from "../Hours/Hours";
import File from "../File/File";
import Buttons from "../Buttons/Buttons";
import RecordTable from "../RecordTable/RecordTable";

import "bootstrap/dist/css/bootstrap.min.css";
import './Timesheet.css';

class Timesheet extends Component {
  constructor() {
    super();
    this.state = {
      weekEnding: "",
      totalBillingHours: 0, 
      totalCompensatedHours: 0,
      dailyRecords : []
    }
  }

  componentWillMount() {
    const summaryRequest = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json',
                 employeeId: 1,
                 curDate: "2018-03-30"
                },
    }
    const url = 'timesheet/fetch-weekly-record';

    fetch(url, summaryRequest)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          weekEnding : data.weekEnding,
          totalBillingHours : data.totalBillingHours,
          totalCompensatedHours : data.totalCompensatedHours,
          dailyRecords : data.dailyRecords
        }) 
      });
  }

  render() {
    return (
      <div className="timesheet">
        <div className="my-4">
          <h1>Timesheet</h1>
          <p className="desc m-0">
            Please enter your timesheet record for the week.
          </p>
        </div>

        <div className="my-4">
          <div className="d-flex justify-content-between px-2">
            <Calander />
            <Hours />
          </div>

          <div className="my-4">
            <RecordTable />
          </div>

          <div className="my-4">
            <div className="d-flex justify-content-between">
              <File />
              <Buttons />
            </div>
          </div>
          
        </div>
        
      </div>
    );
  }
}

export default Timesheet;
