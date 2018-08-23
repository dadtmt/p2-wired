export const fetchWildMovies = () =>
  fetch("http://www.omdbapi.com/?y=2018&apikey=a96778b0&s=wild").then(
    response => response.json()
  )

export const fetchSearchMovies = s =>
  fetch(`http://www.omdbapi.com/?apikey=a96778b0&s=${s}`).then(response =>
    response.json()
  )

export const fetchMovieById = id =>
  fetch(`http://www.omdbapi.com/?apikey=a96778b0&i=${id}`).then(response =>
    response.json()
  )
