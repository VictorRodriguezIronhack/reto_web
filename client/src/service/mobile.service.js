import axios from 'axios'

export default class MobileService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/telefonos',
            withCredentials: true
        })
    }

    getMobiles = () => this.apiHandler.get('/')
    getOneMobile = mobileId => this.apiHandler.get(`/modelo/${mobileId}`)
}