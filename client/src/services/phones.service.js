import axios from "axios";

class PhonesService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/telefonos`,
      withCredentials: true,
    });
  }

  getPhones = () => this.instance.get("/");
  getPhone = (id) => this.instance.get(`/${id}`);
}

export default PhonesService;
