import axios from 'axios'

class PhonesService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.REACT_APP_API_URL}/telefonos`,
            withCredentials: true
        })
    }

    getAllPhones = () => this.api.get('/')
}

export default PhonesService