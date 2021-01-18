import axios from 'axios'

export default class UserService {

    constructor() {
        this.apiHandler = axios.create({
            //baseURL: 'http://localhost:5000/api/user',
            baseURL: `${process.env.REACT_APP_API_URL}/user`,

            withCredentials: true,
        })
    }

    getOneUser = userId => this.apiHandler.get(`/getOneUser/${userId}`)
}