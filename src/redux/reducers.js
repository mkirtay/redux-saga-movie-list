import {combineReducers} from 'redux'
import MovieListReducers from "./MovieList/reducers";
import DetailMovieReducers from "./DetailMovie/reducers";
import FilterReducers from "./Filter/reducers";


export default combineReducers({
    MovieList: MovieListReducers,
    DetailMovie: DetailMovieReducers,
    FilteredMovies: FilterReducers
})
