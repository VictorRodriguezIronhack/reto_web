  
import axios from "axios";


class PhonesService {

  constructor() {
    let service = axios.create({
      baseURL: "http://localhost:3000",
      withCredentials: true
    });


    this.service = service;
  }

  getPhones = () => {
    return this.service.get("/telefonos")
      .then(response => response.data)
  }

  getSinglePhone = (id) => {
    return this.service.get(`/telefonos/${id}`)
      .then(response => response.data)
  }



}

export default PhonesService;