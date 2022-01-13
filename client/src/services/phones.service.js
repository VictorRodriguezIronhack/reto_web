import axios from 'axios'

class PhonesService{
	constructor(){
	
		this.axiosApp = axios.create({
			baseURL: 'http://localhost:5000/api/telefonos',
			withCredentials: true
		});
	}

	getAllPhones = () => this.axiosApp.get('/');
}

export default PhonesService;