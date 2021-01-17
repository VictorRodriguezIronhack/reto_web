import axios from 'axios'

export default class PhoneService {

    constructor() {
        this.apiHandler = axios.create({            
            baseURL: process.env.REACT_APP_API_URL,
            withCredentials: true
        })
    }

    getPhones = () => this.apiHandler.get('/phones/allPhones')
    getPhone = id => this.apiHandler.get(`/phones/onePhone/${id}`)    
    savePhone = phoneInfo => this.apiHandler.post(`/phones/newPhone`, phoneInfo)
    editPhone = (id, phoneInfo) => this.apiHandler.put(`/phones/editPhone/${id}`, phoneInfo)
    deletePhone = id => this.apiHandler.delete(`/phones/deletePhone/${id}`)
}
