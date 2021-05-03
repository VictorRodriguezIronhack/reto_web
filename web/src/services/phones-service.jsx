import http from './base-api-service';

const list = (search) => http.get('/phones', { params:  search  })

const get = (id) => http.get(`phones/${id}`)

const service = {
    list,
    get
}

export default service;