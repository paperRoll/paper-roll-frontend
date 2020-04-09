import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NonWorkdays.css';

class NonWorkdays extends Component {
    render() {
        return (
            <div className="col-md-4">
                <table>
                    <thead>
                        <tr>
                            <th>Floating Day</th>
                            <th>Holiday</th>
                            <th>Vacation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="floating">
                                    <input type="radio" id="floating" name="nonworkday" value="floating"/>
                                </label>
                            </td>
                            <td>
                                <label htmlFor="vacation">
                                    <input type="radio" id="vacation" name="nonworkday" value="vacation"/>
                                </label>
                            </td>
                            <td>
                                <label htmlFor="holiday">
                                    <input type="radio" id="holiday" name="nonworkday" value="holiday"/>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <td>N/A</td>
                            <td>N/A</td>
                            <td>N/A</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default NonWorkdays;