import axios from 'axios'

export default class AuthService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL:'http://localhost:5000/api/auth',
            withCredentials: true
        })
    }

    homepage = () => this.apiHandler.get(`/`)
    profile = () => this.apiHandler.get(`/profile`)
    signup = credentials => this.apiHandler.post(`/signup`, credentials)
    login = credentials => this.apiHandler.post(`/login`, credentials)
    logout = () => this.apiHandler.post(`/logout`)
    isLoggedIn = () => this.apiHandler.get(`/loggedin`)
   
}