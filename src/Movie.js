import React from "react"
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap"

const Movie = ({ Plot, Poster, Title }) => (
  <Card>
    {Poster !== "N/A" && <CardImg top src={Poster} />}
    <CardBody>
      <CardTitle>{Title}</CardTitle>
      <CardText>{Plot}</CardText>
    </CardBody>
  </Card>
)

export default Movie
