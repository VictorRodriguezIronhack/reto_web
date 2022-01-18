import axios from "axios";

class PhoneService {
  constructor() {
    this.app = axios.create({
      baseURL: "http://localhost:5005/telefonos",
    });
  }

  getAllPhones = () => this.app.get('/');
  getPhoneDetails = (id) => this.app.get(`/details/${id}`);
}

export default PhoneService;