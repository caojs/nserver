import queryString from 'query-string'

import { rootApi } from '~/config'
import fetch from './fetch'

const request = function (url, options = {}) {
    if (url[0] === '/') {
        url = rootApi + url;
    }

    return fetch(url, options)
        .then(function(response) {
            if (!response.ok) {
                const error = Error(response.statusText)
                error.response = response
                throw error
            }
            return response;
        })
        .then(response => response.json())
}

const get = function (url, options = {}) {
    const { params } = options
    if (params) {
        url = url + '?' + queryString.stringify(params)
    }

    return request(url, Object.assign(options, {
        method: 'GET'
    }))
}

export default ({ get });