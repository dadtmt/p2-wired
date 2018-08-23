import React from "react"
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap"

const Movie = ({ Plot, Poster, Title }) => (
  <Card>
    <CardImg top src={Poster} />
    <CardBody>
      <CardTitle>{Title}</CardTitle>
      <CardSubtitle>{Plot}</CardSubtitle>
    </CardBody>
  </Card>
)

export default Movie
