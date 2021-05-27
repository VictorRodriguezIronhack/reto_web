import axios from 'axios';
export default class PhonesService {
    constructor(){
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/phones`,
            withCredentials: true
        })
    }
    
    get = () => this.instance.get('/');
}