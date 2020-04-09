import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className={this.props.className === undefined ? '' : this.props.className}>
        <span className="m-0 sentence">YOUR HARD WORK WORTHs IT ♡♡♡♡♡</span>
      </footer>
    )
  }
}

export default Footer;