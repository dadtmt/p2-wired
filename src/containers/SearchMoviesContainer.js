import { connect } from "react-redux"
import SearchMovies from "../SearchMovies"
import {
  makeMoviesReceivedAction,
  makeFetchMoviesAction
} from "../actions/actions"

const mapStateToProps = state => ({
  movies: state.movies,
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
  moviesReceived: movies => dispatch(makeMoviesReceivedAction(movies)),
  fetchMovies: () => dispatch(makeFetchMoviesAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchMovies)
