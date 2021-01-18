import axios from 'axios'

export default class UserService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/user`,

            withCredentials: true,
        })
    }

    getOneUser = userId => this.apiHandler.get(`/getOneUser/${userId}`)
}