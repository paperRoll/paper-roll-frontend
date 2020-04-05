import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import 'font-awesome/css/font-awesome.min.css';

class Navigation extends Component {
    render() {
        return (
            <nav>
                <NavLink
                    to="/summary">
                    <i class="fa fa-list-alt"></i>
                    {/* <span>Summary</span> */}
                </NavLink>
                
                <NavLink
                    to="/timesheet">
                    <i class="fa fa-calendar"></i>
                    {/* <span>Timesheet</span> */}
                </NavLink>
                
                <NavLink
                    to="/profile">
                    <i class="fa fa-id-card-o"></i>
                    {/* <span>Profile</span> */}
                </NavLink>
            </nav>
        )
    }
}

export default Navigation;