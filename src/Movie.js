import React from "react"
import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardFooter,
  CardTitle,
  CardText
} from "reactstrap"

const Movie = ({ Plot, Poster, Title }) => (
  <Card>
    {Poster !== "N/A" && <CardImg top src={Poster} />}
    <CardBody>
      <CardTitle>{Title}</CardTitle>
      <CardText>{Plot}</CardText>
    </CardBody>
    <CardFooter className="d-flex justify-content-center">
      <Button>Add to your list</Button>
    </CardFooter>
  </Card>
)

export default Movie
