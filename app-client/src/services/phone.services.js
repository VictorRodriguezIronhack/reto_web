import axios from 'axios'

class PhonesService {
    constructor() {

        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}` })
    }

    getAllPhones = () => {
        return this.api.get('/telefonos')
    }

    getOnePhone = phone_id => {
        return this.api.get(`/telefonos/${phone_id}`)
    }

}
const phonesService = new PhonesService()

export default phonesService