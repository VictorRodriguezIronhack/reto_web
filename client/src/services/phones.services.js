import axios from "axios"


class PhonesService {
    constructor(){
        this.api = axios.create({
            baseURL: "http://localhost:5005/"
        })
    }

    getAll = () => {
        return this.api.get('/telefonos')
    }

    getOne = (id) => {
        
        return this.api.get(`/telefonos/${id}`)
    }
}

const phonesService = new PhonesService

export default phonesService