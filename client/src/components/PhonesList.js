import React from "react";
import {connect} from "react-redux";

import {fetchPhones, selectPhone} from "../actions";
import {Link} from "react-router-dom";
import Loading from "./Loading";

class PhonesList extends React.Component {
    componentDidMount() {
        this.props.fetchPhones();
    }

    renderList() {
        return this.props.phones.map((phone, index) => {
            return(
                <div className="item" key={index}>

                        <Link to={'/selected'}>
                            <div className="content" onClick={() => this.props.selectPhone(phone)}>{phone.name}</div>
                        </Link>


                </div>
            );
        });
    }


    render() {
        if (this.props.phones.length === 0){
            return <Loading/>
        }

        return (
            <div className="ui divided list">{this.renderList()}</div>
        )
    }
}

const mapStateToProps = state => {
    return {phones: Object.values(state.phones)};
}

export default connect(mapStateToProps, {fetchPhones, selectPhone})(PhonesList)