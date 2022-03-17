import axios from "axios"
import phones from "./../phonesApi"

class PhonesService {
    constructor(){
        this.api = axios.create({
            baseURL: "http://localhost:5005/"
        })
    }

    getAll = () => {
        return this.api.get('/telefonos')
    }
}

const phonesService = new PhonesService

export default phonesService