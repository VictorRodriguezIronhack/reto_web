
import axios from 'axios'

// const env = runtimeEnv()

export default class PhonesService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: `http://localhost:5000/api/phones`
            //withCredentials: true
        })
    }

    getPhones = () => this.apiHandler.get('/getAllPhones')
    getPhone = id => this.apiHandler.get(`/getOnePhone/${id}`)

}