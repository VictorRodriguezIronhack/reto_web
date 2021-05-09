import http from './base-api-service';

const login = (email, password) => http.post('/login', { email, password })

const register = (user) => http.post('/users', user)

const logout = () => http.post('/logout')

const profile = () => http.get('/users/me')

const userProfile = (userId) => http.get(`/users/${userId}`)

const update = (userId, user) => {
    const data = new FormData()
    Object.keys(user).forEach(key => {
        if (typeof user[key] === Array) {
            user[key].forEach(value => data.append(`${key}[]`, value))
        } else {
            data.append(key, user[key])
        }
    })
    return http.patch(`/users/${userId}`, data)
}

const activateAccount = (token) => http.get(`/activate?token=${token}`);

const createPurchase = (purchase) => http.post('/purchase', purchase);

const googleProfile = () => http.get('/users/me');

const service = {
    login,
    register,
    logout,
    profile,
    userProfile,
    update,
    activateAccount,
    createPurchase,
    googleProfile,
}

export default service;