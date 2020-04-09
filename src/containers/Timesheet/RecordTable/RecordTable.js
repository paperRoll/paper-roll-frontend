import React, { Component } from "react";
import { Table } from "react-bootstrap";

import Time from './Time/Time';

import './RecordTable.css';
import "bootstrap/dist/css/bootstrap.min.css";

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

class RecordTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      weekdays : weekdays
    }
  }

  renderDayRecord = (dayRecord, index) => {
    return (
      <tr key={index}>
        <td>
          <div className="d-flex cell">
            <span class="my-auto">
              {dayRecord.day}
            </span>
          </div>
        </td>
        <td>
          <div className="d-flex cell">
            <span class="my-auto">
              {dayRecord.date}
            </span>
          </div>
        </td>
        <td><Time time={dayRecord.start} /></td>
        <td><Time time={dayRecord.end} /></td>
        <td>
          <input 
            type="text" 
            className="day-hour form-control" 
            name="hours"
            value={dayRecord.totalHours} 
            onChange={(e) => this.onTotalHoursEnter()}/>
        </td>
        <td>
          <div className="d-flex cell">
            <input 
              type="checkbox"
              className="my-auto"
              checked={dayRecord.ifFloating}
              onChange={(e) => {this.onNoWorkingClick(e, index)} }/>
          </div>
        </td>
        <td>
          <div className="d-flex cell">
            <input 
              type="checkbox"
              className="my-auto"
              checked={dayRecord.ifHoliday}
              onChange={(e) => {this.onNoWorkingClick(e, index)} }/>
          </div>
        </td>
        <td>
          <div className="d-flex cell">
            <input 
              type="checkbox"
              className="my-auto"
              checked={dayRecord.ifVacation}
              onChange={(e) => {this.onNoWorkingClick(e, index)} }/>
          </div>
        </td>
      </tr>
    )
  }

  onTotalHoursEnter() {
    
  }

  onNoWorkingClick(e) {

  }

  render() {
    return (
      <div className="d-flex">
        <Table hover>
          <thead>
            <tr>
              <th>Day</th>
              <th>Date</th>
              <th>Starting Time</th>
              <th>Ending Time</th>
              <th>Total Hours</th>
              <th>Floating Day</th>
              <th>Holiday</th>
              <th>Vacation</th>
            </tr>
          </thead>
          <tbody>{this.state.weekdays.map(this.renderDayRecord)}</tbody>
        </Table>
      </div>
      
    );
  }
}

export default RecordTable;
