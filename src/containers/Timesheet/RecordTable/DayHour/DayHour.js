import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DayHour.css";

class DayHour extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hours: props.hours,
    };
  }
  render() {
    return (
      <div>
        <input type="text" className="hours" value={this.state.hours}/>
      </div>
    );
  }
}

export default DayHour;
