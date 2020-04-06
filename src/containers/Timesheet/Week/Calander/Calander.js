import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Calander.css';
class Calander extends Component { 
      render() {
        return (
            <div class="form-group row" className="calander">
                <input type="date" className="form-control" />
            </div>
        )
      }
}

export default Calander;