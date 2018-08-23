import React, { Component } from "react"
import { Container, Jumbotron, Row, Col } from "reactstrap"
import "./App.css"
import Movie from "./Movie"
import SearchMovies from "./SearchMovies"
import { fetchMovieById } from "./api/movies"

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedMovie: {}
    }
    this.handleSelectMovie = this.handleSelectMovie.bind(this)
  }
  handleSelectMovie(id) {
    fetchMovieById(id).then(movie => this.setState({ selectedMovie: movie }))
  }
  render() {
    return (
      <Container>
        <Jumbotron>
          <h1 className="display-3">Best Movies</h1>
          <hr />
          <p className="lead">List and bookmark your favorites movies.</p>
        </Jumbotron>
        <Row>
          <Col xs="8">
            <SearchMovies onMovieSelect={this.handleSelectMovie} />
          </Col>
          <Col xs="4">
            <div className="sticky-top">
              <Movie {...this.state.selectedMovie} />
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
