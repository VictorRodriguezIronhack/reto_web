import axios from "axios";

class PhonesService {
  constructor() {
    this.app = axios.create({
      baseURL: "http://localhost:3000/telefonos",
      withCredentials: true,
    });
  }
  getAllPhones = () => this.app.get("/");
}

export default PhonesService;
