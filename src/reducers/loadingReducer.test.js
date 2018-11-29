import loadingReducer from "./loadingReducer"
import {
  makeFetchMoviesAction,
  makeMoviesReceivedAction
} from "../actions/actions"

describe("loadingReducer", () => {
  it("handles FETCH_MOVIES action", () => {
    const fakeState = false
    expect(loadingReducer(fakeState, makeFetchMoviesAction())).toEqual(true)
  })
  it("handles MOVIES_RECEIVED action", () => {
    const fakeState = true
    expect(loadingReducer(fakeState, makeMoviesReceivedAction([]))).toEqual(
      false
    )
  })
})
