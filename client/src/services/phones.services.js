import axios from 'axios'

class PhoneService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:/phones',
      withCredentials: true
    })
  }

  getAlls = () => this.app.get("/")

}

export default PhoneService