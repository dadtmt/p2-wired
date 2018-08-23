import React from "react"
import { Card, CardBody, CardImg, CardTitle } from "reactstrap"

const ResultMovie = ({ imdbID, onSelect, Poster, Title }) => (
  <Card
    style={{
      cursor: "pointer"
    }}
    onClick={() => onSelect(imdbID)}
  >
    {Poster !== "N/A" && <CardImg src={Poster} />}
    <CardBody>
      <CardTitle>{Title}</CardTitle>
    </CardBody>
  </Card>
)

export default ResultMovie
