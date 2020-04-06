import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SetDefault.css';

class SetDefault extends Component {
    render() {
        return(
            <div class="col-md-8" className="set">
                <input type="submit" value="SET DEFAULT"/>
            </div>
        )
    }
}

export default SetDefault;