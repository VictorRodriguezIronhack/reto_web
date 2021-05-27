import axios from 'axios'

class PhonesService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/phones'
        })
    }

    getAllPhones = () => this.app.get('/')
    getOnePhone= phone_id => this.app.get(`/details/${phone_id}`)
}

export default PhonesService
