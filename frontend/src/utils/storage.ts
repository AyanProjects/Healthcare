import { isObjectLike } from 'lodash'
import { isJsonString } from './util'

/**
 * Retrieve data from local storage
 *
 * @param {string} key
 * @return {object|string}
 */
function get(key: string) {
  const item = window.localStorage.getItem(key)

  if (item && isJsonString(item)) {
    return JSON.parse(item)
  }

  return item
}

/**
 * Put data into local storage
 *
 * @param {string} key
 * @param {*} value
 * @return {void}
 */
function set(key: string, value: any) {
  let itemValue = value

  if (isObjectLike(itemValue)) {
    itemValue = JSON.stringify(itemValue)
  }

  try {
    window.localStorage.setItem(key, itemValue)
  } catch (error) {
    //
  }
}

/**
 * Remove key/value from local storage
 *
 * @param key
 */
function remove(key: string) {
  window.localStorage.removeItem(key)
}

const storage = {
  get,
  set,
  remove
}

export default storage
