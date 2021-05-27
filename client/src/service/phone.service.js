import axios from 'axios'

class PhoneService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/telefonos'
        })
    }

    getAllPhones = () => this.app.get('/')
    getOnePhone = phone_id => this.app.get(`/${phone_id}`)
}

export default PhoneService