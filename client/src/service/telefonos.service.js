import axios from 'axios'

export default class PhoneService {

    constructor(){
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/telefonos'
        })
    }

    getPhones = () => this.apiHandler.get('/getAllPhones')
    getPhone = phoneId => this.apiHandler.get(`/getOnePhone/${phoneId}`)

}