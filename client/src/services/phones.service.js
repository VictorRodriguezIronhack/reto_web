import axios from "axios";

class Phones {
  constructor() {
    this.app = axios.create({
      baseURL: `http://localhost:5000/api`,
      withCredentials: true,
    });
  }
  getPhones = () => this.app.get("/telefonos");
  getPhoneDetails = (id) => this.app.get(`/telefonos/${id}`);
}

export default Phones;
