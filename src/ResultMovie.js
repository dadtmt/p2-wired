import React from "react"
import { Card, CardBody, CardImg, CardTitle } from "reactstrap"

const ResultMovie = ({ Poster, Title }) => (
  <Card onClick={() => console.log(`you've clicked on ${Title}`)}>
    {Poster !== "N/A" && <CardImg src={Poster} />}
    <CardBody>
      <CardTitle>{Title}</CardTitle>
    </CardBody>
  </Card>
)

export default ResultMovie
