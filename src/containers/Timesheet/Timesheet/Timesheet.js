import React, { Component } from "react";


import Calander from "../Calander/Calander";
import Hours from "../Hours/Hours";
import File from "../File/File";
import Buttons from "../Buttons/Buttons";
import RecordTable from "../RecordTable/RecordTable";

import "bootstrap/dist/css/bootstrap.min.css";
import './Timesheet.css';

const weekdays = [
  {
    day: "Sunday",
    date: "2020-01-01",
    start: "N/A",
    end: "N/A",
    totalHours: 0,
    ifFloating: false,
    ifHoliday: false,
    ifVacation: false,
  },
  {
    day: "Monday",
    date: "2020-01-02",
    start: "9 AM",
    end: "6 AM",
    totalHours: 8,
    ifFloating: false,
    ifHoliday: false,
    ifVacation: false,
  },
  {
    day: "Tuesday",
    date: "2020-01-03",
    start: "10 AM",
    end: "6 AM",
    totalHours: 7,
    ifFloating: false,
    ifHoliday: false,
    ifVacation: false,
  },
  {
    day: "Wednesday",
    date: "2020-01-04",
    start: "9 AM",
    end: "6 AM",
    totalHours: 8,
    ifFloating: false,
    ifHoliday: false,
    ifVacation: false,
  },
  {
    day: "Thursday",
    date: "2020-01-05",
    start: "9 AM",
    end: "6 AM",
    totalHours: 7,
    ifFloating: false,
    ifHoliday: false,
    ifVacation: false,
  },
  {
    day: "Friday",
    date: "2020-01-06",
    start: "9 AM",
    end: "6 AM",
    totalHours: 8,
    ifFloating: true,
    ifHoliday: false,
    ifVacation: false,
  },
  {
    day: "Saturday",
    date: "2020-01-07",
    start: "N/A",
    end: "N/A",
    totalHours: 8,
    ifFloating: false,
    ifHoliday: false,
    ifVacation: false,
  },
];

class Timesheet extends Component {
  constructor(props) {
    super(props);

    let search = this.props.location.search;
    let params = new URLSearchParams(search);
    let curDate = params.get('curDate');
    const now = new Date().toISOString().split("T")[0];

    this.state = {
      curDate : curDate === null ? now : curDate,
      weekEnding: "",
      totalBillingHours: 0, 
      totalCompensatedHours: 0,
      dailyRecords : weekdays
    }
  }

  componentWillMount() {
    const summaryRequest = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json',
                 employeeId: 1,
                 curDate: this.state.curDate
                },
    }
    const url = 'timesheet/fetch-weekly-record';
    console.log(this.state.curDate)

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
            <Calander calanderDate={this.state.weekEnding}/>
            <Hours />
          </div>

          <div className="my-4">
            <RecordTable weekdays={this.state.dailyRecords}/>
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
