import actions from './actions'

const initialState = []

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actions.SET_DETAIL_MOVIE: {
            return {...state, detailMovieID: action.payload}
        }
        default:
            return state;
    }
};

export default reducer;

