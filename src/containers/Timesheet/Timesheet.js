import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Week from './Week/Week';
import Weekday from './Weekday/Weekday';
import Time from './Time/Time';
import DayHour from './DayHour/DayHour';
import Hour from './TotalHours/Hour';
import NonWorkdays from './NonWorkdays/NonWorkdays';
import File from './File/File';
import Buttons from './Buttons/Buttons';

class Timesheet extends Component {
    render() {
        return (
            <div class="timesheet">
                <h1>Timesheet</h1>
                <div className="row">
                    <Week/>
                    <Hour></Hour>
                </div>
                <div className="row">
                    <Weekday></Weekday>
                    <Time></Time>
                    <DayHour></DayHour>
                    <NonWorkdays></NonWorkdays>
                </div>
                <div className="row">
                    <File></File>
                    <Buttons></Buttons>
                </div>
            </div>
        )
    }
}

export default Timesheet;