import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import "font-awesome/css/font-awesome.min.css";

class Navigation extends Component {
  render() {
    return (
      <div className="nav-wrapper d-flex">
        <nav className="sidebar">
          <NavLink to="/summary" className="sidebar-item" activeClassName="active">
            <i className="fa fa-list-alt mr-sm-2"></i>
            <span className="d-sm-inline d-none">Summary</span>
          </NavLink>

          <NavLink to="/timesheet" className="sidebar-item" activeClassName="active">
            <i className="fa fa-calendar mr-sm-2"></i>
            <span className="d-sm-inline d-none">Timesheet</span>
          </NavLink>

          <NavLink to="/profile" className="sidebar-item" activeClassName="active">
            <i className="fa fa-id-card-o mr-sm-2"></i>
            <span className="d-sm-inline d-none">Profile</span>
          </NavLink>
        </nav>
        <div className="split-line"></div>
      </div>
    );
  }
}

export default Navigation;
