import React from "react";
import {useParams} from "react-router-dom";

function PhonesDetails(){
    let { id } = useParams();
    return (<div>details</div>);

}

export default PhonesDetails;