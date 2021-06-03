import axios from 'axios'

class Phones {
    constructor() {
        let service = axios.create({
            baseURL: 'http://localhost:3000'
        })
        this.service = service
    }

    getPhones = () => {
        return this.service.get('/telefonos')
            .then(response => response.data)
            .catch(err => console.error(err))
    }
}
export default Phones