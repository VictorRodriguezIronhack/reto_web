import axios from 'axios'

export default class FilesService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: `https://phoneplanet-api.herokuapp.com/api/files`,

            withCredentials: true
        })
    }

    uploadImage = imageForm => this.apiHandler.post('/upload', imageForm)
}