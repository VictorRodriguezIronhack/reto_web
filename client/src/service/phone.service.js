import axios from 'axios';

class PhoneService {
    constructor() {
        this.instance = axios.create({
            baseURL: 'http://localhost:5005/api/phones',
            withCredentials: true
        })
    }

    findPhones = () => this.instance.get('/')
}

export default PhoneService;