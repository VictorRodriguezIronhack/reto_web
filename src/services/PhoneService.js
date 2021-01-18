  
import axios from "axios";


class PhoneService {

  constructor() {
    let service = axios.create({
      baseURL: "http://localhost:3001",
      withCredentials: true
    });
    this.service = service;
  }

  getPhones = () => {
    return this.service.get("/telefonos")
    .then(response => response.data)
  }

}

export default PhoneService;