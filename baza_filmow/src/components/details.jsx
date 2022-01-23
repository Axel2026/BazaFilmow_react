import React, {useEffect, useState} from 'react';
import "../App.css";
import NavbarLogo from "./navbarLogo";
import {ChakraProvider} from "@chakra-ui/react";
import MovieImage from "./movieImage";
import MovieDetails from "./movieDetails";

const axios = require('axios');
const Details = (props) => {

    const [movie, setMovie] = useState([])
    const movieId = props.location.state.movieId;

    useEffect(() => {
        getMovieFromServer()
    }, []);

    function getMovieFromServer() {
        axios.get('https://pr-movies.herokuapp.com/api/movies/' + movieId)
            .then(function (response) {
                setMovie(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    if (movie.title !== undefined) {
        return (
            <div id="Details">
                <ChakraProvider>
                    <NavbarLogo main={false}/>
                    <MovieImage imageSrc={movie.image}/>
                    <MovieDetails title={movie.title} desc={movie.content}/>
                </ChakraProvider>
            </div>
        )
    } else {
        return (
            <div>
                <div>Loading...</div>
            </div>
        )
    }
};


export default Details;
