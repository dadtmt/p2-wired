import { MOVIES_RECEIVED, FETCH_MOVIES } from "./actionTypes"
import { makeFetchMoviesAction, makeMoviesReceivedAction } from "./actions"

describe("makeMoviesReceivedAction", () => {
  it("should return a MOVIES_RECEIVED action", () => {
    const movies = [
      {
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMzczOTU4NzkxMl5BMl5BanBnXkFtZTgwNTAxNTI5NDM@._V1_SX300.jpg",
        Title: "Wild Wild Country",
        Type: "series",
        Year: "2018–",
        imdbID: "tt7768848"
      },
      {
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMzczOTU4NzkxMl5BMl5BanBnXkFtZTgwNTAxNTI5NDM@._V1_SX300.jpg",
        Title: "Wild Wild Country",
        Type: "series",
        Year: "2018–",
        imdbID: "tt7768848"
      }
    ]

    const expected = {
      type: MOVIES_RECEIVED,
      movies
    }

    expect(makeMoviesReceivedAction(movies)).toEqual(expected)
  })
})

describe("makeFetchMoviesAction", () => {
  it("should return a FETCH_MOVIES action", () => {
    const expected = {
      type: FETCH_MOVIES
    }

    expect(makeFetchMoviesAction()).toEqual(expected)
  })
})
