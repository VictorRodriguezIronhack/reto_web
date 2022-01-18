import axios from 'axios'

export default class PhoneService {
  constructor() {
    this.app = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/telefonos`,
      withCredentials: true,
    })
  }

  getAllPhones = () => this.app.get('/')
  getOnePhone = (id) => this.app.get(`/details/${id}`)
}
