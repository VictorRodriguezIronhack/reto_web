import axios from "axios";

class TelephoneService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/telefonos`,
      withCredentials: true,
    });
  }
  getTelephones = () => this.instance.get("/");
}

const telephoneService = new TelephoneService();
export default telephoneService;