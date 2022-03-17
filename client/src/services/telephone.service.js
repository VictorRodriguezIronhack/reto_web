import axios from 'axios'

class TelephoneService {
    constructor() {
        this.axios = axios.create({ baseURL: 'http://localhost:5005/api/telefonos' })
    }

    getAllPhones() {
        return this.axios.get('/')
    }
}

const telephoneService = new TelephoneService()
export default telephoneService