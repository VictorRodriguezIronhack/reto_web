import React, { Component } from 'react';
import './spinner.css';

export class Spinner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`spinnerContainer ${this.props.loading ? 'd-flex' : 'd-none'}`}>
                <div className="spinner">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                </div>
            </div>
        )
    }
}

export default Spinner;
