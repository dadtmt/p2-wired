import { MOVIES_RECEIVED } from "../actions/actionTypes"

const moviesReducer = (previousState = [], action) => {
  switch (action.type) {
    case MOVIES_RECEIVED:
      return action.movies
    default:
      return previousState
  }
}

export default moviesReducer
