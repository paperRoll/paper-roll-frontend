import React, { Component } from "react";


import Calander from "../Calander/Calander";
import Hours from "../Hours/Hours";
import File from "../File/File";
import Buttons from "../Buttons/Buttons";
import RecordTable from "../RecordTable/RecordTable";

import "bootstrap/dist/css/bootstrap.min.css";
import './Timesheet.css';

class Timesheet extends Component {
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
