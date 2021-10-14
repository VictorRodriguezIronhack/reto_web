import axios from 'axios';

class PhoneService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_SERVER_URL}/telefonos`,

        })
    }

    getPhones = () => this.instance.get("/");
    getOnePhone = (id) => this.instance.get(`/${id}`);
  
}

export default PhoneService;