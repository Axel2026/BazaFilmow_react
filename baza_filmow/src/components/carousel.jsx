import OwlCarousel from "react-owl-carousel";
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

const axios = require('axios');

const Carousel = () => {

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

    if(movies.length > 0){
        return (
            <div id="carousel">
                <p id="carouselTitle">Filmy</p>
                <OwlCarousel className='owl-theme' loop margin={1} nav items={5}>
                    {movies.map((movie, index) =>
                        <div className='carouselItem' key={'Movie' + index} onClick={() => gotoMoviePage(movies[index].id)}>
                            <img className="carouselImage" src={movies[index].image} alt={movies[index].title}/>
                        </div>
                    )}
                </OwlCarousel>
            </div>
        )
    }else{
        return(
            <div>Loading</div>
        )
    }

};
export default Carousel;
