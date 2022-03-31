import React, { useState } from 'react';
import actions from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import Box from '../../Box';
import './MovieList.scss';

const MovieList = () => {
    const dispatch = useDispatch();

    const [ inputValue, setInputValue ] = useState(null)

    function onChangeInput(e) {
        setInputValue(e.target.value)

        if ( e.target.value !== '' ) {
            dispatch({ type: actions.GET_MOVIE_LIST, payload: [e.target.value] });
        } else {
            dispatch({ type: actions.SET_MOVIE_LIST, payload: [] });
        }
    }

    function onChangeCheckbox(type) {
        /* https://www.omdbapi.com/?s= moo&type=movie &apikey=f1866b1e */
        dispatch({ type: actions.GET_MOVIE_TYPE, payload: [ inputValue +'&type=' + type ] })
    }

    function onDetailMovies(imdbID) {
        dispatch({ type: actions.GET_DETAIL_MOVIE, payload: imdbID })
    }

    const tegea = useSelector(state => state.MovieList.movieList);
    const detailMovie = useSelector(state => state.DetailMovie.detailMovieID );
    const filteredMovies = useSelector(state => state.FilteredMovies.movieType );

    {console.log(useSelector(state => state ), 'all states')}

    return (
        <div className="movie-list">
            <input type="text" onChange={onChangeInput}/>
            <div className="checkbox-wrapper">
                <label>
                    <input type="checkbox" onChange={() => onChangeCheckbox('movie')} name="xx" />
                    Movie
                </label>
                <br/><br/>
                <label>
                    <input type="checkbox" onChange={() => onChangeCheckbox('episode')} name="xx" />
                    Episode
                </label>
                <br/><br/>
                <label>
                    <input type="checkbox" onChange={() => onChangeCheckbox('series')} name="xx" />
                    Series
                </label>
            </div>
            <div className="box-wrapper">
                { detailMovie ?
                    <>
                        <button onClick={ () => dispatch({ type: actions.SET_DETAIL_MOVIE, payload: null }) }>back button</button>
                        <Box
                            title={detailMovie.Title}
                            image={detailMovie.Poster}
                            year={detailMovie.Year}
                        />
                    </>
                :
                    <>
                        { filteredMovies ? filteredMovies.map( (item, key) => (
                            <Box
                                key={key}
                                onClick={ () => onDetailMovies(item.imdbID) }
                                title={item.Title}
                                image={item.Poster}
                                year={item.Year}
                            />
                        ) )
                            :
                             tegea && tegea.map( (item, key) => (
                                <Box
                                    key={key}
                                    onClick={ () => onDetailMovies(item.imdbID) }
                                    title={item.Title}
                                    image={item.Poster}
                                    year={item.Year}
                                />
                            ) )
                        }
                        </>
                }

            </div>

        </div>
    )
}

export default MovieList;