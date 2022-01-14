import React, { Component } from 'react';

class Loading extends Component {
    render() {
        return (
            <div className=" loadingClass ui center aligned segment">
                <div className="ui active centered inline loader"></div>
                <h4 className="">Loading</h4>
            </div>
        );
    }
}

export default Loading;