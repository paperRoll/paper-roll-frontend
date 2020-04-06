import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Weekday extends Component { 
    constructor() {
        super();
        this.state = {
            date: new Date()
        }
    }
    render() {
        return (
            <div class="col-md-3">
            <table>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sunday</td>
                        <td>2020-01-01</td>
                    </tr>
                    <tr>
                        <td>Monday</td>
                        <td>2020-01-01</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>2020-01-01</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>2020-01-01</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>2020-01-01</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>2020-01-01</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>2020-01-01</td>
                    </tr>
                </tbody>
            </table>
            </div>
        )
    }
}

export default Weekday;