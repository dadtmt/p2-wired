import React, { Component } from "react"
import { Form, FormGroup, Label, Input } from "reactstrap"

class SearchMovies extends Component {
  constructor() {
    super()
    this.state = {
      s: ""
    }
  }
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="searchMovies">Search movies</Label>
          <Input value={this.state.s} />
        </FormGroup>
      </Form>
    )
  }
}

export default SearchMovies
