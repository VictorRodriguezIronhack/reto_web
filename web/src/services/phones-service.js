import http from './base-api-service';

const list = () => http.get("/telefonos");

const get = (id) => http.get(`/telefonos/${id}`)

const createOpinion = (phone, data) => http.post(`/telefonos/${phone}/opinion`, data)

const service = {
    list,
    get,
    createOpinion
}

export default service;