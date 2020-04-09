import React, { Component } from "react";
import { Table } from "react-bootstrap";

import Time from './Time/Time';
import DayHour from './DayHour/DayHour';

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
    ifFloating: false,
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

const renderDayRecord = (dayRecord, index) => {
  return (
    <tr key={index}>
        <td>{dayRecord.day}</td>
        <td>{dayRecord.date}</td>
        <td><Time time={dayRecord.start} /></td>
        <td><Time time={dayRecord.end} /></td>
        <td><DayHour totalHours={dayRecord.totalHours}></DayHour></td>
        <td>{dayRecord.ifFloating}</td>
        <td>{dayRecord.ifHoliday}</td>
        <td>{dayRecord.ifVacation}</td>
    </tr>
  )
}

class RecordTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      weekdays : weekdays
    }
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
          <tbody>{this.state.weekdays.map(renderDayRecord)}</tbody>
        </Table>
      </div>
      
    );
  }
}

export default RecordTable;
