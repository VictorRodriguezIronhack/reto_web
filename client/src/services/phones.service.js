import axios from 'axios'


class mobileService {

    constructor() {
        this.app = axios.create({
            baseURL: "http://localhost:5000/api/telephones",
            withCredentials: true
        })
    }

    mobileList = () => this.app.get('/')
    mobileDetails = phone_id => this.app.get(`/details/${phone_id}`)
}



export default mobileService