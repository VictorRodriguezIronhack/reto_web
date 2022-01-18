import axios from 'axios'

class PhoneService {
    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}`,
            withCredentials: true

        })
    }
    getAllPhones = () => this.app.get("/telefonos")
    // getPhoneDetails = (id) => this.app.get(`/telefonos/detalles/${id}`)
}

export default PhoneService