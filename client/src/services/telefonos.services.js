import axios from "axios";

class TelefonoService {
    constructor(){
    this.app = axios.create({
        baseURL: "http://localhost:5005/telefonos",
        withCredentials: true,
    });
}
    
    getAllPhones = () => this.app.get("/");
    getDetails = (id) => this.app.get(`/details/${id}`);
}



export default TelefonoService;