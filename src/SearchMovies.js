import React, { Component } from "react"
import {
  CardColumns,
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Row
} from "reactstrap"
import { fetchSearchMovies, fetchWildMovies } from "./api/movies"
import ResultMovie from "./ResultMovie"

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
    fetchSearchMovies(event.target.value).then(
      data => (data.Search ? this.setState({ movies: data.Search }) : [])
    )
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
            {this.state.movies.map((movie, index) => (
              <ResultMovie
                key={index}
                {...movie}
                onSelect={this.props.onMovieSelect}
              />
            ))}
          </CardColumns>
        </Row>

        <Row />
      </Container>
    )
  }
}

export default SearchMovies
