import axios from 'axios'

export default class FilesService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000',
            withCredentials: true
        })
    }

    uploadImage = imageForm => this.apiHandler.post('/files/upload', imageForm)
}