import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Time extends Component {
    render() {
        const times = ["N/A", "0:30 AM", "1 AM", "1:30 AM", "2 AM", "2:30 AM", "3 AM", "3:30 AM", "4 AM", "4:30 AM", "5 AM", "5:30 AM", "6 AM", 
                      "6:30 AM", "7 AM", "7:30 AM", "8 AM", "8:30 AM", "9 AM", "9:30 AM", "10 AM", "10:30 AM", "11 AM", "11:30 AM", "12 AM",
                      "12:30 PM", "1 PM", "1:30 PM", "2 PM", "2:30 PM", "3 PM", "3:30 PM", "4 PM", "4:30 PM", "5 PM", "5:30 PM", "6 PM", 
                      "6:30 PM", "7 PM", "7:30 PM", "8 PM", "8:30 PM", "9 PM", "9:30 PM", "10 PM", "10:30 PM", "11 PM", "11:30 PM", "12 PM"]
        const start = []

        for (const [index, value] of times.entries()) {
            let item = <option value={value}>{value}</option>

            if (value === "9 AM") {
                item = <option value={value} selected>{value}</option>
            }
            start.push(item)
        }

        const end = []

        for (const [index, value] of times.entries()) {
            let item = <option value={value}>{value}</option>

            if (value === "6 PM") {
                item = <option value={value} selected>{value}</option>
            }
            end.push(item)
        }

        return (
            <div class="col-md-3">
                <table>
                <thead>
                    <tr>
                        <th>Starting Time</th>
                        <th>Ending Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <select>
                                {start}
                            </select>
                        </td>
                        <td>
                            <select>
                                {end}
                            </select>
                        </td>
                    </tr>
                    <tr>
                    <td>
                            <select>
                                {start}
                            </select>
                        </td>
                        <td>
                            <select>
                                {end}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>N/A</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>N/A</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>N/A</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>N/A</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>N/A</td>
                        <td>N/A</td>
                    </tr>
                </tbody>
                </table>
            </div>
        )
    }
}

export default Time;