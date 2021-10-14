import axios from "axios";

class PhonesService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/phones`,
      withCredentials: true,
    });
  }
}

export default PhonesService;
