import React, { Component } from "react"
import { Container, Jumbotron } from "reactstrap"
import "./App.css"

class App extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h1 className="display-3">Best Movies</h1>
          <hr />
          <p className="lead">List and bookmark your favorites movies.</p>
        </Jumbotron>
      </Container>
    )
  }
}

export default App
