import qs from 'query-string'

export const ENDPOINT = process.env.REACT_APP_API_URL

class ApiCall {
  constructor(domain) {
    this.domain = domain
  }

  async perform(url, data, config) {
    const request = await fetch(`${this.domain}${url}`, {
      ...config,
      body: JSON.stringify(data),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })

    return await request.json()
  }

  async get(path, searchParams) {
    return await this.perform(`${path}${qs.stringify(searchParams)}`)
  }

  async post(path, payload) {
    return await this.perform(path, payload, {
      method: 'POST',
    })
  }

  async put(path, payload) {
    return await this.perform(path, payload, {
      method: 'PUT',
    })
  }

  async delete(path) {
    return await this.perform(path, null, {
      method: 'DELETE',
    })
  }
}

export default new ApiCall(ENDPOINT)
