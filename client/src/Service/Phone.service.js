import axios from 'axios'

export default class AuthService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/phone',
            withCredentials: true
        })
    }

    newPhone = (props) => this.apiHandler.post('/new', props)
    signupOwner = credentials => this.apiHandler.post('/signup-owner', credentials)
    getPhones = () => this.apiHandler.get('/phones')
    getPhone = phoneId => this.apiHandler.get(`/getOnePhone/${phoneId}`)

   
}