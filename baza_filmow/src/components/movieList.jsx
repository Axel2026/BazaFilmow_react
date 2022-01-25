import OwlCarousel from "react-owl-carousel";
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

const axios = require('axios');

const MovieList = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMoviesFromServer()
    }, []);

    const history = useHistory();
    function gotoMoviePage(movieId) {
        history.push('/details', {movieId: movieId})
    }

    function getMoviesFromServer() {
        axios.get('https://pr-movies.herokuapp.com/api/movies')
            .then(function (response) {
                setMovies(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    function checkString(str, length) {
        if(str !== undefined) return str.length > length ? str.substring(0, length) + "..." : str
    }

    if(movies.length > 0){
        return (
            <div id="movie-list-container">
                    {movies.map((movie, index) =>
                        <div className='movie-list-item' key={'Movie' + index} onClick={() => gotoMoviePage(movies[index].id)}>
                            <img className="movie-list-image" src={movie.image} alt={movie.title}/>
                            <div className="overlay">
                                <div className="movie-item-text-title">{checkString(movie.title, 25)}</div>
                                <div className="movie-item-text-desc">{checkString(movie.content, 150)}</div>
                            </div>
                        </div>
                    )}
            </div>
        )
    }else{
        return(
            <div>Loading...</div>
        )
    }

};
export default MovieList;
