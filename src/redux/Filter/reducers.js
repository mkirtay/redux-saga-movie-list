import actions from './actions'

const initialState = []

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actions.SET_MOVIE_TYPE: {
            return {...state, movieType: action.payload}
        }
        default:
            return state;
    }
};

export default reducer;

