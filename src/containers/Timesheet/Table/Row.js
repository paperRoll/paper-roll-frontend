import React from 'react';
import Time from './Time/Time';
import DayHour from './DayHour/DayHour';

const Row = (props) => {
    return (
        <tr>
            <td>{props.day}</td>
            <td>{props.date}</td>
            <td><Time time={props.start} /></td>
            <td><Time time={props.end} /></td>
            <td><DayHour totalHours={props.totalHours}></DayHour></td>
            <td>{props.ifFloating}</td>
            <td>{props.ifHoliday}</td>
            <td>{props.ifVacation}</td>
        </tr>
    )

}

export default Row;