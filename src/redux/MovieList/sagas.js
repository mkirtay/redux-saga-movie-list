import {all, call, put, takeEvery} from 'redux-saga/effects';
import actions from './actions';
import axios from 'axios';

const http = (url, type)=> {
    return axios({
        method: type,
        url: url
    })
        .then((res) => res)
        .catch((error) => error);
}


export function* sagaWorker(url, type, data, action) {
    const res = yield call(http, url, type, data)
    yield put({
        type: action,
        payload: res.data.Search
    });
}


export default function* rootSaga() {
    yield all([
        takeEvery(actions.GET_MOVIE_LIST, (action) =>
            sagaWorker(
                "http://www.omdbapi.com/?s=" + action.payload + "&apikey=f1866b1e",
                'get',
                {},
                actions.SET_MOVIE_LIST )
        )
    ])
}
