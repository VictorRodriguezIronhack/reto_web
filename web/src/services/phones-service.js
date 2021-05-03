import http from './base-api-service';

const list = () => http.get("/telefonos")

const service = {
    list,
}

export default service;