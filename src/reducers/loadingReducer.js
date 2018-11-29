import { MOVIES_RECEIVED, FETCH_MOVIES } from "../actions/actionTypes"

const loadingReducer = (previousState = false, action) => {
  switch (action.type) {
    case MOVIES_RECEIVED:
      return false
    case FETCH_MOVIES:
      return true
    default:
      return previousState
  }
}

export default loadingReducer
