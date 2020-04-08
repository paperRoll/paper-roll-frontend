import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Avatar.css'

class Avatar extends Component {
   
    render() {
        return (
           <div class="col-md-3" className="fileUpload">
                <input type="file"></input>
                <i class="fa fa-cloud-upload"></i>Upload Avatar
           </div>
        )
    }
}

export default Avatar;