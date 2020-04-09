import React, { Component } from "react";

import './Hours.css';
import "bootstrap/dist/css/bootstrap.min.css";

class Hours extends Component {
  render() {
    return (
      <div className="hours d-flex">
          <div className="my-auto mr-3 d-flex">
            <div className="d-flex form-group m-auto p-0">
              <label for="date" className="mr-2 my-auto">Total Billing Hours:</label>
              <input type="text" className="form-control my-auto" readOnly name="billing" id="billing"/>
            </div>
          </div>
          <div className="m-auto d-flex">
            <div className="d-flex form-group m-auto p-0">
              <label for="date" className="mr-2 my-auto">Compensated Hours:</label>
              <input type="text" className="form-control my-auto" readOnly name="compensate" id="compensate"/>
            </div>
          </div>
      </div>
    );
  }
}

export default Hours;
