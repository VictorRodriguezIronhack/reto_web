import axios from 'axios'

class PhonesService {
  constructor() {
    this.app = axios.create({
      baseURL: "http://localhost:4000/telefonos",
    })
  }

  getAllPhones = () => this.app.get("/")
  getOnePhone = (id) => this.app.get(`/${id}/details`)
}

export default PhonesService