import { useState, useEffect } from "react";
import PhonesService from "../services/phones.service";

const myPhonesService = new PhonesService();


function useAllPhones() {

	const [allPhones, setAllPhones] = useState([]);

	const [loading, setLoading] = useState(true);


	useEffect(() => {
		async function getPhones() {
			const phones = await myPhonesService.getAllPhones();
			setAllPhones(phones.data);
			setLoading(false);
		}
		getPhones();
	}, [])

	return (
		{ allPhones, loading }
	);
}

export default useAllPhones;