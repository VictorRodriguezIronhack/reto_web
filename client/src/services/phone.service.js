import axios from 'axios'

export class PhoneService {
    constructor() {
        this.baseUrl = { baseURL: 'http://localhost:5000/api' }

        this.app = axios.create(this.baseUrl)
    }

    // login = (username, password) =>
    //     this.app.post('/login', {
    //         client_id: username,
    //         client_secret: password,
    //     })

    getPhones = () => this.app.get('/phones')

    // getClients = () => this.app.get(`/clients`)
}

