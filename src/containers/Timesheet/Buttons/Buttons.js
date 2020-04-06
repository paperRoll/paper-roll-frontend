import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Save from './Save/Save';
import SetDefault from './SetDefault/SetDefault';

class Buttons extends Component {
    render() {
        return(
            <div class="col-md-5" className="save">
                <div class="row">
                    <SetDefault></SetDefault>
                    <Save></Save>
                </div>
            </div>
        )
    }
}

export default Buttons;