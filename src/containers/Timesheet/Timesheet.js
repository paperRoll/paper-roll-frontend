import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Week from './Week/Week';
import Hour from './TotalHours/Hour';
import File from './File/File';
import Buttons from './Buttons/Buttons';
import Table from './Table/Table';

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
                    <Table></Table>
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