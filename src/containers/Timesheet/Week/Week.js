import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calander from './Calander/Calander';

class Week extends Component {
    render() {
        return (
            <div class="col-md-5">
                <div class="row">
                    <div class="col-md-4">
                        <span>Week Ending</span>
                    </div>
                    <div class="col-md-6">
                        <Calander></Calander>
                    </div>
                </div>
            </div>
        )
    }
}

export default Week;