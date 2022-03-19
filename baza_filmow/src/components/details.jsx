import React, {useEffect, useState} from 'react';
import "../App.css";
import NavbarLogo from "./navbarLogo";
import {ChakraProvider} from "@chakra-ui/react";
import MovieImage from "./movieImage";
import MovieDetails from "./movieDetails";
import {useParams} from "react-router-dom";

const axios = require('axios');
const Details = () => {

    const [movie, setMovie] = useState([])
    const movieId = useParams().id

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
                <div style={{background: "#333333", color: "white"}}>Loading...</div>
            </div>
        )
    }
};


export default Details;
