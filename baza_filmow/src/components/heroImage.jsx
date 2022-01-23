import React, {useEffect, useState} from "react";
import searchIcon from "../images/searchIcon.png";
import {Input} from "@chakra-ui/react";
import {useHistory} from "react-router-dom";

const axios = require('axios');

const HeroImage = () => {

    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState("")

    useEffect(() => {
        getMoviesFromServer()
    }, []);

    function getMoviesFromServer() {
        axios.get('https://pr-movies.herokuapp.com/api/movies')
            .then(function (response) {
                setMovies(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const history = useHistory();

    function gotoMoviePage(movieId) {
        history.push('/details', {movieId: movieId})
    }

    function checkString(str, length) {
        return str.length > length ? str.substring(0, length) + "..." : str;
    }

    return (
        <div id="heroImage">
            <img className="searchIconImageHero" src={searchIcon} alt="searchIcon"/>
            <Input type="search" id="formInputMainHero" placeholder="Wyszukaj..." size="lg" onChange={event => setQuery(event.target.value)}/>
            <div className="searchResult">
                {movies.filter(movie => {
                    if (query === '') {
                        return 0;
                    } else if (movie.title !== undefined) {
                        if(movie.title.toLowerCase().includes(query.toLowerCase())) return movie;
                    }
                }).map((movie, index) =>
                    <div className="searchBarItem" key={movie.id} onClick={() => gotoMoviePage(movie.id)}>
                        <div className="searchBarItemImage"><img src={movie.image}/></div>
                        <p className="searchBarItemTitle">{checkString(movie.title, 35)}</p>
                    </div>
                )}
            </div>
        </div>
    )
};

export default HeroImage;
