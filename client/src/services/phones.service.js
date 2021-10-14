import axios from 'axios';

class phoneService {
    constructor() {
        this.instance = axios.create({
            baseURL: 'http://localhost:5000/api/telefonos',
            withCredentials: true
        })
    }

    findPhones = () => this.instance.get('/')
}

export default phoneService;