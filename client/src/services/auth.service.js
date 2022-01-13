
import axios from 'axios';

class AuthService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/auth`,
            withCredentials: true
        })
    }

    signup = (userName, email, password) => this.instance.post("/signup", { userName, email, password })
    login = (email, pwd) => this.instance.post("/login", { email, pwd })
    logout = () => this.instance.get("/logout")
    isloggedin = () => this.instance.post("/isloggedin")
}

export default AuthService;