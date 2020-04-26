import { takeLatest, put } from 'redux-saga/effects'
import axios from 'axios'

import * as actionTypes from '../actions/actionTypes'
import * as actions from '../actions';

export function* getQuizes(action) {
    yield put(actions.getQuizesStart());
    try {
        const response = yield axios.get(
            'https://raw.githubusercontent.com/outlier-org/challenge-quiz/master/src/questions.json'
        );
        yield put(actions.getQuizesSuccess(response.data));
    } catch (err) {
        yield put(actions.getQuizesFail(err));
    }
}

export function* watchQuizes() {
    yield takeLatest(actionTypes.GET_QUIZES, getQuizes);
}