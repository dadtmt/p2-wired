import React, { Component } from "react"
import { Container, Jumbotron, Row, Col } from "reactstrap"
import "./App.css"
import Movie from "./Movie"
import SearchMovies from "./SearchMovies"
import { fetchMovieById } from "./api/movies"
import loader from "./ajax-loader.gif"

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      selectedMovie: {}
    }
    this.handleSelectMovie = this.handleSelectMovie.bind(this)
  }
  handleSelectMovie(id) {
    this.setState({
      loading: true
    })
    fetchMovieById(id).then(movie =>
      this.setState({ selectedMovie: movie, loading: false })
    )
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
              {this.state.loading ? (
                <div className="text-center">
                  <img alt="loading" src={loader} style={{ width: "30px" }} />
                </div>
              ) : (
                Object.keys(this.state.selectedMovie).length > 0 && (
                  <Movie {...this.state.selectedMovie} />
                )
              )}
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
