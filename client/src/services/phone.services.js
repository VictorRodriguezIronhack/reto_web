import axios from 'axios';

class PhoneService {
    constructor() {
        this.app = axios.create({
            baseURL: `http://localhost:3000/api`
        });
    };

    getAllPhones = () => this.app.get("/telephones");
    getPhoneDetails = (id) => this.app.get(`/telephones/${id}`)
};

export default PhoneService; 