import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Info.css';

class Info extends Component {
    state = {
        email: "juliepark@paper.com",
        phoneNumber: "(917)328-7765",
        address: "19 Theoru Ct, East Windsor, NJ, 08120",
        emergencyContactName1: "John Doe",
        emergencyContactPhone1: "(917)328-7765",
        emergencyContactName2: "John Doe",
        emergencyContactPhone2: "(917)328-7765",
        isInEditMode: false
    }

    changeEditMode = () => {
        this.setState({
            isInEditMode: !this.state.isInEditMode
        })
    }

    renderDefaultView = () => {
        return (
            <div class="col-md-9">
                <div className="profile-content">
                     <h1>Contact</h1>
                     <h2>Full Name</h2>
                     <p>Julie Park</p>
                
                    <h2>Email</h2>
                    <p>{this.state.email}</p> 
                    <h2>Phone Number</h2>
                    <p>{this.state.phoneNumber}</p>
                    <h2>Home Address</h2>
                    <p>{this.state.address}</p>

                    <h1>Emergency Contact 1</h1>
                    <h2>Full Name</h2>
                    <p>{this.state.emergencyContactName1}</p>
                    <h2>Phone Number</h2>
                    <p>{this.state.emergencyContactPhone1}</p>

                    <h1>Emergency Contact 2</h1>
                    <h2>Full Name</h2>
                    <p>{this.state.emergencyContactName2}</p>
                    <h2>Phone Number</h2>
                    <p>{this.state.emergencyContactPhone2}</p>

                    <h2><button class="profile-btn" onClick={this.changeEditMode}>Edit</button></h2>
                 </div>
            </div>
        )
    }

    renderEditView =() => {
        return (
            <div class="col-md-9">
                <div class="profile-content">
                     <h1>Contact</h1>
                     <h2>Full Name</h2>
                     <p>Julie Park</p>
             
                    <h2>Email</h2>
                    <input class="space" type="text" placeholder={this.state.email} />
                    <h2>Phone Number</h2>
                    <input class="space" type="text" placeholder={this.state.phoneNumber} />
                    <h2>Home Address</h2>
                    <input class="space" type="text" placeholder={this.state.address} />

                    <h1>Emergency Contact 1</h1>
                    <h2>Full Name</h2>
                    <input class="space" type="text" placeholder={this.state.emergencyContactName1} />
                    <h2>Phone Number</h2>
                    <input class="space" type="text" placeholder={this.state.emergencyContactPhone1} />

                    <h1>Emergency Contact 2</h1>
                    <h2>Full Name</h2>
                    <input class="space" type="text" placeholder={this.state.emergencyContactName2} />
                    <h2>Phone Number</h2>
                    <input class="space" type="text" placeholder={this.state.emergencyContactPhone2} />

                    <h2><button class="profile-btn" onClick={this.changeEditMode}>Save</button></h2>
    
                </div>
            </div>
        )
    }

    render() {
        return (
            this.state.isInEditMode ? this.renderEditView() : this.renderDefaultView()
        )
    }
}

export default Info;