import axios from 'axios'

export default class PhoneService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/phones`,
        })
    }

    getPhones = () => this.apiHandler.get('/getAllPhones')
    getPhone = phoneId => this.apiHandler.get(`/getOnePhone/${phoneId}`)
    savePhone = phoneInfo => this.apiHandler.post('/newPhone/', phoneInfo)
    editPhone = (phoneId, phone) => this.apiHandler.put(`/editPhone/${phoneId}`, phone)
    deletePhone = phoneId => this.apiHandler.delete(`/deletePhone/${phoneId}`)

}