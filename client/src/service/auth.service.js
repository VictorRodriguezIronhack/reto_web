import axios from 'axios'

export default class AuthService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/auth',
            withCredentials: true
        })
    }

    signup = credentials => this.apiHandler.post('/registro', credentials)
    login = credentials => this.apiHandler.post('/iniciosesion', credentials)
    logout = () => this.apiHandler.post('/salir')
    isLoggedIn = () => this.apiHandler.get('/sesioniniciada')
}