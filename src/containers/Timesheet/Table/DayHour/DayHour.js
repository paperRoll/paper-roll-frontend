import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DayHour.css';

class DayHour extends Component {
    constructor(props) {
        super(props);
        const items = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",
                       "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"];
        
        const hours = items.map((item) => {
            let option = <option value={item}>{item}</option>
            if (item === props.totalHours) {
                option = <option value={item} selected>{item}</option>
            }
            return (option)
        })

        this.state = {
            hours: hours
        }
    }
    render() {
        return (
            <div>
                <input list="hours" className="hours" />
                <datalist id="hours">
                    {this.state.hours}
                </datalist>
            </div>
        )
    }
}

export default DayHour;