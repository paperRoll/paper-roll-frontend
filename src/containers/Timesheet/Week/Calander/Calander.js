import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Calander.css';
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
        <div class="form-group row" className="calander">
            <input type="date" className="form-control" value={this.state.date} id="date"/>
        </div>
    )
  }
}

export default Calander;