import MovieListActions from './MovieList/actions'
import DetailMovieActions from './DetailMovie/actions'
import FilterActions from './Filter/actions'

const actions = Object.assign(
    MovieListActions,
    DetailMovieActions,
    FilterActions
);

export default actions;