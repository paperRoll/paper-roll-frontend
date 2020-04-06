import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DayHour.css';

class DayHour extends Component {
    render() {
        const hours = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",
                       "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"];
        
        const options = []

        for (const [index, value] of hours.entries()) {
            let option = <option value={value}>{value}</option>
            if (value === "0") {
                option = <option value={value} selected>{value}</option>
            }
            options.push(option);
        }
        return (
            <div class="col-md-2">
                <table>
                    <thead>
                        <tr>
                            <th>Total Hours</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input list="hours" className="hours"/>
                                <datalist id="hours">
                                    {options}
                                </datalist>
                            </td>
                        </tr>
                        <tr>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <td>N/A</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DayHour;