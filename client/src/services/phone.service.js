import axios from 'axios';

class PhoneService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/phone`,
            withCredentials: true
        })
    }

    findAll = () => this.instance.get("/")
    findOnePhone = (id) => this.instance.get(`/${id}`)
}

export default PhoneService;