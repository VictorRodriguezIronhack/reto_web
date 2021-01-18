import axios from 'axios'

export default class PhonesService {
    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000'
        })
    }

    getAllPhones = () => this.apiHandler.get('/telefonos')
    newPhone = phoneInfo => this.apiHandler.post('/new', phoneInfo)
    getPhoneDetails = phoneId => this.apiHandler.get(`/telefonos/${phoneId}`)
    updatePhone = (phoneId, newData) => this.apiHandler.put(`/edit/${phoneId}`, newData)
    deletePhone = phoneId => this.apiHandler.post(`/delete/${phoneId}`)
}