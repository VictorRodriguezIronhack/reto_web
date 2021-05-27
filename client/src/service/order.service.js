import axios from 'axios'

class OrderService {
    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/order'
        })
    }

    createOrder = orderDetails => this.app.post('/new', orderDetails)
}

export default OrderService