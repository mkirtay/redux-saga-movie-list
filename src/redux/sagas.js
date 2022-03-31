import {all} from 'redux-saga/effects'
import MovieListSagas from './MovieList/sagas'
import DetailMovieSagas from './DetailMovie/sagas'
import FilterSagas from './Filter/sagas'

export default function* rootSaga() {
    yield all([
        MovieListSagas(),
        DetailMovieSagas(),
        FilterSagas()
    ])
}
