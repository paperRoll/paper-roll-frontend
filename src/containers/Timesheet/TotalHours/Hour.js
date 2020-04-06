import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Hour extends Component {
    render() {          
        return (
            <div class="col-md-7">
                <div class="row">
                    <div class="col-md-5">
                        <span>Total Billing Hours</span>
                    </div>
                    <div class="col-md-7">
                        <span>Total Compensated Hours</span>
                        {/* <input readOnly>test</input> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Hour;