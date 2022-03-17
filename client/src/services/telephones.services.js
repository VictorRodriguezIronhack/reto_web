import axios from 'axios'

class TelephonesService {
    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/` })
    }

    getPhones() {
        return this.api.get('/telefonos')
    }

}
const telephonesService = new TelephonesService()
export default telephonesService