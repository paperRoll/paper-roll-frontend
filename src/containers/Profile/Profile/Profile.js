import React, { Component } from "react";

import Info from "../Info/Info";
import Avatar from "../Avatar/Avatar";

import "bootstrap/dist/css/bootstrap.min.css";
import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="my-4">
          <h1>Profile</h1>
          <p className="desc m-0">
            You can edit your personal information by clicking the edit button.
          </p>
          <p className="desc m-0">
            Avarar only supports .jpg .png file.
          </p>
        </div>
        
        <div className="my-4">
          <div className="row m-0">
            <div className="col-md-3">
              <Avatar />
            </div>
            <div className="col-md-9">
              <Info />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
