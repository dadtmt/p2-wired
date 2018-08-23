import React, { Component } from "react"
import { Form, FormGroup, Label, Input } from "reactstrap"
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
      <Form>
        <FormGroup>
          <Label for="searchMovies">Search movies</Label>
          <Input value={this.state.s} onChange={this.handleSearchChange} />
        </FormGroup>
      </Form>
    )
  }
}

export default SearchMovies
