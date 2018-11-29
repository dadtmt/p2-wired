import { MOVIES_RECEIVED, FETCH_MOVIES } from "./actionTypes"

export const makeMoviesReceivedAction = movies => ({
  type: MOVIES_RECEIVED,
  movies
})

export const makeFetchMoviesAction = () => ({ type: FETCH_MOVIES })
