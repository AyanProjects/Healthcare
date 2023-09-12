import { message } from 'antd'
import axios from 'axios'
import { API_URL } from './config'
import storage from './storage'

const errorsParser = (errors: any) => {
  if (errors) {
    if (typeof errors === 'string') {
      message.error(errors)
    } else {
      Object.keys(errors).forEach((field) => {
        if (Array.isArray(errors[field])) {
          errors[field].forEach((error: string) => {
            message.error(`${field} ${error}`)
          })
        } else if (typeof errors[field] === 'object') {
          errorsParser(errors[field])
        } else {
          message.error(errors[field])
        }
      })
    }
  }
}

const apiClient = axios.create({
  baseURL: API_URL
})

apiClient.interceptors.request.use(
  (config) => {
    config.headers.Authorization = config.headers?.Authorization || storage.get('token')

    return config
  },
  (error) => Promise.reject(error)
)

apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  async ({ response }) => {
    if (response) {
      const { data, status } = response

      if (status === 401) {
        message.error(data.message)
        storage.remove('token')

        return Promise.resolve(response)
      }

      if (status < 500) {
        errorsParser(data.errors)

        return Promise.resolve(response)
      }

      return Promise.resolve(response)
    }
  }
)

export default apiClient
