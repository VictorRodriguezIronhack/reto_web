import http from './base-api-service';

const list = () => http.get("/telefonos");

const get = (id) => http.get(`/telefonos/${id}`)

const service = {
    list,
    get
}

export default service;