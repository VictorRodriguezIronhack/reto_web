import axios from 'axios'

export default class PhoneService {
    constructor() {
        this.apiHandler = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/phones`
        })
    }

    getPhones = () => this.apiHandler.get('/getAll')
    getPhone = phoneId => this.apiHandler.get(`/getone/${phoneId}`)
    addPhone = (userId, phoneId) => this.apiHandler.put(`/addToWishList/${userId}/${phoneId}`)
    removePhone = (userId, phoneId) => this.apiHandler.delete(`/removeFromWishList/${userId}/${phoneId}`)
}