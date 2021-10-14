import axios from 'axios';

class PhoneService {
    constructor() {
        this.instance = axios.create({
            baseURL: 'http://localhost:5005/api',
            withCredentials: true
        })
    }

    findPhones = () => this.instance.get('/phones')
    findOnePhone = (id) => this.instance.get(`/details/${id}`)
}

export default PhoneService;