import axios from 'axios'

class TelefonosService {
    constructor() {
        this.axios = axios.create({
            baseURL: 'http://localhost:5005/api/telefonos'
        })

    }
    getAllTelefonos() {
        return this.axios.get('/')
    }
}

const telefonosService = new TelefonosService()

export default telefonosService
