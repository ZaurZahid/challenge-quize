import * as actionTypes from '../actions/actionTypes'

const initialState = {
    quizes: [],
    loadingQuizes: false
}

const getQuizesStart = (state, action) => {
    return { ...state, loadingQuizes: true };
}

const getQuizesSuccess = (state, action) => {
    return { ...state, quizes: action.quizes, loadingQuizes: false };
}

const getQuizesFail = (state, action) => {
    return { ...state, loadingQuizes: false };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_QUIZES_START:
            return getQuizesStart(state, action);
        case actionTypes.GET_QUIZES_SUCCESS:
            return getQuizesSuccess(state, action);
        case actionTypes.GET_QUIZES_FAIL:
            return getQuizesFail(state, action);
        default:
            return state;
    }
}

export default reducer;