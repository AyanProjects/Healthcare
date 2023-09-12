import { get, set } from 'lodash'
import moment, { Moment } from 'moment'
import storage from './storage'

const APP_CACHE = { data: {} }

export const SET_DATA = (key: string, value: any) => {
  set(APP_CACHE.data, key, value)
}

export const GET_DATA = (key: string) => get(APP_CACHE.data, key)

export const CLEAR_DATA = () => set(APP_CACHE, 'data', {})

export function isJsonString(str: string | null) {
  if (str === null) {
    return false
  }

  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }

  return true
}

export function getToken() {
  // if not in Redux, try and grab it from local storage
  const token = storage.get('token')

  if (token) {
    return token
  }

  return false
}

/**
 * Sets the token to the local storage
 * @param {any} token
 */
export function setToken(token: any) {
  if (token) {
    storage.set('token', token)
  }
}

export function removeToken() {
  storage.remove('token')
}

export const avatarLetter = (str: string | undefined) => (str ? str.charAt(0) : '')

export const checkMoment = (date: Moment | null | undefined) =>
  date && moment.isMoment(moment(date)) ? moment(date) : null

export const removeEmptyKeys = (values: any) => {
  // const newValue = {}
  const newValue: { [key: string]: any } = {}
  Object.keys(values).forEach((val) => {
    const checkArr = typeof values[val] === 'object' ? Object.keys(values[val] || []).length > 0 : true

    if (values[val] !== '' && values[val] !== 0 && checkArr) {
      newValue[val] = values[val]
    }
  })

  return newValue
}

export const validateAccess = (page: string | string[], withPath?: boolean): boolean => {
  const accessData: string[] = [] // Replace this with your actual accessData

  if (accessData.indexOf('adminAccess') >= 0) {
    return true
  }

  if (accessData && page) {
    if (typeof page === 'string') {
      return accessData.includes(
        withPath ? page.substr(5, page.indexOf(':') > 0 ? page.indexOf('/:') - 5 : page.length) : page
      )
    }

    return page.filter((e) => accessData.includes(e)).length > 0
  }

  return false // Return false if no access data or page is provided
}
