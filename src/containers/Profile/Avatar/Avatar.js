import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Avatar.css";

import DefaultAvatar from '../../../assets/img/default-avatar.jpg';

class Avatar extends Component {
  render() {
    return (
      <div>
        <div className="my-5 d-flex">
          <img className="avatar m-auto" src={DefaultAvatar} alt="avatar"></img>
        </div>

        <div className="my-5 d-flex">
          <div className="upload m-auto">
            <input type="file"></input>
            <i className="fa fa-cloud-upload mr-2"></i>
            <span>Upload Avatar</span>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Avatar;
