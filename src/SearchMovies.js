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
      s: ""
    }
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }
  handleSearchChange(event) {
    this.setState({ s: event.target.value })
    fetchSearchMovies(event.target.value).then(data =>
      data.Search ? this.setState({ movies: data.Search }) : []
    )
  }
  componentDidMount() {
    this.props.fetchMovies()
    fetchWildMovies().then(data => this.props.moviesReceived(data.Search))
    //fetchWildMovies().then(data => this.setState({ movies: data.Search }))
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
            {this.props.movies.map((movie, index) => (
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
