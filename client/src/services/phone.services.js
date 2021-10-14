import axios from 'axios'

class PhoneService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/phones`,
            withCredentials: true
        })
    }
    getPhones = () => this.instance.get('/')
}
export default PhoneService