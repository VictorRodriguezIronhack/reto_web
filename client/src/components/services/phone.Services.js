import axios from 'axios'

class PhoneService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}`,
            withCredentials: true
        })
    }

    getPhones = () => this.api.get('/telefonos')


}

export default PhoneService