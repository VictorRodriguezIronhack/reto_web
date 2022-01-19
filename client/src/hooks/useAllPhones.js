import { useState, useEffect } from "react";
import PhonesService from "../services/phones.service";

const myPhonesService = new PhonesService();


function useAllPhones() {

	const [allPhones, setAllPhones] = useState({
		phones: [],
		loading: true
	});


	useEffect(() => {
		async function getPhones() {

			try{
				const phones = await myPhonesService.getAllPhones();
				setAllPhones({
					phones: phones.data,
					loading: false
				});
			}
			catch(err){
				console.log(err);
			}
		}
		getPhones();
	}, [])

	return (
		{allPhones, setAllPhones} 
	);
}

export default useAllPhones;