import axios from 'axios'

class PhonesService {

    constructor() {
        this.api = axios.create({ baseURL: 'https://localhost:500/api/phones' })
    }

    getAllPhones = () => {
        return this.api.get('/')
    }

    getOnePhone = id => {
        return this.api.get(`/${id}`)
    }

    getOneRandomPhone = () => {
        return this.api.get(`/random`)
    }

    newPhone = phone => {
        return this.api.post(`/new`, phone)
    }

    searchOnePhone = query => {
        return this.api.get(`/search?q=${query}`)
    }
}

const phonesService = new PhonesService()

export default phonesService