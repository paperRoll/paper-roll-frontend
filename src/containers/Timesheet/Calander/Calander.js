import React, { Component } from "react";

import './Calander.css';
import "bootstrap/dist/css/bootstrap.min.css";

class Calander extends Component {

  constructor(props) {
    super(props);
    const now = new Date().toISOString().split("T")[0];

    this.state = {
      date: props.calanderDate === undefined ? now : props.date
    }
  }

  dateChange() {
    // TODO
  }

  render() {
    return (
      <div className="calander d-flex form-group my-auto">
        <label for="date" className="mr-2 my-auto">Week Ending:</label>
        <input type="date" className="form-control" value={this.state.date} id="date" name="date"/>
      </div>
    );
  }
}

export default Calander;
