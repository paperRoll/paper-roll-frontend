import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './File.css';
class File extends Component {
    render() {
        return (
            <div class="col-md-7">
                <div class="row">
                    <div class="col-md-4">
                        <select>
                            <option value="Approved Timesheet">Approved Timesheet</option>
                            <option value="Unapproved Timesheet">Unapproved Timesheet</option>
                        </select>
                    </div>

                    <label class="col-md-8" className="fileUpload">
                        <input type="file"></input>
                        <i class="fa fa-cloud-upload"></i>Upload File
                    </label>
                </div>
            </div>
        )
    }
}
export default File;
