import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from './Row';


class Table extends Component {
    constructor () {
        super()
        
        const weekdays = [
            {
                day: "Sunday",
                date: "2020-01-01",
                start: "N/A",
                end: "N/A",
                totalHours: 0,
                ifFloating: false,
                ifHoliday: false,
                ifVacation: false
            }, 
            {
                day: "Monday",
                date: "2020-01-02",
                start: "9 AM",
                end: "6 AM",
                totalHours: 8,
                ifFloating: false,
                ifHoliday: false,
                ifVacation: false
            },
            {
                day: "Tuesday",
                date: "2020-01-03",
                start: "10 AM",
                end: "6 AM",
                totalHours: 7,
                ifFloating: false,
                ifHoliday: false,
                ifVacation: false
            },
            {
                day: "Wednesday",
                date: "2020-01-04",
                start: "9 AM",
                end: "6 AM",
                totalHours: 8,
                ifFloating: false,
                ifHoliday: false,
                ifVacation: false
            },
            {
                day: "Thursday",
                date: "2020-01-05",
                start: "9 AM",
                end: "6 AM",
                totalHours: 7,
                ifFloating: false,
                ifHoliday: false,
                ifVacation: false
            },
            {
                day: "Friday",
                date: "2020-01-06",
                start: "9 AM",
                end: "6 AM",
                totalHours: 8,
                ifFloating: false,
                ifHoliday: false,
                ifVacation: false
            },
            {
                day: "Saturday",
                date: "2020-01-07",
                start: "N/A",
                end: "N/A",
                totalHours: 8,
                ifFloating: false,
                ifHoliday: false,
                ifVacation: false
            }
        ]

        this.state = {
            weekdays: weekdays
        }
    }
    render() {
        const rows = this.state.weekdays.map((day) => (
            <Row day={day.day} date={day.date} start={day.start} end={day.end} totalHours={day.totalHours}
                ifFloating={day.ifFloating} ifHoliday={day.ifHoliday} ifVacation={day.ifVacation}/>
        ))

        return (
            <table>
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
                <tbody>
                    {rows}
                
                    {/* <tr>
                        <td>
                                <label for="floating">
                                    <input type="radio" id="floating" name="nonworkday" value="floating"/>
                                </label>
                            </td>
                            <td>
                                <label for="vacation">
                                    <input type="radio" id="vacation" name="nonworkday" value="vacation"/>
                                </label>
                            </td>
                            <td>
                                <label for="holiday">
                                    <input type="radio" id="holiday" name="nonworkday" value="holiday"/>
                                </label>
                            </td>
                    </tr> */}
                </tbody>
            </table>
        )
    }
}

export default Table;