import axios from 'axios'

class PhonesService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: "http://localhost:5000/telephones",
            withCredentials: true
        })
    }
    getAll = () => this.apiHandler.get('/')
}

export default new PhonesService()