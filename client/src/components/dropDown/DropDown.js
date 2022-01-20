
import { useState } from "react";
import {DropDownContainerHide, DropDownContainerShow} from "../../elements/DropDownContainer";

function DropDown({ icon, children }) {

	const [show, setShow] = useState(false);

	function toggleShow(){
		setShow(!show);
	}

	return(
		<>
			<button onClick={toggleShow}>{icon}</button>
			{show && <DropDownContainerShow>{children}</DropDownContainerShow>}
			{!show && <DropDownContainerHide>{children}</DropDownContainerHide>}
		</>
	);
}

export default DropDown;