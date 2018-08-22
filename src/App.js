import React, { Component } from "react"
import { Container, Jumbotron, Row, Col } from "reactstrap"
import "./App.css"
import Movie from "./Movie"

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedMovie: {
        title: "Back to the Future",
        plot:
          "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
        poster:
          "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      }
    }
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
          <Col xs="3">
            <Movie {...this.state.selectedMovie} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
