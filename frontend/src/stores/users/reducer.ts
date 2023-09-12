import { AnyAction, Reducer } from 'redux'
import storage from '../../utils/storage'
import { USER_INFO } from '../actions'

type TUserInfo = {
  fistName: string
  lastName: string
  email: string
}

interface IState {
  userInfo: TUserInfo | null
}

const INIT_STATE = {
  userInfo: storage.get('userData') || null
}

const DEFAULT_ACTION = {
  type: '',
  payload: null
}

const reducer: Reducer<IState, AnyAction> = (state = INIT_STATE, { type, payload } = DEFAULT_ACTION) => {
  switch (type) {
    case USER_INFO: {
      return { ...state, userInfo: payload }
    }

    default: {
      return state
    }
  }
}

export default reducer
