import axios from 'axios';

class PhoneService {
    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/phones`
        });
    };

    getAllPhones = () => this.app.get("/allPhones");
};

export default PhoneService; 