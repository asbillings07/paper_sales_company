import Axios from 'axios'

export const requestApi = (path, method = "GET", body = null) => {
    const url = `http://localhost:3005/api${path}`

    const options = {
        method,
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    }

    if (body !== null) {
        options.data = body
    }

    return Axios(url, options)
}