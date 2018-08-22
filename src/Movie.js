import React from "react"
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap"

const Movie = ({ plot, poster, title }) => (
  <Card>
    <CardImg top src={poster} />
    <CardBody>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{plot}</CardSubtitle>
    </CardBody>
  </Card>
)

export default Movie
