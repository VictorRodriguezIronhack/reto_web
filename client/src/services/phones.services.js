import axios from 'axios'

class PhoneService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5005/phones',
      withCredentials: true
    })
  }

  getAlls = () => this.app.get("/")
  getDetails = (id) => this.app.get(`/details/${id}`)

}

export default PhoneService