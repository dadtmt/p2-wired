import React, { Component } from "react"
import { Form, FormGroup, Label, Input } from "reactstrap"

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
