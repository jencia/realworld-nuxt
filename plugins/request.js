import axios from 'axios'

export const request = axios.create({
    baseURL: 'https://conduit.productionready.io'
    // baseURL: 'http://realworld.api.fed.lagounews.com'
})

export default ({ store, redirect }) => {
    request.interceptors.request.use(config => {
        const { user } = store.state

        if (user && user.token) {
            config.headers.Authorization = `Token ${user.token}`
        }
        return config
    })
    request.interceptors.response.use(v => v, error => {
        const { status } = error.response

        if (status === 401) {
            redirect('/login')
        }
    })
}
