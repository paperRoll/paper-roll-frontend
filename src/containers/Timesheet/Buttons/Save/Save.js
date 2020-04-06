import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Save.css';

class Save extends Component {
    render() {
        return(
            <div class="col-md-4" className="save">
                <input type="submit" value="SAVE"/>
            </div>
        )
    }
}

export default Save;