
import { useState } from "react";
import {DropDownContainerHide, DropDownContainerShow} from "../../elements/DropDownContainer";

function DropDown({ icon, bubble, children }) {

	const [show, setShow] = useState(false);

	function toggleShow(){
		setShow(!show);
	}

	return( 
		<>
			<span onClick={toggleShow}>{icon}
			{bubble}
			</span>
			{show && <DropDownContainerShow>{children}</DropDownContainerShow>}
			{!show && <DropDownContainerHide>{children}</DropDownContainerHide>}
		</>
	);
}

export default DropDown;