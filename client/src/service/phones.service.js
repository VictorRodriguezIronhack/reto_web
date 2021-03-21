import axios from 'axios'

class PhonesService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/phones`,
        })
    }

    getListPhones = () => this.api.get('/list')
}

export default PhonesService