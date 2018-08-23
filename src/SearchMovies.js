import React, { Component } from "react"
import {
  Card,
  CardBody,
  CardColumns,
  CardDeck,
  CardImg,
  CardFooter,
  CardTitle,
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Row
} from "reactstrap"
import { fetchWildMovies } from "./api/movies"

class SearchMovies extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      s: ""
    }
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }
  handleSearchChange(event) {
    this.setState({ s: event.target.value })
  }
  componentDidMount() {
    fetchWildMovies().then(data => this.setState({ movies: data.Search }))
  }
  render() {
    return (
      <Container>
        <Row>
          <Col xs="12">
            <Form>
              <FormGroup>
                <Label for="searchMovies">Search movies</Label>
                <Input
                  value={this.state.s}
                  onChange={this.handleSearchChange}
                />
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <CardColumns>
            {this.state.movies.map(movie => (
              <Card key={movie.imdbID}>
                <CardImg src={movie.Poster} />
                <CardBody>
                  <CardTitle>{movie.Title}</CardTitle>
                </CardBody>
              </Card>
            ))}
          </CardColumns>
        </Row>

        <Row />
      </Container>
    )
  }
}

export default SearchMovies
