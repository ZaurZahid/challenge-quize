import * as actionTypes from './actionTypes'

export const getQuizes = () => ({
    type: actionTypes.GET_QUIZES
})

export const getQuizesStart = () => ({
    type: actionTypes.GET_QUIZES_START
})

export const getQuizesSuccess = (quizes) => ({
    type: actionTypes.GET_QUIZES_SUCCESS,
    quizes
})

export const getQuizesFail = (err) => ({
    type: actionTypes.GET_QUIZES_FAIL,
    err
})