import actions from './actions'

const initialState = []

const reducer = (state = initialState, action) => {
    console.log(action, 'reducer action')

    switch (action.type) {
        case actions.SET_MOVIE_LIST: {
            return {...state, movieList: action.payload}
        }
        default:
            return state;
    }
};

export default reducer;

