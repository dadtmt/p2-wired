import React from "react"
import { Card, CardBody, CardImg, CardTitle } from "reactstrap"

const ResultMovie = ({ Poster, Title }) => (
  <Card>
    {Poster !== "N/A" && <CardImg src={Poster} />}
    <CardBody>
      <CardTitle>{Title}</CardTitle>
    </CardBody>
  </Card>
)

export default ResultMovie
