import axios from 'axios'

class PhonesService {
    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/telefonos',
            withCredentials: true
        })
    }

    getAllPhones = () => this.apiHandler.get('/allPhones')
    getOnePhone = phoneId => this.apiHandler.get(`/onePhone/${phoneId}`)
    newPhone = phoneInfo => this.apiHandler.post('/newPhone', phoneInfo)
    editPhone = (phoneId, phoneInfo) => this.apiHandler.put(`/editPhone/${phoneId}`, phoneInfo)
    deletePhone = phoneId => this.apiHandler.delete(`/deletePhone/${phoneId}`)

}

export default PhonesService