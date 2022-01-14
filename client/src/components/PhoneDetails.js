import React from 'react';
import {connect} from "react-redux";

class PhoneDetails extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.selectedPhone.name}</h2>
                <p>{this.props.selectedPhone.manufacturer}</p>
                <p>Description: {this.props.selectedPhone.description}</p>
                <p>Color: {this.props.selectedPhone.color}</p>
                <p>Price: {this.props.selectedPhone.price}$</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {selectedPhone: state.selectedPhone};
};

export default connect(mapStateToProps, {})(PhoneDetails);