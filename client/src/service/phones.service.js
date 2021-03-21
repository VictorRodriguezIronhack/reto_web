import axios from 'axios'

class PhonesService {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:5000/api/phones',
        })
    }

    getListPhones = () => this.api.get('/list')
}

export default PhonesService