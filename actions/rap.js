import { RSAA } from 'redux-api-middleware'
import queryString from 'query-string'

const nobody = (method) => (url, options, types) => {
  if (Array.isArray(options)) {
    types = options
    options = {}
  }

  const { params } = options

  if (params) {
    url = url + "?" + queryString.stringify(params)
  }

  return {
    [RSAA]: {
      endpoint: url,
      method: method,
      headers: { 'Content-Type': 'application/json' },
      types
    }
  }
}

const hasbody = (method) => (url, data, options, types) => {
  const n = nobody(method)(url, options, types)
  n[RSAA].body = data;
  return n
}

export const get = nobody('GET')
export const post = hasbody('POST')