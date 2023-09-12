import storage from '../../utils/storage'
import { USER_INFO } from '../actions'
import store from '../store'

export const setUserInfo = (payload: any) => {
  storage.set('userData', payload)
  store.dispatch({ type: USER_INFO, payload })
}
