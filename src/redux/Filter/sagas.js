import {all, call, put, takeEvery} from 'redux-saga/effects';
import actions from './actions';
import axios from 'axios';
import {useSelector} from "react-redux";


const http = (url, type)=> {
    console.log(url, 'filter url')

    return axios({
        method: type,
        url: url
    })
        .then((res) => res)
        .catch((error) => error);
}


export function* sagaWorker(url, type, data, action) {
    const res = yield call(http, url, type, data)
    console.log(res.data, 'filter res data')
    yield put({
        type: action,
        payload: res.data.Search
    });
}


export default function* rootSaga() {
    yield all([
        takeEvery(actions.GET_MOVIE_TYPE, (action) =>
            sagaWorker(
                "http://www.omdbapi.com/?s=" + action.payload + "&apikey=f1866b1e",
                'get',
                {},
                actions.SET_MOVIE_TYPE )
        )
    ])
}
