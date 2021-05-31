import axios from 'axios';

export default class PhoneService {
    constructor(){
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}`
        })
    }

    getAllPhones(){
        return(this.instance.get(`/phones/`));
    }

    getPhoneDetails(id){
        return(this.instance.get(`/phones/${id}`));
    }
}