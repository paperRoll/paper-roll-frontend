import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Info from './Info/Info';
import Avatar from './Avatar/Avatar';

class Profile extends Component {
   
    render() {
        return (
           <div class="profile">
               <h1>Profile</h1>
               <div class="row">               
                <Avatar />
                <Info />
               </div>
               
              
           </div>
        )
    }
}

export default Profile;