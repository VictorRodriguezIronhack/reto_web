import axios from 'axios'

const phonesService = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}`
})

export function phonesCall() {
    return phonesService.get('/telefonos')
}

export function getOnePhone(phoneId) {
    return phonesService.get(`/getOnePhone/${phoneId}`)
}