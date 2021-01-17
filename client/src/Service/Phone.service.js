import axios from 'axios'

export default class PhoneService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'https://phoneplanet-api.herokuapp.com/api/phone',
            withCredentials: true
        })
    }

    newPhone = (props) => this.apiHandler.post('/new', props)
    getPhones = () => this.apiHandler.get('/phones')
    getPhone = phoneId => this.apiHandler.get(`/getOnePhone/${phoneId}`)
    editPhone = (props) => this.apiHandler.post('/edit-phone/', props)
    deletePhone = phoneId =>this.apiHandler.post(`/deletePhone/${phoneId}`)
   
}