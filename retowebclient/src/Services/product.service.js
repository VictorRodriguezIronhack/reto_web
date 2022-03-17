import axios from 'axios'

class ProductsService {
    constructor() {

        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/telefonos` })

    }

    getAllProducts = () => {
        return this.api.get('/getAllProducts')
    }

    getOneProduct = id => {
        return this.api.get(`/getOneProduct/${id}`)
    }

}
const productsService = new ProductsService()

export default productsService