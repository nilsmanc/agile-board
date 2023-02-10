import qs from 'query-string'

export const ENDPOINT = process.env.REACT_APP_API_URL

class ApiCall {
  domain: string

  constructor(domain: string) {
    this.domain = domain
  }

  async perform(url: string, data?: {}, config?: {}) {
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

  async get(path: string, searchParams: Record<string, any>) {
    return await this.perform(`${path}${qs.stringify(searchParams)}`)
  }

  async post(path: string, payload: {}) {
    return await this.perform(path, payload, {
      method: 'POST',
    })
  }

  async put(path: string, payload: {}) {
    return await this.perform(path, payload, {
      method: 'PUT',
    })
  }

  async delete(path: string) {
    return await this.perform(path, null, {
      method: 'DELETE',
    })
  }
}

export default new ApiCall(ENDPOINT)
