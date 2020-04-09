import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./File.css";
class File extends Component {
  render() {
    return (
      <div class="d-flex">
        <div class="form-group mr-3 my-auto">
          <select class="form-control approve">
            <option value="Approved Timesheet">Approved Timesheet</option>
            <option value="Unapproved Timesheet">Unapproved Timesheet</option>
          </select>
        </div>

        <div className="upload m-auto">
          <input type="file"></input>
          <i className="fa fa-cloud-upload mr-2"></i>
          <span>Upload File</span>
        </div>
        
      </div>
    );
  }
}
export default File;
