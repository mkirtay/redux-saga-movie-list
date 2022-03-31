import {all, call, put, takeEvery} from 'redux-saga/effects';
import actions from './actions';
import axios from 'axios';

const http = (url, type)=> {
    console.log(url, 'url')
    return axios({
        method: type,
        url: url
    })
        .then((res) => res)
        .catch((error) => error);
}


export function* sagaWorker(url, type, data, action) {
    const res = yield call(http, url, type, data)
    console.log(res.data, 'res data')
    yield put({
        type: action,
        payload: res.data
    });
}


export default function* rootSaga() {
    yield all([
        takeEvery(actions.GET_DETAIL_MOVIE, (action) =>
            sagaWorker(
                'http://www.omdbapi.com/?i=' +  action.payload + '&apikey=f1866b1e',
                'get',
                {},
                actions.SET_DETAIL_MOVIE )
        )
    ])
}
