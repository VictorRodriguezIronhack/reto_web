import { useState, useEffect } from "react";
import PhonesService from "../services/phones.service";

const myPhonesService = new PhonesService();


function usePhonebyID(id) {

	const [phoneById, setphoneById] = useState([]);

	useEffect(() => {
		async function getPhone() {
			const phones = await myPhonesService.getPhoneById(id);
			setphoneById(phones.data);
		}
		getPhone();
	}, [])

	return (
		{phoneById}
	);
}

export default usePhonebyID;