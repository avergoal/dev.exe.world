import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.exe.world/',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
})

instance.interceptors.request.use(
    (config) => {
        const apiToken = localStorage.token
        if (apiToken) {
            if (config.data instanceof FormData) {
                config.data.append('api_token', apiToken)
            } else {
                config.data = {
                    ...config.data,
                    api_token: apiToken
                }
            }
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        console.log(error.response.data.error)
        if (
            error.response.data.error === 'user_not_logged_in' ||
            error.response.data.error === 'token_expired'
        ) {
            localStorage.removeItem('token')
            window.location.reload()
        }
        return Promise.reject(error)
    }
)

export default instance
