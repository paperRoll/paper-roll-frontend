import React, { Component } from "react";

import "./Buttons.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Buttons extends Component {

  onSetDefaultClick() {

  }

  onSaveClick() {

  }

  render() {
    return (
      <div class="d-flex mr-5">
        <button className="btn mr-3">SET DEFAULT</button>
        <button className="btn">SAVE</button>
      </div>
    );
  }
}

export default Buttons;
