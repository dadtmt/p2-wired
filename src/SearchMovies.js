import React, { Component } from "react"
import { Form, FormGroup, Label, Input } from "reactstrap"

class SearchMovies extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="searchMovies">Search movies</Label>
          <Input />
        </FormGroup>
      </Form>
    )
  }
}

export default SearchMovies
