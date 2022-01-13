import axios from "axios";

class PhoneService {
  constructor() {
    this.app = axios.create({
      baseURL: "http://localhost:5005/allphones",
      withCredentials: true,
    });
  }

  getAllPhones = () => this.app.get("/");
}

export default PhoneService;
