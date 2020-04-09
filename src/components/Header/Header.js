import React, { Component } from 'react';
import './Header.css';
import logo from '../../assets/img/logo.svg';

class Header extends Component {

  render() {
    return (
      <header className={this.props.className === undefined ? '' : this.props.className}>
        <img className="logo mr-3" src={logo} ></img>
        <h1 className="title">Paper Ro$$</h1>
      </header>
    )
  }
}

export default Header;