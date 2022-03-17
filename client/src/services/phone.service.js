import axios from "axios";

class PhoneService {
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
    });

  }

  getAllPhones = () => {
    return this.api.get('/phones');
  };

  getOnePhone = (id) => {
    return this.api.get(`/phones/${id}`);
  };

}

const phoneService = new PhoneService();

export default phoneService;
