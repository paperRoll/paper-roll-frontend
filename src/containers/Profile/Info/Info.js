import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Info.css";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : "Julie Park",
      email: "juliepark@paper.com",
      phoneNumber: "(917)328-7765",
      address: "19 Theoru Ct, East Windsor, NJ, 08120",
      emergencyContactName1: "John Doe",
      emergencyContactPhone1: "(917)328-7765",
      emergencyContactName2: "John Doe",
      emergencyContactPhone2: "(917)328-7765",
      isInEditMode: false,
    };
  }

  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode,
    });
  };

  updateComponentValue = () => {
    this.setState({
      isInEditMode: false,
      name: this.refs.name.value,
      email: this.refs.email.value,
      phoneNumber: this.refs.phoneNumber.value,
      address: this.refs.address.value,
      emergencyContactName1: this.refs.emergencyContactName1.value,
      emergencyContactPhone1: this.refs.emergencyContactPhone1.value,
      emergencyContactName2: this.refs.emergencyContactName2.value,
      emergencyContactPhone2: this.refs.emergencyContactPhone2.value,
    });
  };

  renderDefaultView = () => {
    return (
      <div className="row m-0">
        <div className="col-md-6">
          <p className="title">Contact</p>
          <p className="subtitle">Full Name</p>
          <p className="info">{this.state.name}</p>

          <p className="subtitle">Email</p>
          <p className="info">{this.state.email}</p>
          <p className="subtitle">Phone Number</p>
          <p className="info">{this.state.phoneNumber}</p>
          <p className="subtitle">Home Address</p>
          <p className="info">{this.state.address}</p>
        </div>
        
        <div className="col-md-6">
          <p className="title">Emergency Contact 1</p>
          <p className="subtitle">Full Name</p>
          <p className="info">{this.state.emergencyContactName1}</p>
          <p className="subtitle">Phone Number</p>
          <p className="info">{this.state.emergencyContactPhone1}</p>

          <p className="title">Emergency Contact 2</p>
          <p className="subtitle">Full Name</p>
          <p className="info">{this.state.emergencyContactName2}</p>
          <p className="subtitle">Phone Number</p>
          <p className="info">{this.state.emergencyContactPhone2}</p>
        </div>

        <div className="col-12 mt-4">
          <button className="profile-btn" onClick={this.changeEditMode}>
            Edit Profile
          </button>
        </div>
      </div>
    );
  };

  renderEditView = () => {
    return (
      <div className="row m-0">
        <div className="col-md-6">
          <p className="title">Contact</p>
          <p className="subtitle">Full Name</p>
          <input type="text" defaultValue={this.state.name} ref="name" />

          <p className="subtitle">Email</p>
          <input type="text" defaultValue={this.state.email} ref="email" />
          <p className="subtitle">Phone Number</p>
          <input
            type="text"
            defaultValue={this.state.phoneNumber}
            ref="phoneNumber"
          />
          <p className="subtitle">Home Address</p>
          <input type="text" defaultValue={this.state.address} ref="address" />
        </div>
        
        <div className="col-md-6">
          <p className="title">Emergency Contact 1</p>
          <p className="subtitle">Full Name</p>
          <input
            type="text"
            defaultValue={this.state.emergencyContactName1}
            ref="emergencyContactName1"
          />
          <p className="subtitle">Phone Number</p>
          <input
            type="text"
            defaultValue={this.state.emergencyContactPhone1}
            ref="emergencyContactPhone1"
          />

          <p className="title">Emergency Contact 2</p>
          <p className="subtitle">Full Name</p>
          <input
            type="text"
            defaultValue={this.state.emergencyContactName2}
            ref="emergencyContactName2"
          />
          <p className="subtitle">Phone Number</p>
          <input
            type="text"
            defaultValue={this.state.emergencyContactPhone2}
            ref="emergencyContactPhone2"
          />
        </div>
        
        <div className="col-12 mt-4">
          <button className="profile-btn" onClick={this.updateComponentValue}>
            Submit Change
          </button>
        </div>
      </div>
    );
  };

  render() {
    return this.state.isInEditMode
      ? this.renderEditView()
      : this.renderDefaultView();
  }
}

export default Info;
