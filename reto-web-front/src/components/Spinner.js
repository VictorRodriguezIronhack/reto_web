import React from "react"
import './Spinner.scss';





class Spinner extends React.Component {
render(){
    return(
    <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}
}

export default Spinner;